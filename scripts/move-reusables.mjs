import fs from "node:fs";
import path from "node:path";

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".ts") || entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

copyDir("src/app/pages/topics/view", "src/app/components/topic-view");
copyDir("src/app/pages/section-view", "src/app/components/section-view");

const replacements = [
  ["@/app/pages/topics/view/topic-view", "@/app/components/topic-view/topic-view"],
  ["@/app/pages/section-view/section-view", "@/app/components/section-view/section-view"],
];

let updated = 0;
for (const file of walk("src")) {
  let src = fs.readFileSync(file, "utf8");
  let next = src;
  for (const [from, to] of replacements) next = next.split(from).join(to);
  if (next !== src) {
    fs.writeFileSync(file, next);
    updated++;
  }
}

fs.rmSync("src/app/pages/topics/view", { recursive: true, force: true });
fs.rmSync("src/app/pages/section-view", { recursive: true, force: true });
console.log(`moved reusables, updated ${updated} files`);
