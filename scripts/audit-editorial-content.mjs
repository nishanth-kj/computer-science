import fs from "node:fs";
import path from "node:path";

const nav = [
  ...JSON.parse(fs.readFileSync("src/data/content/nav.json", "utf8")),
  ...JSON.parse(fs.readFileSync("src/data/content/nav-rest.json", "utf8")),
];
const editorialBySlug = new Map();
for (const file of fs.readdirSync("src/data/content/topics").filter((name) => name.endsWith(".json"))) {
  const entries = JSON.parse(fs.readFileSync(path.join("src/data/content/topics", file), "utf8"));
  for (const topic of Array.isArray(entries) ? entries : []) {
    if (topic && typeof topic.slug === "string") editorialBySlug.set(topic.slug, topic);
  }
}

const topicsBySlug = new Map(nav.map((topic) => [topic.slug, topic]));
const fullEditorial = [];
const summaryOnly = [];
for (const [slug, topic] of topicsBySlug) {
  const detail = editorialBySlug.get(slug);
  const hasEditorialDepth = Boolean(
    detail?.what?.trim() &&
    detail?.why?.trim() &&
    detail?.mental?.trim() &&
    Array.isArray(detail?.points) && detail.points.length >= 3 &&
    Array.isArray(detail?.interview) && detail.interview.length >= 2
  );
  (hasEditorialDepth ? fullEditorial : summaryOnly).push(slug);
}

const total = topicsBySlug.size;
const percent = total ? Math.round((fullEditorial.length / total) * 100) : 0;
console.log(`Editorial coverage: ${fullEditorial.length}/${total} topic routes have a definition, rationale, mental model, 3+ learning points, and 2+ interview questions (${percent}%).`);
const minimumEditorialPercent = 50;
if (percent < minimumEditorialPercent) {
  console.error(`Editorial coverage is below the ${minimumEditorialPercent}% quality gate. Add authored lesson content rather than generated boilerplate.`);
  process.exitCode = 1;
}
if (summaryOnly.length) {
  console.warn(`Content-quality warning: ${summaryOnly.length} topics remain summary-only. Write original explanations/examples before applying ads to those pages. First topics to improve: ${summaryOnly.slice(0, 20).join(", ")}`);
}
