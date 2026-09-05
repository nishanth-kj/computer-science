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

const files = walk("src/app/pages");
let converted = 0;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const htmlMatch = src.match(/templateUrl: "\.\/([^"]+\.html)",/);
  if (!htmlMatch) continue;
  if (src.includes("styleUrl:")) continue;

  const cssName = htmlMatch[1].replace(/\.html$/, ".css");
  const cssPath = path.join(path.dirname(file), cssName);
  if (!fs.existsSync(cssPath)) {
    fs.writeFileSync(cssPath, ":host {\n  display: block;\n}\n");
  }
  src = src.replace(htmlMatch[0], `${htmlMatch[0]}\n  styleUrl: "./${cssName}",`);
  fs.writeFileSync(file, src);
  converted++;
}

console.log(`converted ${converted}`);
