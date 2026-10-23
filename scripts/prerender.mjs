import fs from "node:fs";
import path from "node:path";

const cname = fs.existsSync("CNAME") ? fs.readFileSync("CNAME", "utf8").trim() : "";
const fallbackOrigin = /^[a-z0-9.-]+$/i.test(cname) ? `https://${cname}` : "https://computer-science.site";
const ORIGIN = (process.env.SITE_ORIGIN?.trim() || fallbackOrigin).replace(/\/+$/, "");
const sectionGroups = JSON.parse(fs.readFileSync("src/data/content/section-groups.json", "utf8"));
const PROGRAMMING = new Set(sectionGroups.find((g) => g.id === "programming")?.sections ?? []);
const phases = JSON.parse(fs.readFileSync("src/data/content/phases.json", "utf8"));
const sectionMeta = Object.fromEntries(
  JSON.parse(fs.readFileSync("src/data/content/sections.json", "utf8")).map((s) => [s.id, s]),
);

function sectionTitle(id) {
  return sectionMeta[id]?.title ?? id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

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
const navBySlug = new Map(navItems.map((topic) => [topic.slug, topic]));
const topicDetails = new Map();
for (const file of fs.readdirSync("src/data/content/topics").filter((name) => name.endsWith(".json"))) {
  const entries = JSON.parse(fs.readFileSync(path.join("src/data/content/topics", file), "utf8"));
  for (const topic of Array.isArray(entries) ? entries : []) {
    if (topic && typeof topic.slug === "string") topicDetails.set(topic.slug, topic);
  }
}
const baseHref = template.match(/<base\\s+href="([^"]+)"/)?.[1] ?? "/";
const basePrefix = baseHref.endsWith("/") ? baseHref : `${baseHref}/`;
function localHref(route) {
  return `${basePrefix}${String(route).replace(/^\\/+/, "")}`;
}
function topicLink(topic) {
  return `<a href="${escapeHtml(localHref(topicUrl(topic.slug, topic.section)))}">${escapeHtml(topic.title)}</a>`;
}
function topicList(items, includeSummary = false) {
  if (!items.length) return "<p>No pages are listed in this section yet.</p>";
  return `<ul>${items.map((topic) => `<li>${topicLink(topic)}${includeSummary ? ` — ${escapeHtml(topic.summary)}` : ""}</li>`).join("")}</ul>`;
}
function renderExtraBlock(block) {
  if (!block || typeof block !== "object") return "";
  if (block.type === "p") return `<p>${escapeHtml(block.text ?? "")}</p>`;
  if (block.type === "h3") return `<h3 id="${escapeHtml(block.id ?? "")}">${escapeHtml(block.text ?? "")}</h3>`;
  if (block.type === "ul" || block.type === "ol") {
    const tag = block.type;
    return `<${tag}>${(block.items ?? []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
  }
  if (block.type === "code") {
    return `<figure><figcaption>${escapeHtml(block.title ?? block.lang ?? "Code example")}</figcaption><pre><code>${escapeHtml(block.code ?? "")}</code></pre></figure>`;
  }
  if (block.type === "table") {
    return `<table><thead><tr>${(block.headers ?? []).map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr></thead><tbody>${(block.rows ?? []).map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }
  if (block.type === "callout") {
    return `<aside><strong>${escapeHtml(block.title ?? "Note")}</strong><p>${escapeHtml(block.text ?? "")}</p></aside>`;
  }
  if (block.type === "flow") return `<ol>${(block.steps ?? []).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
  return "";
}
function renderTopicBody(navTopic, sectionTitleText) {
  const detail = topicDetails.get(navTopic.slug);
  const relationLinks = (label, slugs) => {
    const links = (slugs ?? []).map((slug) => {
      const related = navBySlug.get(slug);
      return related ? `<li>${topicLink(related)}</li>` : "";
    }).filter(Boolean).join("");
    return links ? `<section><h2>${label}</h2><ul>${links}</ul></section>` : "";
  };
  const intro = `<p><a href="${escapeHtml(localHref(sectionUrl(navTopic.section)))}">${escapeHtml(sectionTitleText)}</a></p><h1>${escapeHtml(navTopic.title)}</h1><p>${escapeHtml(navTopic.summary)}</p><p>Level: ${escapeHtml(navTopic.level)}</p>`;
  if (!detail) {
    return `<article>${intro}${relationLinks("Prerequisites", navTopic.prereqs)}${relationLinks("Related concepts", navTopic.related)}${relationLinks("Continue learning", navTopic.next ? [navTopic.next] : [])}<p><a href="${escapeHtml(localHref("/library"))}">Browse the full computer science library</a></p></article>`;
  }
  const section = (heading, value) => value ? `<section><h2>${heading}</h2><p>${escapeHtml(value)}</p></section>` : "";
  const listSection = (heading, values) => values?.length ? `<section><h2>${heading}</h2><ul>${values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul></section>` : "";
  const details = [
    section("What is it?", detail.what),
    section("Why does it matter?", detail.why),
    section("Mental model", detail.mental),
    listSection("How it works", detail.points),
    listSection("Steps", detail.steps),
    detail.code ? `<section><h2>Code example: ${escapeHtml(detail.code.title ?? detail.code.lang)}</h2><pre><code>${escapeHtml(detail.code.code ?? "")}</code></pre></section>` : "",
    section("Implementation", detail.implementation),
    detail.complexity ? `<section><h2>Complexity and trade-offs</h2>${detail.complexity.time ? `<p>Time: ${escapeHtml(detail.complexity.time)}</p>` : ""}${detail.complexity.space ? `<p>Space: ${escapeHtml(detail.complexity.space)}</p>` : ""}${listSection("Trade-offs", detail.complexity.tradeoffs)}</section>` : "",
    listSection("Real-world usage", detail.usage),
    listSection("Common mistakes", detail.mistakes),
    detail.interview?.length ? `<section><h2>Interview questions</h2>${detail.interview.map((item) => `<details><summary>${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p>${item.followUp ? `<p>Follow-up: ${escapeHtml(item.followUp)}</p>` : ""}</details>`).join("")}</section>` : "",
    detail.extra?.map(renderExtraBlock).join("") ?? "",
    relationLinks("Prerequisites", navTopic.prereqs),
    relationLinks("Related concepts", navTopic.related),
    relationLinks("Continue learning", navTopic.next ? [navTopic.next] : []),
  ].join("");
  return `<article>${intro}${details}<p><a href="${escapeHtml(localHref("/library"))}">Browse the full computer science library</a></p></article>`;
}
function externalHttpsUrl(name) {
  const value = process.env[name]?.trim();
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname ? url.toString() : "";
  } catch {
    return "";
  }
}

function renderStaticPageBody(page) {
  if (page.path === "/") {
    const prioritySlugs = ["what-is-programming", "arrays", "big-o", "processes", "cpu-scheduling", "osi-model", "tcp", "sql", "transactions", "indexes"];
    const featured = prioritySlugs.map((slug) => navBySlug.get(slug)).filter(Boolean);
    const sectionLinks = sectionsList.slice(0, 12).map((section) => {
      const items = navItems.filter((topic) => topic.section === section);
      if (!items.length) return "";
      return `<li><a href="${escapeHtml(localHref(sectionUrl(section)))}">${escapeHtml(sectionTitle(section))}</a> — ${items.length} topics</li>`;
    }).filter(Boolean).join("");
    const paths = pathsList.map((item) => `<li><a href="${escapeHtml(localHref(`/paths/${item.id}`))}">${escapeHtml(item.title)}</a> — ${escapeHtml(item.blurb)}</li>`).join("");
    return `<main style="max-width: 52rem; margin: 0 auto; padding: 3rem 1.5rem;"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.desc)}</p><p><a href="${escapeHtml(localHref("/paths"))}">Choose a learning path</a> · <a href="${escapeHtml(localHref("/library"))}">Browse every topic</a></p><section><h2>Start with these computer science topics</h2>${topicList(featured, true)}</section><section><h2>Explore the curriculum</h2><ul>${sectionLinks}</ul></section><section><h2>Structured learning paths</h2><ul>${paths}</ul></section></main>`;
  }
  if (page.path === "/support") {
    const supportUrl = externalHttpsUrl("SUPPORT_URL");
    const productsUrl = externalHttpsUrl("DIGITAL_PRODUCTS_URL");
    const newsletterUrl = externalHttpsUrl("NEWSLETTER_URL");
    return `<main style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;"><h1>Support the Computer Science Handbook</h1><p>This handbook is free to read. Support helps fund original explanations, worked examples, accessible diagrams, corrections, and maintenance.</p><h2>Reader support</h2>${supportUrl ? `<p><a href="${escapeHtml(supportUrl)}" rel="noopener noreferrer">Support the project</a></p>` : `<p>A support checkout is not configured yet. Once an active support page exists, configure SUPPORT_URL with its HTTPS URL.</p>`}<h2>Original study products</h2>${productsUrl ? `<p><a href="${escapeHtml(productsUrl)}" rel="noopener noreferrer">Browse downloadable study materials</a></p>` : `<p>Revision sheets, diagrams, and worked interview packs are potential products. No storefront is connected yet.</p>`}<h2>Newsletter</h2>${newsletterUrl ? `<p><a href="${escapeHtml(newsletterUrl)}" rel="noopener noreferrer">Join the learning newsletter</a></p>` : `<p>No newsletter provider is connected yet.</p>`}<h2>Sponsorships and partnerships</h2><p>Relevant educational tools, developer platforms, and technical books may be considered when clearly labeled. Paid placements will not be presented as editorial recommendations. Contact <a href="mailto:neurokodes@gmail.com">neurokodes@gmail.com</a>.</p><h2>Other ways to help</h2><ul><li>Report factual errors and unclear explanations through <a href="https://github.com/nishanth-kj/computer-science/issues">GitHub issues</a>.</li><li>Share useful topic pages with students and developers.</li><li>Propose corrections or original worked examples through the <a href="https://github.com/nishanth-kj/computer-science">source repository</a>.</li></ul></main>`;
  }
  if (page.path === "/affiliate-disclosure") {
    return `<main style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;"><h1>Affiliate Disclosure</h1><p>As of the latest site update, this handbook does not intentionally publish affiliate links. If affiliate links are added in the future, they will be clearly identified near the recommendation and this page will be updated.</p><p>Recommendations should be relevant to computer science education and based on editorial usefulness, not solely on commission. Affiliate relationships will not change the price paid by the reader unless explicitly stated.</p><p>Questions about a partnership or recommendation can be sent to <a href="mailto:neurokodes@gmail.com">neurokodes@gmail.com</a>.</p></main>`;
  }
  const additional = page.path === "/contact" ? '<p><a href="mailto:neurokodes@gmail.com">neurokodes@gmail.com</a></p>' : "";
  return `<main style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.desc)}</p>${additional}<p><a href="${escapeHtml(localHref("/library"))}">Browse the library</a> · <a href="${escapeHtml(localHref("/paths"))}">Learning paths</a></p></main>`;
}

const staticPages = [
  {
    path: "/",
    title: "Computer Science Handbook — Learn CS in Depth",
    desc: "A free, structured computer science handbook with topic guides, code examples, visual explainers, prerequisites, and learning paths across programming, algorithms, operating systems, networking, databases, and AI.",
    h1: "Learn computer science in depth",
  },
  {
    path: "/library",
    title: "Library · CS",
    desc: "The full computer science catalog covering programming, operating systems, databases, and networking in depth.",
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
    desc: "Contact the Computer Science Handbook to report errors, suggest topics, or discuss educational partnerships.",
    h1: "Contact Us",
  },
  {
    path: "/support",
    title: "Support the Computer Science Handbook · CS",
    desc: "Support the free computer science handbook, discuss educational partnerships, or propose a clearly labeled sponsorship.",
    h1: "Support the Handbook",
  },
  {
    path: "/affiliate-disclosure",
    title: "Affiliate Disclosure · CS",
    desc: "How the Computer Science Handbook identifies affiliate relationships and keeps educational recommendations transparent.",
    h1: "Affiliate Disclosure",
  },
];

// Phase pages and multi-section group hubs (for example /programming) are real routes too.
staticPages.push(
  ...phases.map((p) => ({
    path: `/${p.id}`,
    title: `${p.title} · ${p.subtitle} · CS`,
    desc: p.blurb,
    h1: `${p.title}: ${p.subtitle}`,
  })),
  ...sectionGroups
    .filter((g) => g.sections.length > 1)
    .map((g) => ({
      path: `/${g.id}`,
      title: `${g.title} · CS`,
      desc: g.sections.map(sectionTitle).join(", ") + ".",
      h1: g.title,
    })),
);

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderHtml(p, title, desc, bodyContent, schema, robots = "index, follow, max-image-preview:large", ogType = "website") {
  let html = template;

  // Replace Title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // Replace Description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(desc)}" />`
  );

  // Replace Canonical Link
  const canonicalUrl = `${ORIGIN}${p === "/" ? "/" : p}`;
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
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${ogType}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${ORIGIN}/og.jpg" />`
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
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${ORIGIN}/og.jpg" />`
  );
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${robots}" />`
  );

  // Inject per-page structured data and a breadcrumb trail for crawlers.
  if (schema) {
    const primarySchema = { ...schema };
    delete primarySchema["@context"];
    const graph = [primarySchema];
    if (p !== "/" && p !== "/404") {
      const parts = p.split("/").filter(Boolean);
      const itemListElement = [{
        "@type": "ListItem",
        position: 1,
        name: "Computer Science Handbook",
        item: `${ORIGIN}/`,
      }];
      let currentPath = "";
      parts.forEach((part, index) => {
        currentPath += `/${part}`;
        const final = index === parts.length - 1;
        const phase = phases.find((item) => item.id === part);
        const learningPath = pathsList.find((item) => item.id === part);
        const navTopic = navBySlug.get(part);
        const group = sectionGroups.find((item) => item.id === part);
        const name = final
          ? title
          : phase
            ? `${phase.title}: ${phase.subtitle}`
            : learningPath
              ? learningPath.title
              : navTopic
                ? navTopic.title
                : group
                  ? group.title
                  : sectionMeta[part]?.title ?? sectionTitle(part);
        itemListElement.push({
          "@type": "ListItem",
          position: index + 2,
          name,
          item: `${ORIGIN}${currentPath}`,
        });
      });
      graph.push({ "@type": "BreadcrumbList", itemListElement });
    }
    const structuredData = { "@context": "https://schema.org", "@graph": graph };
    const safeJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");
    const jsonLdTag = `<script type="application/ld+json" id="ld-json">${safeJson}</script>`;
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
  const routeDir = path.join("dist", page.path.replace(/^\//, ""));
  fs.mkdirSync(routeDir, { recursive: true });

  const body = renderStaticPageBody(page);

  const schema = page.path === "/"
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Computer Science Handbook",
        description: page.desc,
        url: `${ORIGIN}/`,
      }
    : {
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
  const orderedTopics = p.slugs.map((slug) => navBySlug.get(slug)).filter(Boolean);
  const body = `
    <main style="max-width: 48rem; margin: 0 auto; padding: 3rem 1.5rem;">
      <p>Learning Path · ${escapeHtml(p.audience)}</p>
      <h1>${escapeHtml(p.title)}</h1>
      <p>${escapeHtml(p.blurb)}</p>
      <h2>Follow these topics in order</h2>
      <ol>${orderedTopics.map((topic) => `<li>${topicLink(topic)} — ${escapeHtml(topic.summary)}</li>`).join("")}</ol>
      <p><a href="${escapeHtml(localHref("/paths"))}">All learning paths</a> · <a href="${escapeHtml(localHref("/library"))}">Full library</a></p>
    </main>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
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

  const sTitle = sectionTitle(s);
  const title = `${sTitle} · Computer Science Handbook`;
  const desc = `In-depth curriculum and reference guide for ${sTitle}.`;
  const sectionTopics = navItems.filter((topic) => topic.section === s);
  const body = `
    <main style="max-width: 52rem; margin: 0 auto; padding: 3rem 1.5rem;">
      <h1>${escapeHtml(sTitle)}</h1>
      <p>${escapeHtml(sectionMeta[s]?.blurb ?? desc)}</p>
      <p>Topics in this field: ${sectionTopics.length}</p>
      ${topicList(sectionTopics, true)}
      <p><a href="${escapeHtml(localHref("/library"))}">Return to the full library</a></p>
    </main>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: desc,
    url: `${ORIGIN}${routePath}`,
  };

  const html = renderHtml(routePath, title, desc, body, schema, "index, follow, max-image-preview:large", "article");
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  count++;
}

// 4. Topics
for (const t of navItems) {
  const routePath = topicUrl(t.slug, t.section);
  const routeDir = path.join("dist", routePath.replace(/^\//, ""));
  fs.mkdirSync(routeDir, { recursive: true });

  const sTitle = sectionTitle(t.section);
  const title = `${t.title} · ${sTitle} · CS`;
  const desc = t.summary;
  const canonicalUrl = `${ORIGIN}${routePath}`;

  const body = renderTopicBody(t, sTitle);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: t.title,
    description: t.summary,
    educationalLevel: t.level,
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "Computer Science Handbook",
      url: ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: "Computer Science Handbook",
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

// GitHub Pages serves this document for unknown paths. Keep the Angular app shell
// so client-side routing can recover, but never present the fallback as the home page.
const notFoundHtml = renderHtml(
  "/404",
  "Page not found · CS",
  "The requested computer science page could not be found.",
  `<main style="max-width: 44rem; margin: 0 auto; padding: 3rem 1.5rem;">
    <p style="font-size: 0.8rem; color: #888;">404</p>
    <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem;">Page not found</h1>
    <p style="font-size: 1.1rem; color: #888;">Try the library or return to the home page.</p>
  </main>`,
  null,
  "noindex, nofollow",
).replace(/\s*<link\s+rel="canonical"[^>]*>/, "");
fs.writeFileSync(path.join("dist", "404.html"), notFoundHtml);

console.log(`Prerendered ${count} static HTML route pages with SEO & Schema.org tags into dist/`);
