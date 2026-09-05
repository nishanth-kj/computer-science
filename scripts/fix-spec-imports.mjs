import fs from "node:fs";
import path from "node:path";

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".spec.ts")) out.push(full);
  }
  return out;
}

let updated = 0;
for (const file of walk("src/app/pages")) {
  const src = fs.readFileSync(file, "utf8");
  const next = src.replace(
    /import \{ pageProviders \} from ["'][^"']+["'];/,
    'import { pageProviders } from "@/app/pages/page-spec";',
  );
  if (next !== src) {
    fs.writeFileSync(file, next);
    updated++;
  }
}
console.log(`updated ${updated}`);
