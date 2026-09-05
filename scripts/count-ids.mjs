import { readFileSync } from "node:fs";

const nav = readFileSync("src/content/nav.ts", "utf8") + readFileSync("src/content/nav-rest.ts", "utf8");
const topics = [...nav.matchAll(/^\s+\["([a-z0-9-]+)"/gm)].map((m) => m[1]);
const sections = [...readFileSync("src/content/sections.ts", "utf8").matchAll(/id: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const labs = [...readFileSync("src/content/labs.ts", "utf8").matchAll(/id: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const paths = [...readFileSync("src/content/paths.ts", "utf8").matchAll(/id: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const clash = topics.filter((t) => sections.includes(t) || labs.includes(t) || paths.includes(t));
console.log({
  topics: topics.length,
  uniq: new Set(topics).size,
  sections: sections.length,
  labs: labs.length,
  paths: paths.length,
  clash,
});
console.log("SECTIONS", sections.join(","));
console.log("LABS", labs.join(","));
console.log("PATHS", paths.join(","));
