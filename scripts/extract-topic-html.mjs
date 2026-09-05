import fs from "node:fs";
import path from "node:path";

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".ts") && !entry.name.endsWith(".spec.ts") && !entry.name.endsWith(".routes.ts")) {
      out.push(full);
    }
  }
  return out;
}

const re = /template: `<cs-topic-view slug="([^"]+)" \/>`,/;
const files = walk("src/app/pages");
let converted = 0;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const match = src.match(re);
  if (!match) continue;
  const slug = match[1];
  const htmlName = `${path.basename(file, ".ts")}.html`;
  const htmlPath = path.join(path.dirname(file), htmlName);
  fs.writeFileSync(htmlPath, `<cs-topic-view slug="${slug}" />\n`);
  src = src.replace(re, `templateUrl: "./${htmlName}",`);
  fs.writeFileSync(file, src);
  converted++;
}

const program = "src/app/pages/program/program.ts";
let programSrc = fs.readFileSync(program, "utf8");
if (programSrc.includes("template: `<cs-programming-page />`")) {
  fs.writeFileSync("src/app/pages/program/program.html", "<cs-programming-page />\n");
  programSrc = programSrc.replace(
    "template: `<cs-programming-page />`,",
    'templateUrl: "./program.html",',
  );
  fs.writeFileSync(program, programSrc);
  converted++;
}

console.log(`converted ${converted}`);
