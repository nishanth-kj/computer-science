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
let created = 0;

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const isTopicPage = src.includes('from "@/app/pages/topics/view/topic-view"') && src.includes("templateUrl:");
  const isProgram = file.replace(/\\/g, "/").endsWith("/program/program.ts");
  if (!isTopicPage && !isProgram) continue;

  const specPath = file.replace(/\.ts$/, ".spec.ts");
  if (fs.existsSync(specPath)) continue;

  const classMatch = src.match(/export class (\w+)/);
  if (!classMatch) continue;
  const className = classMatch[1];
  const moduleName = path.basename(file, ".ts");

  const spec = `import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ${className} } from "./${moduleName}";

describe("${className}", () => {
  let component: ${className};
  let fixture: ComponentFixture<${className}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [${className}],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(${className});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
`;
  fs.writeFileSync(specPath, spec);
  created++;
}

console.log(`created ${created}`);
