import { NAV, NAV_BY_SLUG, type NavTopic } from "./nav";
import { NAV_REST } from "./nav-rest";
import { PATHS, PATH_BY_ID } from "./paths";
import { SECTIONS, SECTION_BY_ID, SECTION_GROUPS } from "./sections";
import { FLAGSHIP as CORE } from "./topics/flagship";
import { FLAGSHIP as LANGS } from "./topics/languages";
import { FLAGSHIP as OSI } from "./topics/osi-layers";
import { FLAGSHIP as CASES } from "./topics/cases";
import { FLAGSHIP as MORE } from "./topics/more";
import type { SectionId, Topic } from "./types";
import { enrich } from "./enrich";

export { PATHS, PATH_BY_ID, SECTIONS, SECTION_BY_ID, SECTION_GROUPS };
export type { Topic, SectionId };

export const ALL_NAV: NavTopic[] = [...NAV, ...NAV_REST];

export const FLAGSHIP: Topic[] = [...CORE, ...LANGS, ...OSI, ...CASES, ...MORE];

export const FLAGSHIP_SLUGS = FLAGSHIP.map((t) => t.slug);

const navBySlug: Record<string, NavTopic> = {
  ...NAV_BY_SLUG,
  ...Object.fromEntries(NAV_REST.map((t) => [t.slug, t])),
};

const flagshipBySlug: Record<string, Topic> = Object.fromEntries(FLAGSHIP.map((t) => [t.slug, t]));

export const ALL_SLUGS = new Set(ALL_NAV.map((t) => t.slug));

export function exists(slug: string | undefined): slug is string {
  return Boolean(slug && (navBySlug[slug] || flagshipBySlug[slug] || slug in SECTION_BY_ID));
}

export function known(slugs: string[]): string[] {
  return slugs.filter((s) => ALL_SLUGS.has(s) || s in SECTION_BY_ID);
}

const MENTAL: Record<string, string> = {
  fundamentals:
    "A running program is just bits in motion: names become addresses, control flow becomes jumps, and the OS plus runtime keep the illusion coherent.",
  languages:
    "A language is a contract: syntax for humans, a type and memory model for the compiler, and a runtime for everything syntax cannot say.",
  dsa: "Pick a shape for the data, then a way to walk it. Cost is not a vibe — it is how many times you touch memory as n grows.",
  "discrete-math":
    "Discrete math is the language CS proofs are written in. If you can state it precisely, you can usually compute it or show you cannot.",
  architecture:
    "Hardware is a pipeline that pretends to be a simple machine. Performance is what happens when that pretense meets physics.",
  os: "The OS multiplexes one computer into many illusions: each process thinks it has a CPU and an address space of its own.",
  networks:
    "A network is best-effort messengers. Every layer wraps the one below so an application can pretend the wire is reliable — or choose not to.",
  dbms: "A database is a storage engine plus a query planner plus a transaction protocol. SQL is the interface, not the implementation.",
  oop: "Objects are a way to bind data to the operations that preserve its invariants. The hard part is the boundaries, not the class keyword.",
  "software-engineering":
    "Engineering is design under change: version history, tests, and the operational story after merge.",
  web: "The web is documents plus a runtime in the browser plus HTTP as the conversation. Everything else is an optimization or an API on top.",
  cybersecurity:
    "Security is a disagreement about who is allowed to do what. Controls fail at the seams: parsers, auth, and the human.",
  compilers:
    "A compiler is a pipeline of increasingly honest representations, each one closer to what the machine will actually do.",
  theory:
    "Theory draws the map of what machines can recognize, decide, or do quickly. The surprises are the negative results.",
  distributed:
    "Two computers and a network are already a distributed system. Time, failure, and disagreement are the subject, not the footnotes.",
  "system-design":
    "System design is capacity, failure, and the APIs between boxes. Draw the request path, then try to break it.",
  linux: "Unix is a kernel, a filesystem tree, and a shell that composes programs with file descriptors.",
  cloud: "Cloud is APIs in front of multiplexed hardware. The interesting part is tenancy, identity, and the bill.",
  devops: "You ship by machine and learn from production. Reliability is an error budget, not a feeling.",
  ai: "Classical AI searches, represents, and plans. Learning later ate the parts that needed too many rules.",
  ml: "Machine learning fits a function to data, then hopes the next point looks like the last ones.",
  "deep-learning":
    "Deep learning is composition of differentiable pieces. The loss tells you how to change the weights.",
  llm: "A language model is a next-token machine with a huge prior. Systems around it do the retrieval, tools, and evaluation.",
  graphics: "Graphics is transforms and a pipeline that turns geometry into fragments, then pixels.",
  vision: "Vision is signals on a grid. Local filters become features become labels — or boxes, or masks.",
  nlp: "Language is a sequence. Tokenize it, embed it, then model the next piece or the label on the whole.",
  ir: "Search is a candidate generator plus a ranker. Sparse terms and dense vectors are two ways to generate.",
  parallel: "Concurrency is interleaving; parallelism is simultaneous. The memory model is the contract.",
  robotics: "Sense, think, act, under time and physics. Every sensor lies a little.",
  mobile: "A phone is a computer the OS will sleep. Lifecycle and radios dominate the design.",
  research: "Research is a question, a method, and an artifact someone else can rerun.",
  interview: "Interviews sample how you decompose a problem and talk about the trade-offs you just made.",
};

function materialize(nav: NavTopic): Topic {
  const overlay = flagshipBySlug[nav.slug];
  if (overlay) {
    return {
      ...overlay,
      prereqs: known(overlay.prereqs),
      related: known(overlay.related),
      next:
        overlay.next && (ALL_SLUGS.has(overlay.next) || overlay.next in SECTION_BY_ID)
          ? overlay.next
          : nav.next && (ALL_SLUGS.has(nav.next) || nav.next in SECTION_BY_ID)
            ? nav.next
            : undefined,
    };
  }
  const e = enrich(nav);
  return {
    slug: nav.slug,
    section: nav.section,
    title: nav.title,
    summary: nav.summary,
    level: nav.level,
    prereqs: known(nav.prereqs),
    related: known(nav.related),
    next: nav.next && (ALL_SLUGS.has(nav.next) || nav.next in SECTION_BY_ID) ? nav.next : undefined,
    tags: [nav.section, nav.level],
    viz: nav.viz,
    lab: nav.lab,
    what: nav.summary,
    why: e.why ?? nav.summary,
    mental: MENTAL[nav.section] ?? MENTAL.fundamentals,
    points: e.points ?? [nav.summary],
    steps: e.steps,
    code: e.code,
    implementation: e.implementation,
    complexity: e.complexity,
    usage: e.usage ?? [],
    mistakes: e.mistakes ?? [],
    interview: e.interview ?? [],
    extra: e.extra,
  };
}

const TOPIC_CACHE = new Map<string, Topic>();

export function getTopic(slug: string): Topic | undefined {
  if (TOPIC_CACHE.has(slug)) return TOPIC_CACHE.get(slug);
  const nav = navBySlug[slug];
  if (!nav) return undefined;
  const topic = materialize(nav);
  TOPIC_CACHE.set(slug, topic);
  return topic;
}

const PROGRAMMING_SECTIONS = new Set<string>(
  SECTION_GROUPS.find((g) => g.id === "programming")?.sections ?? [],
);

export function topicHref(slug: string): string {
  if (!slug) return "/";
  if (slug in SECTION_BY_ID) {
    return PROGRAMMING_SECTIONS.has(slug) ? `/programming/${slug}` : `/${slug}`;
  }
  const topic = getTopic(slug);
  if (!topic) return "/";
  if (PROGRAMMING_SECTIONS.has(topic.section)) return `/programming/${topic.section}/${topic.slug}`;
  return `/${topic.section}/${topic.slug}`;
}

export function topicsInSection(section: SectionId): Topic[] {
  return ALL_NAV.filter((t) => t.section === section).map((t) => getTopic(t.slug)!);
}

export function getSectionTopics(section: SectionId): NavTopic[] {
  return ALL_NAV.filter((t) => t.section === section);
}

export function searchTopics(query: string, limit = 24): NavTopic[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored = ALL_NAV.map((t) => {
    const hay = `${t.title} ${t.summary} ${t.slug} ${t.section}`.toLowerCase();
    let score = 0;
    if (t.title.toLowerCase() === q) score += 100;
    else if (t.title.toLowerCase().startsWith(q)) score += 80;
    else if (t.title.toLowerCase().includes(q)) score += 50;
    else if (t.slug.includes(q.replace(/\s+/g, "-"))) score += 40;
    else if (hay.includes(q)) score += 20;
    if (score && t.level === "beginner") score += 2;
    return { t, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.t);
  return scored;
}

export const STATS = {
  pages: ALL_NAV.length,
  sections: SECTIONS.length,
  paths: PATHS.length,
};

export function graphData() {
  const nodes = ALL_NAV.map((t) => ({
    id: t.slug,
    title: t.title,
    section: t.section,
    level: t.level,
  }));
  const edges: { from: string; to: string; kind: "prereq" | "related" }[] = [];
  const seen = new Set<string>();
  for (const t of ALL_NAV) {
    for (const p of known(t.prereqs)) {
      const k = `${p}->${t.slug}`;
      if (seen.has(k)) continue;
      seen.add(k);
      edges.push({ from: p, to: t.slug, kind: "prereq" });
    }
    for (const r of known(t.related).slice(0, 4)) {
      const k = t.slug < r ? `${t.slug}~${r}` : `${r}~${t.slug}`;
      if (seen.has(k)) continue;
      seen.add(k);
      edges.push({ from: t.slug, to: r, kind: "related" });
    }
  }
  return { nodes, edges };
}
