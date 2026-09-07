import fs from "node:fs";
import path from "node:path";

const ORIGIN = (process.env.SITE_ORIGIN || "https://neuro-kodes.github.io/computer-science").replace(/\/$/, "");
const sectionGroups = JSON.parse(fs.readFileSync("src/data/content/section-groups.json", "utf8"));
const PROGRAMMING = new Set(sectionGroups.find((g) => g.id === "programming")?.sections ?? []);

function parseNav(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function parsePaths(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function topicUrl(slug, section) {
  if (PROGRAMMING.has(section)) return `/programming/${section}/${slug}`;
  return `/${section}/${slug}`;
}

function sectionUrl(section) {
  if (PROGRAMMING.has(section)) return `/programming/${section}`;
  return `/${section}`;
}

const templatePath = "dist/index.html";
if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found! Run ng build first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf8");

const navItems = [
  ...parseNav("src/data/content/nav.json"),
  ...parseNav("src/data/content/nav-rest.json"),
];
const pathsList = parsePaths("src/data/content/paths.json");
const sectionsList = [...new Set(navItems.map((n) => n.section))];

const staticPages = [
  {
    path: "/",
    title: "CS — Learn computer science in depth",
    desc: "The path to learn full computer science in depth — programming, systems, networks, databases, AI, theory, and ordered learning paths.",
    h1: "Learn computer science in depth",
  },
  {
    path: "/library",
    title: "Library · CS",
    desc: "The full computer science catalog covering networking, operating systems, and databases in depth.",
    h1: "Library",
  },
  {
    path: "/paths",
    title: "Learning Paths · CS",
    desc: "Curated learning paths through computer science, from beginner to backend engineering.",
    h1: "Learning Paths",
  },
  {
    path: "/about",
    title: "About · CS",
    desc: "About CS — a free, comprehensive, structured handbook covering the entire computer science curriculum.",
    h1: "About CS",
  },
  {
    path: "/privacy",
    title: "Privacy Policy · CS",
    desc: "Privacy policy, cookie disclosures, and data protection practices for CS.",
    h1: "Privacy Policy",
  },
  {
    path: "/terms",
    title: "Terms of Service · CS",
    desc: "Terms of service and educational use license for CS.",
    h1: "Terms of Service",
  },
  {
    path: "/contact",
    title: "Contact Us · CS",
    desc: "Get in touch with the CS editorial and maintainer team at neurokodes@gmail.com for corrections, feedback, or inquiries.",
    h1: "Contact Us",
  },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderHtml(p, title, desc, bodyContent, schema) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // Replace Description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(desc)}" />`
  );

  // Replace Canonical Link
  const canonicalUrl = `${ORIGIN}${p === "/" ? "" : p}`;
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace OpenGraph
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(desc)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(desc)}" />`
  );

  // Inject Schema.org JSON-LD
  if (schema) {
    const jsonLdTag = `<script type="application/ld+json" id="ld-json">${JSON.stringify(schema)}</script>`;
    html = html.replace("</head>", `  ${jsonLdTag}\n  </head>`);
  }

  // Inject prerendered semantic fallback inside <app-root>
  if (bodyContent) {
    html = html.replace(
      "<app-root></app-root>",
      `<app-root>${bodyContent}</app-root>`
    );
  }

  return html;
}

let count = 0;

// 1. Static Pages
for (const page of staticPages) {
  if (page.path === "/") continue; // Root already exists as dist/index.html
  const routeDir = path.join("dist", page.path.replace(/^\//, ""));
  fs.mkdirSync(routeDir, { recursive: true });

  const body = `
    <div style="max-width: 44rem; margin: 0 auto; padding: 3rem 1.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem;">${escapeHtml(page.h1)}</h1>
      <p style="font-size: 1.1rem; color: #888; line-height: 1.6;">${escapeHtml(page.desc)}</p>
      ${page.path === "/contact" ? '<p style="margin-top: 1.5rem; font-size: 1.1rem;"><a href="mailto:neurokodes@gmail.com" style="color: #7ea8c4;">neurokodes@gmail.com</a></p>' : ""}
    </div>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.desc,
    url: `${ORIGIN}${page.path}`,
  };

  const html = renderHtml(page.path, page.title, page.desc, body, schema);
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  count++;
}

// 2. Learning Paths
for (const p of pathsList) {
  const routePath = `/paths/${p.id}`;
  const routeDir = path.join("dist", "paths", p.id);
  fs.mkdirSync(routeDir, { recursive: true });

  const title = `${p.title} · Learning Path · CS`;
  const desc = p.blurb;
  const body = `
    <div style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;">
      <p style="font-size: 0.8rem; text-transform: uppercase; color: #888;">Learning Path</p>
      <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem;">${escapeHtml(p.title)}</h1>
      <p style="font-size: 1.1rem; color: #888; line-height: 1.6;">${escapeHtml(p.blurb)}</p>
    </div>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: p.title,
    description: p.blurb,
    url: `${ORIGIN}${routePath}`,
  };

  const html = renderHtml(routePath, title, desc, body, schema);
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  count++;
}

// 3. Sections
for (const s of sectionsList) {
  const routePath = sectionUrl(s);
  const routeDir = path.join("dist", routePath.replace(/^\//, ""));
  fs.mkdirSync(routeDir, { recursive: true });

  const sTitle = s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `${sTitle} · Computer Science Handbook`;
  const desc = `In-depth curriculum and reference guide for ${sTitle}.`;
  const body = `
    <div style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem;">${escapeHtml(sTitle)}</h1>
      <p style="font-size: 1.1rem; color: #888; line-height: 1.6;">${escapeHtml(desc)}</p>
    </div>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: desc,
    url: `${ORIGIN}${routePath}`,
  };

  const html = renderHtml(routePath, title, desc, body, schema);
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  count++;
}

// 4. Topics
for (const t of navItems) {
  const routePath = topicUrl(t.slug, t.section);
  const routeDir = path.join("dist", routePath.replace(/^\//, ""));
  fs.mkdirSync(routeDir, { recursive: true });

  const sTitle = t.section.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `${t.title} · ${sTitle} · CS`;
  const desc = t.summary;
  const canonicalUrl = `${ORIGIN}${routePath}`;

  const body = `
    <article style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;">
      <p style="font-size: 0.8rem; text-transform: uppercase; color: #888; margin-bottom: 0.5rem;">${escapeHtml(sTitle)}</p>
      <h1 style="font-size: 2.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 1rem;">${escapeHtml(t.title)}</h1>
      <p style="font-size: 1.15rem; color: #aaa; line-height: 1.6; margin-bottom: 2rem;">${escapeHtml(t.summary)}</p>
      <div style="display: inline-block; padding: 0.25rem 0.6rem; border-radius: 9999px; background: #222; font-size: 0.75rem; color: #ddd; text-transform: uppercase;">
        Level: ${escapeHtml(t.level)}
      </div>
    </article>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: t.title,
    description: t.summary,
    educationalLevel: t.level,
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "CS",
      url: ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: "CS",
      url: ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${ORIGIN}/logo.svg`,
      },
    },
    mainEntityOfPage: canonicalUrl,
  };

  const html = renderHtml(routePath, title, desc, body, schema);
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  count++;
}

console.log(`Prerendered ${count} static HTML route pages with SEO & Schema.org tags into dist/`);
