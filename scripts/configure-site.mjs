import fs from "node:fs";

function validHttpsUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" && url.hostname ? url.toString() : "";
  } catch {
    return "";
  }
}

function validPublisherId(value) {
  return typeof value === "string" && /^ca-pub-\d{16}$/.test(value);
}

function validSlotId(value) {
  return typeof value === "string" && /^\d+$/.test(value);
}

function validAnalyticsId(value) {
  return typeof value === "string" && /^G-[A-Z0-9]+$/.test(value);
}

const rawPublisherId = process.env.ADSENSE_PUBLISHER_ID?.trim() ?? "";
const publisherId = validPublisherId(rawPublisherId) ? rawPublisherId : "";
const rawSlotId = process.env.ADSENSE_IN_ARTICLE_SLOT?.trim() ?? "";
const rawAnalyticsId = process.env.GA_MEASUREMENT_ID?.trim() ?? "";

const config = {
  analyticsMeasurementId: validAnalyticsId(rawAnalyticsId) ? rawAnalyticsId : "",
  adsensePublisherId: publisherId,
  adsenseSlots: {
    inArticle: validSlotId(rawSlotId) ? rawSlotId : "",
  },
  supportUrl: validHttpsUrl(process.env.SUPPORT_URL ?? ""),
  digitalProductsUrl: validHttpsUrl(process.env.DIGITAL_PRODUCTS_URL ?? ""),
  newsletterUrl: validHttpsUrl(process.env.NEWSLETTER_URL ?? ""),
};

const output = `// Generated at build time. These browser identifiers are public, not secrets.\nwindow.__CS_SITE_CONFIG__ = Object.freeze(${JSON.stringify(config, null, 2)});\n`;
fs.writeFileSync("dist/site-config.js", output);

// Generate verification metadata only from a correctly formatted publisher ID supplied
// by the actual AdSense account. Never ship a placeholder seller record.
const indexPath = "dist/index.html";
let indexHtml = fs.readFileSync(indexPath, "utf8");
indexHtml = indexHtml.replace(/\s*<meta\s+name=["']google-adsense-account["'][^>]*>\s*/gi, "\n    ");
if (publisherId) {
  const verificationTag = `<meta name="google-adsense-account" content="${publisherId}">`;
  if (!/<head[^>]*>/i.test(indexHtml)) {
    throw new Error("Cannot add AdSense verification tag: dist/index.html has no head element");
  }
  indexHtml = indexHtml.replace(/<head([^>]*)>/i, `<head$1>\n    ${verificationTag}`);
}
fs.writeFileSync(indexPath, indexHtml);

const adsTxtPath = "dist/ads.txt";
const adsTxt = publisherId
  ? `google.com, ${publisherId.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
  : "# Google AdSense ads.txt\n# Populated automatically after a valid ADSENSE_PUBLISHER_ID is configured.\n# Do not add placeholder publisher IDs.\n";
fs.writeFileSync(adsTxtPath, adsTxt);

const enabled = [
  config.analyticsMeasurementId ? "analytics" : null,
  config.adsensePublisherId && Object.values(config.adsenseSlots).some(Boolean) ? "ads" : null,
  config.supportUrl ? "support checkout" : null,
  config.digitalProductsUrl ? "digital products" : null,
  config.newsletterUrl ? "newsletter" : null,
].filter(Boolean);
console.log(`site integrations: ${enabled.join(", ") || "disabled"}`);
console.log(`AdSense verification: ${publisherId ? "publisher meta tag and ads.txt generated" : "not configured"}`);
