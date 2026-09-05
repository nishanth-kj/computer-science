import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/app/pages");
const NAV_FILES = ["src/lib/content/nav.ts", "src/lib/content/nav-rest.ts"];

const SECTION_META = {
  languages: { className: "LanguagesPage", title: "Programming Languages · CS", file: "programming/languages/languages" },
  fundamentals: { className: "FundamentalsPage", title: "Programming Fundamentals · CS", file: "programming/fundamentals/fundamentals" },
  oop: { className: "OopPage", title: "Object-Oriented Programming · CS", file: "programming/oop/oop" },
  dsa: { className: "DsaPage", title: "Data Structures & Algorithms · CS", file: "programming/dsa/dsa" },
  "discrete-math": { className: "DiscreteMathPage", title: "Discrete Mathematics · CS", file: "programming/discrete-math/discrete-math" },
  networks: { className: "NetworksPage", title: "Computer Networks · CS", file: "networks/networks" },
  os: { className: "OsPage", title: "Operating Systems · CS", file: "os/os" },
  dbms: { className: "DbmsPage", title: "Databases / DBMS · CS", file: "dbms/dbms" },
  architecture: { className: "ArchitecturePage", title: "Computer Architecture · CS", file: "systems/architecture/architecture" },
  linux: { className: "LinuxPage", title: "Linux / Unix · CS", file: "systems/linux/linux" },
  parallel: { className: "ParallelPage", title: "Parallel & Concurrent Computing · CS", file: "systems/parallel/parallel" },
  "software-engineering": { className: "SoftwareEngineeringPage", title: "Software Engineering · CS", file: "software/software-engineering/software-engineering" },
  web: { className: "WebPage", title: "Web Development · CS", file: "software/web/web" },
  compilers: { className: "CompilersPage", title: "Compiler Design · CS", file: "software/compilers/compilers" },
  mobile: { className: "MobilePage", title: "Mobile Computing · CS", file: "software/mobile/mobile" },
  cybersecurity: { className: "CybersecurityPage", title: "Cybersecurity · CS", file: "security/cybersecurity/cybersecurity" },
  cloud: { className: "CloudPage", title: "Cloud Computing · CS", file: "security/cloud/cloud" },
  devops: { className: "DevopsPage", title: "DevOps / SRE · CS", file: "security/devops/devops" },
  distributed: { className: "DistributedPage", title: "Distributed Systems · CS", file: "distributed/distributed/distributed" },
  "system-design": { className: "SystemDesignPage", title: "System Design · CS", file: "distributed/system-design/system-design" },
  ai: { className: "AiPage", title: "Artificial Intelligence · CS", file: "intelligence/ai/ai" },
  ml: { className: "MlPage", title: "Machine Learning · CS", file: "intelligence/ml/ml" },
  "deep-learning": { className: "DeepLearningPage", title: "Deep Learning · CS", file: "intelligence/deep-learning/deep-learning" },
  llm: { className: "LlmPage", title: "LLMs / Generative AI · CS", file: "intelligence/llm/llm" },
  nlp: { className: "NlpPage", title: "Natural Language Processing · CS", file: "intelligence/nlp/nlp" },
  vision: { className: "VisionPage", title: "Computer Vision · CS", file: "intelligence/vision/vision" },
  graphics: { className: "GraphicsPage", title: "Computer Graphics · CS", file: "intelligence/graphics/graphics" },
  robotics: { className: "RoboticsPage", title: "Robotics · CS", file: "intelligence/robotics/robotics" },
  theory: { className: "TheoryPage", title: "Theory of Computation · CS", file: "theory/theory/theory" },
  ir: { className: "IrPage", title: "Information Retrieval · CS", file: "theory/ir/ir" },
  research: { className: "ResearchPage", title: "Research Fundamentals · CS", file: "theory/research/research" },
  interview: { className: "InterviewPage", title: "Interview Preparation · CS", file: "theory/interview/interview" },
};

const PROGRAMMING = new Set(["languages", "fundamentals", "oop", "dsa", "discrete-math"]);

function pascal(s) {
  return s
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function className(section, slug) {
  const name = pascal(section) + pascal(slug);
  return (/^[A-Za-z]/.test(name) ? name : `Topic${name}`) + "Page";
}

function loadNav() {
  const titles = new Map();
  const sections = new Map();
  const re = /\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)"/g;
  for (const file of NAV_FILES) {
    const src = fs.readFileSync(file, "utf8");
    let m;
    while ((m = re.exec(src))) {
      titles.set(m[1], m[3]);
      sections.set(m[1], m[2]);
    }
  }
  return { titles, sections };
}

function collectTopicDirs(dir, rel = "") {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(dir, entry.name);
    const childRel = rel ? `${rel}/${entry.name}` : entry.name;
    const files = fs.readdirSync(child, { withFileTypes: true });
    const hasTs = files.some((f) => f.isFile() && f.name.endsWith(".ts"));
    const hasDir = files.some((f) => f.isDirectory());
    if (!hasTs && !hasDir) out.push({ abs: child, rel: childRel, slug: entry.name });
    if (hasDir) out.push(...collectTopicDirs(child, childRel));
  }
  return out;
}

const { titles, sections } = loadNav();
const topics = collectTopicDirs(ROOT).filter((t) => titles.has(t.slug) || sections.has(t.slug) || t.rel.split("/").length >= 2);

const bySection = new Map();
for (const t of topics) {
  const parts = t.rel.split("/");
  let section = sections.get(t.slug);
  if (!section) {
    if (parts[0] === "programming" && parts.length >= 3) section = parts[1];
    else if (["networks", "os", "dbms"].includes(parts[0]) && parts.length >= 2) section = parts[0];
    else if (parts.length >= 3) section = parts[1];
  }
  if (!section || !SECTION_META[section]) continue;
  t.section = section;
  t.title = titles.get(t.slug) ?? t.slug;
  t.className = className(section, t.slug);
  if (!bySection.has(section)) bySection.set(section, []);
  bySection.get(section).push(t);
}

let pages = 0;
for (const t of topics) {
  if (!t.section) continue;
  const file = path.join(t.abs, `${t.slug}.ts`);
  const src = `import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-${t.slug}",
  imports: [TopicView],
  template: \`<cs-topic-view slug="${t.slug}" />\`,
})
export class ${t.className} {}
`;
  fs.writeFileSync(file, src.replace(/\n/g, "\n"));
  for (const keep of [".gitkeep", "gitkeep"]) {
    const p = path.join(t.abs, keep);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }
  pages++;
}

function importPath(fromFile, toFile) {
  const fromDir = path.posix.dirname(fromFile);
  let rel = path.posix.relative(fromDir, toFile);
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel.replace(/\.ts$/, "");
}

function writeSectionRoutes(section, list) {
  const meta = SECTION_META[section];
  const routesFile = path.posix.join("src/app/pages", path.posix.dirname(meta.file), `${section}.routes.ts`);
  const sectionImport = importPath(routesFile, `src/app/pages/${meta.file}.ts`);
  const lines = [
    `import { Routes } from "@angular/router";`,
    `import { ${meta.className} } from "${sectionImport}";`,
    ``,
    `export const ${pascal(section).toUpperCase()}_ROUTES: Routes = [`,
    `  { path: "", component: ${meta.className}, title: ${JSON.stringify(meta.title)} },`,
  ];
  list.sort((a, b) => a.slug.localeCompare(b.slug));
  for (const t of list) {
    const spec = `./${t.slug}/${t.slug}`;
    lines.push(
      `  { path: ${JSON.stringify(t.slug)}, loadComponent: () => import(${JSON.stringify(spec)}).then((m) => m.${t.className}), title: ${JSON.stringify(`${t.title} · CS`)} },`,
    );
  }
  lines.push(`];`, ``);
  const abs = path.resolve(routesFile);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, lines.join("\n"));
  return { exportName: `${pascal(section).toUpperCase()}_ROUTES`, routesFile: routesFile.replace(/\\/g, "/") };
}

const routeExports = [];
for (const [section, list] of [...bySection.entries()].sort()) {
  routeExports.push({ section, ...writeSectionRoutes(section, list) });
}

const appRoutes = `import { RedirectFunction, Routes } from "@angular/router";
import { topicHref } from "@/lib/content";
import { MainLayout } from "@/app/layout/main";
import { Graph } from "@/app/pages/graph/graph";
import { Home } from "@/app/pages/home/home";
import { Interview } from "@/app/pages/interview-mode/interview";
import { Lab } from "@/app/pages/labs/lab/lab";
import { Labs } from "@/app/pages/labs/labs";
import { Library } from "@/app/pages/library/library";
import { NotFound } from "@/app/pages/not-found/not-found";
import { Path } from "@/app/pages/paths/path/path";
import { Paths } from "@/app/pages/paths/paths";
import { ProgrammingPage } from "@/app/pages/programming/programming";
${routeExports
  .map((r) => {
    const spec = r.routesFile.replace(/^src\/app\//, "@/app/").replace(/\.ts$/, "");
    return `import { ${r.exportName} } from "${spec}";`;
  })
  .join("\n")}

const toTopicPage: RedirectFunction = ({ params }) => topicHref(params["slug"] ?? "");

export const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", component: Home, title: "CS — Computer science topics" },

      {
        path: "topics",
        children: [
          { path: "", component: Library, title: "Library · CS" },
          { path: ":slug", redirectTo: toTopicPage },
        ],
      },

      { path: "program", redirectTo: "programming", pathMatch: "full" },
      {
        path: "programming",
        children: [
          { path: "", component: ProgrammingPage, title: "Programming · CS" },
${["languages", "fundamentals", "oop", "dsa", "discrete-math"]
  .map((s) => {
    const exp = routeExports.find((r) => r.section === s);
    return `          { path: "${s}", children: ${exp.exportName} },`;
  })
  .join("\n")}
        ],
      },
      { path: "languages", redirectTo: "programming/languages" },
      { path: "fundamentals", redirectTo: "programming/fundamentals" },
      { path: "oop", redirectTo: "programming/oop" },
      { path: "dsa", redirectTo: "programming/dsa" },
      { path: "discrete-math", redirectTo: "programming/discrete-math" },

      { path: "networks", children: NETWORKS_ROUTES },
      { path: "os", children: OS_ROUTES },
      { path: "dbms", children: DBMS_ROUTES },

      { path: "architecture", children: ARCHITECTURE_ROUTES },
      { path: "linux", children: LINUX_ROUTES },
      { path: "parallel", children: PARALLEL_ROUTES },

      { path: "software-engineering", children: SOFTWAREENGINEERING_ROUTES },
      { path: "web", children: WEB_ROUTES },
      { path: "compilers", children: COMPILERS_ROUTES },
      { path: "mobile", children: MOBILE_ROUTES },

      { path: "cybersecurity", children: CYBERSECURITY_ROUTES },
      { path: "cloud", children: CLOUD_ROUTES },
      { path: "devops", children: DEVOPS_ROUTES },

      { path: "distributed", children: DISTRIBUTED_ROUTES },
      { path: "system-design", children: SYSTEMDESIGN_ROUTES },

      { path: "ai", children: AI_ROUTES },
      { path: "ml", children: ML_ROUTES },
      { path: "deep-learning", children: DEEPLEARNING_ROUTES },
      { path: "llm", children: LLM_ROUTES },
      { path: "nlp", children: NLP_ROUTES },
      { path: "vision", children: VISION_ROUTES },
      { path: "graphics", children: GRAPHICS_ROUTES },
      { path: "robotics", children: ROBOTICS_ROUTES },

      { path: "theory", children: THEORY_ROUTES },
      { path: "ir", children: IR_ROUTES },
      { path: "research", children: RESEARCH_ROUTES },
      { path: "interview", children: INTERVIEW_ROUTES },

      {
        path: "labs",
        children: [
          { path: "", component: Labs, title: "Interactive labs · CS" },
          { path: ":id", component: Lab, title: "Lab · CS" },
        ],
      },
      {
        path: "paths",
        children: [
          { path: "", component: Paths, title: "Learning paths · CS" },
          { path: ":id", component: Path, title: "Path · CS" },
        ],
      },
      { path: "quiz", component: Interview, title: "Interview · CS" },
      { path: "graph", component: Graph, title: "Knowledge graph · CS" },
      { path: "**", component: NotFound, title: "Not found · CS" },
    ],
  },
];
`;

fs.writeFileSync("src/app/app.routes.ts", appRoutes);
console.log(`pages=${pages} sections=${bySection.size}`);
for (const [section, list] of [...bySection.entries()].sort()) {
  console.log(`  ${section}: ${list.length}`);
}
