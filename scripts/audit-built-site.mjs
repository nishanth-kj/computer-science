import fs from "node:fs";
import path from "node:path";

const cname = fs.existsSync("CNAME") ? fs.readFileSync("CNAME", "utf8").trim() : "";
const fallbackOrigin = /^[a-z0-9.-]+$/i.test(cname) ? `https://${cname}` : "https://computer-science.site";
const origin = (process.env.SITE_ORIGIN?.trim() || fallbackOrigin).replace(/\/+$/, "");
const siteUrl = new URL(origin);
const basePath = siteUrl.pathname.replace(/\/+$/, "");
const sitemapPath = "dist/sitemap.xml";
const robotsPath = "dist/robots.txt";

function fail(message) {
  console.error(`SEO build audit failed: ${message}`);
  process.exitCode = 1;
}

if (!fs.existsSync(sitemapPath)) {
  fail("dist/sitemap.xml is missing");
  process.exit();
}
if (!fs.existsSync(robotsPath)) {
  fail("dist/robots.txt is missing");
  process.exit();
}

const sitemap = fs.readFileSync(sitemapPath, "utf8");
const robots = fs.readFileSync(robotsPath, "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
if (!sitemap.includes("<urlset") || locations.length === 0) {
  fail("sitemap XML has no readable URL entries");
  process.exit();
}
if (new Set(locations).size !== locations.length) {
  fail("sitemap contains duplicate URLs");
}

const expectedSitemapUrl = `${origin}/sitemap.xml`;
if (!robots.split(/\r?\n/).some((line) => line.trim() === `Sitemap: ${expectedSitemapUrl}`)) {
  fail(`robots.txt must point to ${expectedSitemapUrl}`);
}

// A configured publisher must have matching verification metadata and seller record.
// Without a valid ID, this build must not publish a fake/placeholder seller record.
const rawPublisherId = process.env.ADSENSE_PUBLISHER_ID?.trim() ?? "";
const publisherId = /^ca-pub-\d{16}$/.test(rawPublisherId) ? rawPublisherId : "";
const indexHtml = fs.readFileSync("dist/index.html", "utf8");
const adsTxtPath = "dist/ads.txt";
if (!fs.existsSync(adsTxtPath)) {
  fail("dist/ads.txt is missing");
} else {
  const adsTxt = fs.readFileSync(adsTxtPath, "utf8");
  const sellerLine = publisherId
    ? `google.com, ${publisherId.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0`
    : "";
  if (publisherId && !adsTxt.split(/\r?\n/).some((line) => line.trim() === sellerLine)) {
    fail("dist/ads.txt does not contain the exact seller record for ADSENSE_PUBLISHER_ID");
  }
  if (!publisherId && /^\s*google\.com,\s*pub-\d+/m.test(adsTxt)) {
    fail("dist/ads.txt contains a seller ID but ADSENSE_PUBLISHER_ID is not valid/configured");
  }
}
const verificationTags = [...indexHtml.matchAll(/<meta\s+name=["']google-adsense-account["']\s+content=["']([^"']+)["'][^>]*>/gi)];
if (publisherId && !verificationTags.some((match) => match[1] === publisherId)) {
  fail("dist/index.html is missing the AdSense verification meta tag for ADSENSE_PUBLISHER_ID");
}
if (!publisherId && verificationTags.length) {
  fail("dist/index.html contains an AdSense verification tag without a valid ADSENSE_PUBLISHER_ID");
}

for (const loc of locations) {
  let url;
  try {
    url = new URL(loc);
  } catch {
    fail(`invalid sitemap URL: ${loc}`);
    continue;
  }
  if (url.origin !== siteUrl.origin || !(url.pathname === basePath || url.pathname.startsWith(`${basePath}/`))) {
    fail(`URL does not belong to configured site origin: ${loc}`);
    continue;
  }

  let routePath = url.pathname.slice(basePath.length) || "/";
  if (!routePath.startsWith("/")) routePath = `/${routePath}`;
  const relativeRoute = routePath.replace(/^\/+/, "");
  const pageFile = routePath === "/" ? "dist/index.html" : path.join("dist", relativeRoute, "index.html");
  if (!fs.existsSync(pageFile)) {
    fail(`sitemap URL has no prerendered HTML: ${loc} (expected ${pageFile})`);
    continue;
  }

  const html = fs.readFileSync(pageFile, "utf8");
  const titles = [...html.matchAll(/<title>[^<]+<\/title>/g)];
  const descriptions = [...html.matchAll(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/g)];
  const canonicals = [...html.matchAll(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?\s*>/g)];
  if (titles.length !== 1) fail(`${loc} must have exactly one non-empty title`);
  if (descriptions.length !== 1) fail(`${loc} must have exactly one meta description`);
  if (canonicals.length !== 1) fail(`${loc} must have exactly one canonical link`);
  if (canonicals.length === 1 && canonicals[0][1] !== loc) {
    fail(`canonical does not match sitemap URL for ${loc}: ${canonicals[0][1]}`);
  }
}

if (process.exitCode) {
  console.error(`Checked ${locations.length} sitemap entries; one or more checks failed.`);
} else {
  console.log(`SEO/monetization audit passed: ${locations.length} unique sitemap URLs, canonical metadata, robots sitemap, and AdSense verification/ads.txt state are consistent.`);
}
