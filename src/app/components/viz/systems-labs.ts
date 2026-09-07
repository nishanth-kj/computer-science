import { Component, signal } from "@angular/core";
import { useSim } from "@/lib/sim";
import { SimShell } from "./sim-shell";

@Component({
  selector: "cs-hash-ring",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <div class="mb-3 flex gap-2">
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="add()">Add node</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="remove()">Remove</button>
        <button type="button" class="h-8 rounded-sm px-3 text-xs hover:bg-surface-2" (click)="nodes.set([2, 7, 14])">Reset</button>
      </div>
      <div class="relative mx-auto size-56">
        @for (spot of spots(); track spot.i) {
          <div class="absolute -translate-x-1/2 -translate-y-1/2 rounded-full" [class.size-5]="spot.isNode" [class.size-4]="!spot.isNode" [class.bg-primary]="spot.isNode" [class.bg-ok]="!spot.isNode && spot.isKey" [class.bg-border]="!spot.isNode && !spot.isKey" [style.left.px]="spot.x" [style.top.px]="spot.y"></div>
        }
      </div>
      <ul class="mt-2 font-mono text-xs text-muted">
        @for (k of keys; track k) {
          <li>key {{ k }} → node {{ owner(k) }}</li>
        }
      </ul>
    </div>
  `,
})
export class ConsistentHashViz {
  readonly nodes = signal([2, 7, 14]);
  readonly ring = 18;
  readonly keys = [1, 4, 8, 11, 16];
  owner(k: number) {
    const sorted = [...this.nodes()].sort((a, b) => a - b);
    return sorted.find((n) => n >= k) ?? sorted[0];
  }
  add() {
    this.nodes.update((n) => (n.length < 6 ? [...n, (n[n.length - 1] + 3) % this.ring] : n));
  }
  remove() {
    this.nodes.update((n) => n.slice(0, -1));
  }
  spots() {
    return Array.from({ length: this.ring }, (_, i) => {
      const ang = (i / this.ring) * Math.PI * 2 - Math.PI / 2;
      return { i, x: 104 + Math.cos(ang) * 88, y: 104 + Math.sin(ang) * 88, isNode: this.nodes().includes(i), isKey: this.keys.includes(i) };
    });
  }
}

@Component({
  selector: "cs-bplus",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <div class="mb-3 flex gap-2">
        <input class="h-8 w-20 rounded-md border border-border bg-surface px-2 text-sm" type="number" [value]="n()" (input)="setN($event)" />
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="insert()">Insert</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="keys.set([2, 5, 8, 11, 14, 17])">Reset</button>
      </div>
      <div class="flex justify-center gap-2">
        @for (leaf of leaves(); track $index) {
          <div class="rounded-md border border-border bg-bg px-3 py-2 font-mono text-xs">{{ leaf.join(" · ") }}</div>
        }
      </div>
    </div>
  `,
})
export class BPlusTreeViz {
  readonly keys = signal([2, 5, 8, 11, 14, 17]);
  readonly n = signal(19);
  leaves() {
    const keys = this.keys();
    const out = [];
    for (let i = 0; i < keys.length; i += 3) out.push(keys.slice(i, i + 3));
    return out;
  }
  setN(e: Event) {
    this.n.set(Number((e.target as HTMLInputElement).value));
  }
  insert() {
    this.keys.update((k) => [...k, this.n()].sort((a, b) => a - b));
  }
}

const LEVELS = ["read uncommitted", "read committed", "repeatable read", "serializable"] as const;

@Component({
  selector: "cs-tx",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Isolation" [sim]="sim">
      <select extra class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="level()" (change)="level.set($any($event.target).value)">
        @for (l of levels; track l) {
          <option [value]="l">{{ l }}</option>
        }
      </select>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="rounded-md border border-border p-3">
          <p class="font-medium">T1</p>
          <p class="text-muted">{{ t1() }}</p>
        </div>
        <div class="rounded-md border border-border p-3">
          <p class="font-medium">T2 reads bal</p>
          <p [class.text-danger]="dirty()" [class.text-muted]="!dirty()">{{ t2() }}</p>
        </div>
      </div>
    </cs-sim-shell>
  `,
})
export class TransactionIso {
  readonly levels = LEVELS;
  readonly level = signal<(typeof LEVELS)[number]>("read committed");
  readonly sim = useSim(4);
  dirty() {
    return this.level() === "read uncommitted" && this.sim.step() >= 1 && this.sim.step() < 3;
  }
  t1() {
    return ["BEGIN", "UPDATE bal=0", "… still open", "ROLLBACK", "done"][this.sim.step()];
  }
  t2() {
    if (this.sim.step() === 0) return "—";
    return this.dirty() ? "0 (dirty read)" : "100 (committed snapshot)";
  }
}

const USERS = [
  { id: 1, name: "Ada", country: "UK" },
  { id: 2, name: "Alan", country: "UK" },
  { id: 3, name: "Grace", country: "US" },
];
const ORDERS = [
  { id: 10, user_id: 1, amount: 40 },
  { id: 11, user_id: 1, amount: 15 },
  { id: 12, user_id: 2, amount: 70 },
  { id: 13, user_id: 3, amount: 20 },
];

function runSql(q: string): { headers: string[]; rows: string[][] } | { error: string } {
  const s = q.trim().replace(/;+$/, "");
  const m = s.match(/^select\s+(.+)\s+from\s+(\w+)(?:\s+join\s+(\w+)\s+on\s+(\w+)\.(\w+)\s*=\s*(\w+)\.(\w+))?(?:\s+where\s+(\w+)\s*=\s*'?([^']+)'?)?$/i);
  if (!m) return { error: "Supported: SELECT cols FROM users|orders [JOIN ... ON a.b = c.d] [WHERE col = value]" };
  const cols = m[1].split(",").map((c) => c.trim());
  const from = m[2].toLowerCase();
  let rows: Record<string, string | number>[] = from === "users" ? USERS.map((u) => ({ ...u })) : from === "orders" ? ORDERS.map((o) => ({ ...o })) : [];
  if (!rows.length) return { error: "Unknown table. Try users or orders." };
  if (m[3]) {
    const other = m[3].toLowerCase();
    const right = other === "users" ? USERS : ORDERS;
    const la = m[5];
    const rb = m[7];
    const joined: Record<string, string | number>[] = [];
    for (const L of rows) {
      for (const R of right) {
        if (String((L as Record<string, unknown>)[la]) === String((R as Record<string, unknown>)[rb])) {
          joined.push({ ...L, ...R, id: L.id });
        }
      }
    }
    rows = joined;
  }
  if (m[8]) {
    const col = m[8];
    const val = m[9];
    rows = rows.filter((r) => String((r as Record<string, unknown>)[col]) === val);
  }
  const headers = cols[0] === "*" ? Object.keys(rows[0] ?? {}) : cols;
  return { headers, rows: rows.map((r) => headers.map((h) => String((r as Record<string, unknown>)[h] ?? ""))) };
}

@Component({
  selector: "cs-sql",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <textarea class="h-20 w-full rounded-md border border-border bg-bg p-2 font-mono text-sm" [value]="q()" (input)="q.set($any($event.target).value)"></textarea>
      <div class="mt-2 flex flex-wrap gap-2">
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="run()">Run</button>
        @for (s of samples; track s[0]) {
          <button type="button" class="h-8 rounded-sm px-3 text-xs hover:bg-surface-2" (click)="use(s[0])">{{ s[1] }}</button>
        }
      </div>
      @if (isError()) {
        <p class="mt-3 text-sm text-danger">{{ errorText() }}</p>
      } @else {
        <table class="mt-3 w-full text-left text-sm">
          <thead>
            <tr class="text-muted">
              @for (h of ok().headers; track h) {
                <th class="py-1 pr-3 font-mono text-xs">{{ h }}</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (r of ok().rows; track $index) {
              <tr class="border-t border-border">
                @for (c of r; track $index) {
                  <td class="py-1 pr-3">{{ c }}</td>
                }
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  `,
})
export class SqlPlayground {
  readonly q = signal("SELECT name, country FROM users");
  readonly out = signal(runSql("SELECT name, country FROM users"));
  readonly samples: [string, string][] = [
    ["SELECT * FROM users", "All users"],
    ["SELECT name FROM users WHERE country = 'UK'", "Filter UK"],
    ["SELECT name, amount FROM users JOIN orders ON users.id = orders.user_id", "Join orders"],
  ];
  isError() {
    return "error" in this.out();
  }
  errorText() {
    const o = this.out();
    return "error" in o ? o.error : "";
  }
  ok() {
    const o = this.out();
    return "headers" in o ? o : { headers: [] as string[], rows: [] as string[][] };
  }
  run() {
    this.out.set(runSql(this.q()));
  }
  use(s: string) {
    this.q.set(s);
    this.out.set(runSql(s));
  }
}

type NormTable = { name: string; cols: string[]; rows: string[][] };
type NormStep = { label: string; tables: NormTable[]; note: string };

const NORM_STEPS: NormStep[] = [
  {
    label: "Unnormalized",
    tables: [
      {
        name: "Enrollment",
        cols: ["StudentID", "StudentName", "Courses"],
        rows: [
          ["1", "Alice", "C1:Databases:Dr. Lee, C2:Networks:Dr. Kim"],
          ["2", "Bob", "C1:Databases:Dr. Lee"],
        ],
      },
    ],
    note: "The Courses column holds multiple values per row — a repeating group. Not even 1NF yet.",
  },
  {
    label: "1NF",
    tables: [
      {
        name: "Enrollment",
        cols: ["StudentID", "StudentName", "CourseID", "CourseName", "Instructor"],
        rows: [
          ["1", "Alice", "C1", "Databases", "Dr. Lee"],
          ["1", "Alice", "C2", "Networks", "Dr. Kim"],
          ["2", "Bob", "C1", "Databases", "Dr. Lee"],
        ],
      },
    ],
    note: "Every cell now holds one atomic value — one row per student-course. But StudentName depends only on StudentID, part of the key {StudentID, CourseID} — a partial dependency. Not 2NF yet.",
  },
  {
    label: "2NF",
    tables: [
      { name: "Student", cols: ["StudentID", "StudentName"], rows: [["1", "Alice"], ["2", "Bob"]] },
      {
        name: "Enrollment",
        cols: ["StudentID", "CourseID", "CourseName", "Instructor"],
        rows: [
          ["1", "C1", "Databases", "Dr. Lee"],
          ["1", "C2", "Networks", "Dr. Kim"],
          ["2", "C1", "Databases", "Dr. Lee"],
        ],
      },
    ],
    note: "Splitting out Student removed the partial dependency. But in Enrollment, CourseName and Instructor depend only on CourseID, not the full key — a transitive dependency. Not 3NF yet.",
  },
  {
    label: "3NF",
    tables: [
      { name: "Student", cols: ["StudentID", "StudentName"], rows: [["1", "Alice"], ["2", "Bob"]] },
      { name: "Enrollment", cols: ["StudentID", "CourseID"], rows: [["1", "C1"], ["1", "C2"], ["2", "C1"]] },
      { name: "Course", cols: ["CourseID", "CourseName", "Instructor"], rows: [["C1", "Databases", "Dr. Lee"], ["C2", "Networks", "Dr. Kim"]] },
    ],
    note: "Splitting out Course removed the transitive dependency. Every non-key attribute now depends only on its own table's key.",
  },
  {
    label: "BCNF",
    tables: [
      { name: "Student", cols: ["StudentID", "StudentName"], rows: [["1", "Alice"], ["2", "Bob"]] },
      { name: "Enrollment", cols: ["StudentID", "CourseID"], rows: [["1", "C1"], ["1", "C2"], ["2", "C1"]] },
      { name: "Course", cols: ["CourseID", "CourseName", "Instructor"], rows: [["C1", "Databases", "Dr. Lee"], ["C2", "Networks", "Dr. Kim"]] },
    ],
    note: "BCNF adds one condition beyond 3NF: every determinant must be a candidate key. StudentID → StudentName and CourseID → (CourseName, Instructor) are both keys of their table, so this schema is already in BCNF — the two only diverge when a table has multiple overlapping candidate keys.",
  },
];

@Component({
  selector: "cs-normalize",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Normalization: 1NF → BCNF" [sim]="sim">
      <p class="font-mono text-xs text-muted">{{ step().label }}</p>
      <div class="flex flex-col gap-3">
        @for (t of step().tables; track t.name) {
          <div class="overflow-x-auto rounded-md border border-border">
            <p class="border-b border-border bg-surface-2 px-2 py-1 text-[11px] font-medium">{{ t.name }}</p>
            <table class="w-full text-left text-xs">
              <thead class="text-muted">
                <tr>
                  @for (c of t.cols; track c) {
                    <th class="px-2 py-1 font-mono">{{ c }}</th>
                  }
                </tr>
              </thead>
              <tbody>
                @for (r of t.rows; track $index) {
                  <tr class="border-t border-border">
                    @for (c of r; track $index) {
                      <td class="px-2 py-1">{{ c }}</td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
      <p class="mt-3 text-sm text-muted">{{ step().note }}</p>
    </cs-sim-shell>
  `,
})
export class NormalizationStepper {
  readonly sim = useSim(NORM_STEPS.length - 1, 6);
  step() {
    return NORM_STEPS[this.sim.step()];
  }
}
