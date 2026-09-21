import fs from "node:fs";

const ORIGIN = (process.env.SITE_ORIGIN || "https://neuro-kodes.github.io/computer-science").replace(/\/$/, "");
const TODAY = new Date().toISOString().slice(0, 10);

const nav = JSON.parse(fs.readFileSync("src/data/content/nav.json", "utf8"));
const navRest = JSON.parse(fs.readFileSync("src/data/content/nav-rest.json", "utf8"));
const topics = [...nav, ...navRest];
const paths = JSON.parse(fs.readFileSync("src/data/content/paths.json", "utf8"));
const sectionGroups = JSON.parse(fs.readFileSync("src/data/content/section-groups.json", "utf8"));
const phases = JSON.parse(fs.readFileSync("src/data/content/phases.json", "utf8"));

const PROGRAMMING = new Set(sectionGroups.find((g) => g.id === "programming")?.sections ?? []);

function topicPath(slug, section) {
  if (PROGRAMMING.has(section)) return `/programming/${section}/${slug}`;
  return `/${section}/${slug}`;
}

function sectionPath(section) {
  if (PROGRAMMING.has(section)) return `/programming/${section}`;
  return `/${section}`;
}

const sections = [...new Set(topics.map((t) => t.section))];

const urls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/library", priority: "0.9", changefreq: "weekly" },
  ...phases.map((p) => ({ loc: `/${p.id}`, priority: "0.9", changefreq: "weekly" })),
  ...sectionGroups
    .filter((g) => g.sections.length > 1)
    .map((g) => ({ loc: `/${g.id}`, priority: "0.8", changefreq: "weekly" })),
  { loc: "/paths", priority: "0.8", changefreq: "weekly" },
  { loc: "/about", priority: "0.4", changefreq: "yearly" },
  { loc: "/privacy", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms", priority: "0.3", changefreq: "yearly" },
  { loc: "/contact", priority: "0.4", changefreq: "yearly" },
  ...sections.map((s) => ({ loc: sectionPath(s), priority: "0.8", changefreq: "weekly" })),
  ...topics.map((t) => ({ loc: topicPath(t.slug, t.section), priority: "0.7", changefreq: "monthly" })),
  ...paths.map((p) => ({ loc: `/paths/${p.id}`, priority: "0.6", changefreq: "monthly" })),
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
