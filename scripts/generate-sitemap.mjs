import fs from "node:fs";

const ORIGIN = (process.env.SITE_ORIGIN || "https://nishanth-kj.github.io/computer-science").replace(/\/$/, "");
const TODAY = new Date().toISOString().slice(0, 10);
const PROGRAMMING = new Set(["languages", "fundamentals", "oop", "dsa", "discrete-math"]);

function slugsFrom(file) {
  const src = fs.readFileSync(file, "utf8");
  const out = [];
  const re = /\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(src))) out.push({ slug: match[1], section: match[2] });
  return out;
}

function idsFrom(file) {
  const src = fs.readFileSync(file, "utf8");
  return [...src.matchAll(/^\s+id: "([^"]+)"/gm)].map((m) => m[1]);
}

function topicPath(slug, section) {
  if (PROGRAMMING.has(section)) return `/programming/${section}/${slug}`;
  return `/${section}/${slug}`;
}

function sectionPath(section) {
  if (PROGRAMMING.has(section)) return `/programming/${section}`;
  return `/${section}`;
}

const topics = [...slugsFrom("src/lib/content/nav.ts"), ...slugsFrom("src/lib/content/nav-rest.ts")];
const sections = [...new Set(topics.map((t) => t.section))];
const paths = idsFrom("src/lib/content/paths.ts");

const urls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/topics", priority: "0.9", changefreq: "weekly" },
  { loc: "/programming", priority: "0.8", changefreq: "weekly" },
  { loc: "/paths", priority: "0.8", changefreq: "weekly" },
  { loc: "/quiz", priority: "0.6", changefreq: "monthly" },
  { loc: "/systems", priority: "0.8", changefreq: "weekly" },
  { loc: "/software", priority: "0.8", changefreq: "weekly" },
  { loc: "/security", priority: "0.8", changefreq: "weekly" },
  { loc: "/intelligence", priority: "0.8", changefreq: "weekly" },
  { loc: "/about", priority: "0.4", changefreq: "yearly" },
  { loc: "/privacy", priority: "0.3", changefreq: "yearly" },
  { loc: "/contact", priority: "0.4", changefreq: "yearly" },
  ...sections.map((s) => ({ loc: sectionPath(s), priority: "0.8", changefreq: "weekly" })),
  ...topics.map((t) => ({ loc: topicPath(t.slug, t.section), priority: "0.7", changefreq: "monthly" })),
  ...paths.map((id) => ({ loc: `/paths/${id}`, priority: "0.6", changefreq: "monthly" })),
];

const seen = new Set();
const unique = urls.filter((u) => {
  if (seen.has(u.loc)) return false;
  seen.add(u.loc);
  return true;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map(
    (u) => `  <url>
    <loc>${ORIGIN}${u.loc === "/" ? "/" : u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml);
fs.writeFileSync(
  "public/robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`,
);
console.log(`sitemap ${unique.length} urls -> ${ORIGIN}`);
