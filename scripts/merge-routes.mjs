import fs from "node:fs";
import path from "node:path";

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".routes.ts") && !full.endsWith(`${path.sep}app.routes.ts`)) out.push(full);
  }
  return out;
}

function posixFromSrcApp(file) {
  return file.replace(/\\/g, "/").replace(/^.*src\/app\//, "");
}

function parseSectionFile(file) {
  const src = fs.readFileSync(file, "utf8");
  const relDir = path.posix.dirname(posixFromSrcApp(file));
  const classMatch = src.match(/import \{ (\w+) \} from "\.\/([^"]+)"/);
  if (!classMatch) throw new Error(`no section import in ${file}`);
  const className = classMatch[1];
  const classFile = classMatch[2];
  const importPath = `@/app/${relDir}/${classFile}`;

  const start = src.indexOf("= [");
  const end = src.lastIndexOf("];");
  let body = src.slice(start + 3, end).trim();
  body = body.replace(/import\("\.\/([^"]+)"\)/g, (_, spec) => `import("@/app/${relDir}/${spec}")`);

  const lines = body
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const seen = new Set();
  const unique = [];
  for (const line of lines) {
    const pathMatch = line.match(/path: "([^"]*)"/);
    const key = pathMatch ? pathMatch[1] : line;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(line.endsWith(",") ? line : `${line},`);
  }
  return { className, importPath, children: unique, file };
}

const files = walk("src/app/pages");
const byClass = new Map();
for (const file of files) {
  const parsed = parseSectionFile(file);
  byClass.set(parsed.className, parsed);
}

const sectionOrder = [
  ["LanguagesPage", "languages"],
  ["FundamentalsPage", "fundamentals"],
  ["OopPage", "oop"],
  ["DsaPage", "dsa"],
  ["DiscreteMathPage", "discrete-math"],
  ["NetworksPage", "networks"],
  ["OsPage", "os"],
  ["DbmsPage", "dbms"],
  ["ArchitecturePage", "architecture"],
  ["LinuxPage", "linux"],
  ["ParallelPage", "parallel"],
  ["SoftwareEngineeringPage", "software-engineering"],
  ["WebPage", "web"],
  ["CompilersPage", "compilers"],
  ["MobilePage", "mobile"],
  ["CybersecurityPage", "cybersecurity"],
  ["CloudPage", "cloud"],
  ["DevopsPage", "devops"],
  ["DistributedPage", "distributed"],
  ["SystemDesignPage", "system-design"],
  ["AiPage", "ai"],
  ["MlPage", "ml"],
  ["DeepLearningPage", "deep-learning"],
  ["LlmPage", "llm"],
  ["NlpPage", "nlp"],
  ["VisionPage", "vision"],
  ["GraphicsPage", "graphics"],
  ["RoboticsPage", "robotics"],
  ["TheoryPage", "theory"],
  ["IrPage", "ir"],
  ["ResearchPage", "research"],
  ["InterviewPage", "interview"],
];

for (const [cls] of sectionOrder) {
  if (!byClass.has(cls)) throw new Error(`missing routes for ${cls}`);
}

function indent(lines, n) {
  const pad = " ".repeat(n);
  return lines.map((l) => pad + l).join("\n");
}

function childrenBlock(className, spaces) {
  return indent(byClass.get(className).children, spaces);
}

const sectionImports = sectionOrder
  .map(([cls]) => `import { ${cls} } from "${byClass.get(cls).importPath}";`)
  .sort((a, b) => a.localeCompare(b))
  .join("\n");

const programming = ["LanguagesPage", "FundamentalsPage", "OopPage", "DsaPage", "DiscreteMathPage"]
  .map((cls, i) => {
    const pathName = sectionOrder.find(([c]) => c === cls)[1];
    return `          {\n            path: "${pathName}",\n            children: [\n${childrenBlock(cls, 14)}\n            ],\n          },`;
  })
  .join("\n");

function topGroup(pairs) {
  return pairs
    .map(([cls, p]) => `      {\n        path: "${p}",\n        children: [\n${childrenBlock(cls, 10)}\n        ],\n      },`)
    .join("\n");
}

const out = `import { RedirectFunction, Routes } from "@angular/router";
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
import { ProgramPage } from "@/app/pages/program/program";
import { ProgrammingPage } from "@/app/pages/programming/programming";
${sectionImports}

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

      { path: "program", component: ProgramPage, title: "Programming · CS" },
      {
        path: "programming",
        children: [
          { path: "", component: ProgrammingPage, title: "Programming · CS" },
${programming}
        ],
      },
      { path: "languages", redirectTo: "programming/languages" },
      { path: "fundamentals", redirectTo: "programming/fundamentals" },
      { path: "oop", redirectTo: "programming/oop" },
      { path: "dsa", redirectTo: "programming/dsa" },
      { path: "discrete-math", redirectTo: "programming/discrete-math" },

${topGroup([
  ["NetworksPage", "networks"],
  ["OsPage", "os"],
  ["DbmsPage", "dbms"],
])}

${topGroup([
  ["ArchitecturePage", "architecture"],
  ["LinuxPage", "linux"],
  ["ParallelPage", "parallel"],
])}

${topGroup([
  ["SoftwareEngineeringPage", "software-engineering"],
  ["WebPage", "web"],
  ["CompilersPage", "compilers"],
  ["MobilePage", "mobile"],
])}

${topGroup([
  ["CybersecurityPage", "cybersecurity"],
  ["CloudPage", "cloud"],
  ["DevopsPage", "devops"],
])}

${topGroup([
  ["DistributedPage", "distributed"],
  ["SystemDesignPage", "system-design"],
])}

${topGroup([
  ["AiPage", "ai"],
  ["MlPage", "ml"],
  ["DeepLearningPage", "deep-learning"],
  ["LlmPage", "llm"],
  ["NlpPage", "nlp"],
  ["VisionPage", "vision"],
  ["GraphicsPage", "graphics"],
  ["RoboticsPage", "robotics"],
])}

${topGroup([
  ["TheoryPage", "theory"],
  ["IrPage", "ir"],
  ["ResearchPage", "research"],
  ["InterviewPage", "interview"],
])}

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

fs.writeFileSync("src/app/app.routes.ts", out);
for (const file of files) fs.unlinkSync(file);
console.log(`merged ${files.length} route files into src/app/app.routes.ts`);
