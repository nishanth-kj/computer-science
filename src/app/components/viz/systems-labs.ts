import { Component, computed, signal } from "@angular/core";
import { useSim } from "@/lib/sim";
import { SimShell } from "./sim-shell";

@Component({
  selector: "cs-lb",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <div class="mb-3 flex gap-2">
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="send()">Send request</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="reset()">Reset</button>
      </div>
      <div class="grid grid-cols-3 gap-2">
        @for (n of counts(); track $index; let i = $index) {
          <button type="button" class="min-h-20 rounded-lg border p-3 text-left" [class.border-border]="alive()[i]" [class.bg-bg]="alive()[i]" [class.border-danger]="!alive()[i]" [class.bg-danger/10]="!alive()[i]" (click)="toggle(i)">
            <p class="text-sm font-medium">backend {{ i + 1 }}</p>
            <p class="font-mono text-xs text-muted">{{ alive()[i] ? n + " req" : "down" }}</p>
          </button>
        }
      </div>
      <p class="mt-2 text-xs text-muted">Least-connections. Click a backend to kill or revive it.</p>
    </div>
  `,
})
export class LoadBalancerViz {
  readonly alive = signal([true, true, true]);
  readonly counts = signal([0, 0, 0]);
  send() {
    const pool = this.alive().map((a, i) => (a ? i : -1)).filter((i) => i >= 0);
    if (!pool.length) return;
    const counts = this.counts();
    const i = pool.reduce((best, i) => (counts[i] < counts[best] ? i : best), pool[0]);
    this.counts.update((c) => c.map((n, k) => (k === i ? n + 1 : n)));
  }
  toggle(i: number) {
    this.alive.update((a) => a.map((x, k) => (k === i ? !x : x)));
  }
  reset() {
    this.counts.set([0, 0, 0]);
    this.alive.set([true, true, true]);
  }
}

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

const LEADER = [
  { leader: 0, dead: -1, note: "A is leader, B and C follow" },
  { leader: 0, dead: 0, note: "A crashes. Heartbeats stop." },
  { leader: 1, dead: 0, note: "B times out, starts election, wins." },
  { leader: 1, dead: 0, note: "Clients now talk to B." },
];

@Component({
  selector: "cs-leader",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Leader election" [sim]="sim">
      <div class="flex gap-3">
        @for (n of names; track n; let i = $index) {
          <div class="min-h-20 flex-1 rounded-lg border p-3" [class.border-danger]="s().dead === i" [class.opacity-50]="s().dead === i" [class.border-primary]="s().dead !== i && s().leader === i" [class.bg-primary/10]="s().dead !== i && s().leader === i" [class.border-border]="s().dead !== i && s().leader !== i">
            <p class="font-medium">{{ n }}</p>
            <p class="text-xs text-muted">{{ s().dead === i ? "down" : s().leader === i ? "leader" : "follower" }}</p>
          </div>
        }
      </div>
      <p class="mt-3 text-sm text-muted">{{ s().note }}</p>
    </cs-sim-shell>
  `,
})
export class LeaderElection {
  readonly names = ["A", "B", "C"];
  readonly sim = useSim(LEADER.length - 1);
  s() {
    return LEADER[this.sim.step()];
  }
}

@Component({
  selector: "cs-cache",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Cache" [sim]="sim">
      <select extra class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="assoc()" (change)="onAssoc($event)">
        <option value="1">direct-mapped</option>
        <option value="2">2-way</option>
      </select>
      <p class="font-mono text-xs text-muted">addr {{ addrs[sim.step()] }} — {{ state().lastHit ? "hit" : "miss" }} ({{ state().hits }} hits)</p>
      <div class="mt-2 grid grid-cols-4 gap-2">
        @for (line of state().cache; track $index; let i = $index) {
          <div class="rounded-md border border-border bg-bg p-2 font-mono text-xs">set {{ i }}: {{ line.join(", ") || "—" }}</div>
        }
      </div>
    </cs-sim-shell>
  `,
})
export class CacheSim {
  readonly assoc = signal<1 | 2>(1);
  readonly addrs = [0, 8, 16, 0, 24, 8];
  readonly sim = useSim(5);
  state() {
    const sets = 4;
    const cache: number[][] = Array.from({ length: sets }, () => []);
    let hits = 0;
    let lastHit = false;
    for (let i = 0; i <= this.sim.step(); i++) {
      const a = this.addrs[i];
      const set = (a / 8) % sets;
      const line = cache[set];
      if (line.includes(a)) {
        hits++;
        lastHit = true;
      } else {
        lastHit = false;
        if (line.length >= this.assoc()) line.shift();
        line.push(a);
      }
    }
    return { cache, hits, lastHit };
  }
  setAssoc(n: number) {
    this.assoc.set(n === 2 ? 2 : 1);
    this.sim.reset();
  }
  onAssoc(e: Event) {
    this.setAssoc(Number((e.target as HTMLSelectElement).value));
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

const NN = ["input x", "z = Wx+b", "a = σ(z)", "loss vs y", "backprop, W ← W − η∇W"];

@Component({
  selector: "cs-nn",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Tiny network" [sim]="sim">
      <div class="flex items-center justify-center gap-6 py-4">
        @for (n of layers; track $index; let layer = $index) {
          <div class="flex flex-col gap-2">
            @for (i of range(n); track i) {
              <div class="size-8 rounded-full border" [class.border-primary]="sim.step() >= layer" [class.bg-primary/30]="sim.step() >= layer" [class.border-border]="sim.step() < layer" [class.bg-bg]="sim.step() < layer"></div>
            }
          </div>
        }
      </div>
      <p class="text-center text-sm text-muted">{{ labels[sim.step()] }}</p>
    </cs-sim-shell>
  `,
})
export class NeuralNetViz {
  readonly layers = [1, 3, 1];
  readonly labels = NN;
  readonly sim = useSim(4);
  range(n: number) {
    return Array.from({ length: n }, (_, i) => i);
  }
}

@Component({
  selector: "cs-dfa",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="DFA: strings that end in 01" [sim]="sim">
      <input extra class="h-8 w-28 rounded-md border border-border bg-surface px-2 font-mono text-sm" [value]="s()" (input)="setS($any($event.target).value)" />
      <div class="flex gap-2">
        @for (st of [0, 1, 2]; track st) {
          <div class="flex size-14 items-center justify-center rounded-full border text-sm" [class.border-primary]="q() === st" [class.bg-primary]="q() === st" [class.text-primary-fg]="q() === st" [class.border-border]="q() !== st" [class.ring-2]="st === 2" [class.ring-ok]="st === 2">q{{ st }}</div>
        }
      </div>
      <p class="mt-3 font-mono text-xs text-muted">input {{ s() }} — {{ accept() ? "ACCEPT" : "REJECT" }}</p>
    </cs-sim-shell>
  `,
})
export class DfaSim {
  readonly s = signal("010");
  readonly path = computed(() => {
    const machine = [
      { "0": 0, "1": 1 },
      { "0": 2, "1": 1 },
      { "0": 0, "1": 1 },
    ];
    const path = [0];
    for (const ch of this.s()) {
      const last = path[path.length - 1];
      path.push(ch === "0" || ch === "1" ? machine[last][ch] : last);
    }
    return path;
  });
  readonly sim = useSim(() => Math.max(0, this.path().length - 1));
  q() {
    const p = this.path();
    return p[Math.min(this.sim.step(), p.length - 1)];
  }
  accept() {
    const p = this.path();
    return p[p.length - 1] === 2;
  }
  setS(v: string) {
    this.s.set(v.replace(/[^01]/g, ""));
    this.sim.reset();
  }
}

type Tok = { kind: string; value: string };
function lex(src: string): Tok[] {
  const out: Tok[] = [];
  const re = /\s+|([A-Za-z_]\w*)|(\d+)|([=+\-*/()])|./g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m[0].trim() === "") continue;
    if (m[1]) out.push({ kind: m[1] === "let" || m[1] === "print" ? "kw" : "id", value: m[1] });
    else if (m[2]) out.push({ kind: "num", value: m[2] });
    else if (m[3]) out.push({ kind: "op", value: m[3] });
    else out.push({ kind: "err", value: m[0] });
  }
  return out;
}
function parseExpr(tokens: Tok[], i = { n: 0 }): string {
  const peek = () => tokens[i.n];
  const eat = () => tokens[i.n++];
  function factor(): string {
    const t = eat();
    if (!t) return "?";
    if (t.value === "(") {
      const inner = expr();
      if (peek()?.value === ")") eat();
      return inner;
    }
    return t.value;
  }
  function term(): string {
    let left = factor();
    while (peek()?.value === "*" || peek()?.value === "/") {
      const op = eat().value;
      left = `(${op} ${left} ${factor()})`;
    }
    return left;
  }
  function expr(): string {
    let left = term();
    while (peek()?.value === "+" || peek()?.value === "-") {
      const op = eat().value;
      left = `(${op} ${left} ${term()})`;
    }
    return left;
  }
  const first = peek();
  if (first?.value === "let") {
    eat();
    const name = eat()?.value ?? "x";
    if (peek()?.value === "=") eat();
    return `(let ${name} ${expr()})`;
  }
  return expr();
}

@Component({
  selector: "cs-compiler",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <textarea class="mb-3 h-20 w-full rounded-md border border-border bg-bg p-2 font-mono text-sm" [value]="src()" (input)="src.set($any($event.target).value)" aria-label="Source"></textarea>
      <p class="mb-1 text-[11px] text-muted">Tokens</p>
      <div class="flex flex-wrap gap-1">
        @for (t of tokens(); track $index) {
          <span class="rounded-sm bg-bg px-2 py-0.5 font-mono text-[11px]">{{ t.kind }}:{{ t.value }}</span>
        }
      </div>
      <p class="mt-3 text-[11px] text-muted">AST</p>
      <pre class="overflow-x-auto font-mono text-[11px] text-muted">{{ ast() }}</pre>
    </div>
  `,
})
export class CompilerExplorer {
  readonly src = signal("let x = 1 + 2 * 3");
  readonly tokens = computed(() => lex(this.src()));
  readonly ast = computed(() => {
    try {
      return parseExpr(this.tokens());
    } catch {
      return "(error)";
    }
  });
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

type Fs = { [name: string]: string | Fs };
const FS0: Fs = {
  home: { user: { "readme.txt": "Welcome to the CS terminal.\nTry ls, cd, cat, grep, pwd.", notes: { "osi.txt": "Seven layers. Encapsulation going down." } } },
  etc: { hostname: "csref", passwd: "root:x:0:0" },
  proc: { version: "Linux csref 6.8.0" },
};
function getPath(fs: Fs, parts: string[]): string | Fs | undefined {
  let cur: string | Fs = fs;
  for (const p of parts) {
    if (p === "" || p === ".") continue;
    if (typeof cur === "string") return undefined;
    cur = cur[p];
    if (cur === undefined) return undefined;
  }
  return cur;
}

@Component({
  selector: "cs-linux",
  template: `
    <div class="overflow-hidden rounded-xl border border-border bg-[#0c0e11] p-3 font-mono text-[13px] text-[#e8eaee]">
      <div class="mb-2 max-h-56 overflow-y-auto whitespace-pre-wrap">
        @for (l of lines(); track $index) {
          <div>{{ l }}</div>
        }
      </div>
      <form class="flex gap-2" (submit)="$event.preventDefault(); run()">
        <span class="text-ok">user@csref</span>
        <input class="min-w-0 flex-1 bg-transparent outline-none" [value]="cmd()" (input)="cmd.set($any($event.target).value)" aria-label="Terminal input" />
      </form>
    </div>
  `,
})
export class LinuxTerminal {
  readonly cwd = signal<string[]>(["home", "user"]);
  readonly lines = signal<string[]>(["CS terminal. Type help."]);
  readonly cmd = signal("");
  run() {
    const raw = this.cmd();
    if (!raw.trim()) return;
    const [c, ...args] = raw.trim().split(/\s+/);
    const out: string[] = [`$ ${raw}`];
    const loc = () => "/" + this.cwd().join("/");
    if (!c || c === "help") out.push("help ls cd pwd cat echo mkdir grep whoami uname date ps");
    else if (c === "pwd") out.push(loc());
    else if (c === "whoami") out.push("user");
    else if (c === "uname") out.push("Linux csref 6.8.0");
    else if (c === "date") out.push(new Date().toUTCString());
    else if (c === "ps") out.push("PID TTY CMD\n  1 ?   init\n 42 pts/0 bash");
    else if (c === "ls") {
      const node = getPath(FS0, this.cwd());
      out.push(node && typeof node !== "string" ? Object.keys(node).join("  ") : "not a directory");
    } else if (c === "cd") {
      const t = args[0] ?? "/home/user";
      let next = [...this.cwd()];
      if (t.startsWith("/")) next = t.split("/").filter(Boolean);
      else if (t === "..") next = next.slice(0, -1);
      else next = [...next, ...t.split("/").filter(Boolean)];
      const node = getPath(FS0, next);
      if (node && typeof node !== "string") this.cwd.set(next);
      else out.push("cd: no such directory");
    } else if (c === "cat") {
      const node = getPath(FS0, [...this.cwd(), args[0] ?? ""]);
      out.push(typeof node === "string" ? node : "cat: not a file");
    } else if (c === "echo") out.push(args.join(" "));
    else if (c === "grep") {
      const node = getPath(FS0, [...this.cwd(), args[1] ?? ""]);
      if (typeof node === "string") out.push(...node.split("\n").filter((l) => l.includes(args[0] ?? "")));
      else out.push("grep: not a file");
    } else out.push(`${c}: command not found`);
    this.lines.update((L) => [...L, ...out].slice(-80));
    this.cmd.set("");
  }
}
