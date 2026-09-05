import { Component, computed, signal } from "@angular/core";
import { useSim } from "../../lib/sim";
import { SimShell } from "./sim-shell";

type Algo = "bubble" | "insertion" | "quick" | "binsearch";
const START = [7, 2, 9, 4, 1, 8, 5, 3];

function framesFor(algo: Algo, src: number[]) {
  const a = src.slice();
  const frames: { arr: number[]; hi: number[] }[] = [{ arr: a.slice(), hi: [] }];
  if (algo === "bubble") {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        frames.push({ arr: a.slice(), hi: [j, j + 1] });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          frames.push({ arr: a.slice(), hi: [j, j + 1] });
        }
      }
    }
  } else if (algo === "insertion") {
    for (let i = 1; i < a.length; i++) {
      const k = a[i];
      let j = i - 1;
      frames.push({ arr: a.slice(), hi: [i] });
      while (j >= 0 && a[j] > k) {
        a[j + 1] = a[j];
        frames.push({ arr: a.slice(), hi: [j, j + 1] });
        j--;
      }
      a[j + 1] = k;
      frames.push({ arr: a.slice(), hi: [j + 1] });
    }
  } else if (algo === "quick") {
    const qs = (lo: number, hi: number) => {
      if (lo >= hi) return;
      const p = a[hi];
      let i = lo;
      for (let j = lo; j < hi; j++) {
        frames.push({ arr: a.slice(), hi: [j, hi] });
        if (a[j] < p) {
          [a[i], a[j]] = [a[j], a[i]];
          frames.push({ arr: a.slice(), hi: [i, j] });
          i++;
        }
      }
      [a[i], a[hi]] = [a[hi], a[i]];
      frames.push({ arr: a.slice(), hi: [i] });
      qs(lo, i - 1);
      qs(i + 1, hi);
    };
    qs(0, a.length - 1);
  } else {
    const sorted = src.slice().sort((x, y) => x - y);
    const target = sorted[Math.floor(sorted.length * 0.7)];
    let lo = 0;
    let hi = sorted.length - 1;
    frames.length = 0;
    frames.push({ arr: sorted.slice(), hi: [] });
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      frames.push({ arr: sorted.slice(), hi: [mid] });
      if (sorted[mid] === target) break;
      if (sorted[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  frames.push({ arr: (algo === "binsearch" ? src.slice().sort((x, y) => x - y) : a).slice(), hi: [] });
  return frames;
}

@Component({
  selector: "cs-algo",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Array algorithms" [sim]="sim">
      <select extra class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="algo()" (change)="setAlgo($any($event.target).value)">
        <option value="bubble">Bubble sort</option>
        <option value="insertion">Insertion sort</option>
        <option value="quick">Quicksort</option>
        <option value="binsearch">Binary search</option>
      </select>
      <div class="flex h-40 items-end gap-1">
        @for (v of frame().arr; track $index; let i = $index) {
          <div class="flex flex-1 flex-col items-center gap-1">
            <div class="w-full rounded-sm" [class.bg-primary]="frame().hi.includes(i)" [class.bg-surface-2]="!frame().hi.includes(i)" [style.height.%]="(v / max) * 100"></div>
            <span class="font-mono text-[10px] tabular-nums text-muted">{{ v }}</span>
          </div>
        }
      </div>
    </cs-sim-shell>
  `,
})
export class AlgorithmVisualizer {
  readonly algo = signal<Algo>("bubble");
  readonly frames = computed(() => framesFor(this.algo(), START));
  readonly sim = useSim(() => Math.max(0, this.frames().length - 1), 4);
  readonly max = Math.max(...START);
  frame() {
    const frames = this.frames();
    return frames[Math.min(this.sim.step(), frames.length - 1)] ?? frames[0];
  }
  setAlgo(v: Algo) {
    this.algo.set(v);
    this.sim.reset();
  }
}

@Component({
  selector: "cs-stack-queue",
  template: `
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-xl border border-border bg-surface p-3">
        <p class="mb-2 text-sm font-medium">Stack — LIFO</p>
        <div class="mb-3 flex min-h-32 flex-col-reverse gap-1">
          @for (x of stack(); track $index) {
            <div class="rounded-sm bg-surface-2 px-3 py-1 text-center font-mono text-sm">{{ x }}</div>
          }
        </div>
        <div class="flex gap-2">
          <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="push()">Push {{ n() }}</button>
          <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="pop()">Pop</button>
        </div>
      </div>
      <div class="rounded-xl border border-border bg-surface p-3">
        <p class="mb-2 text-sm font-medium">Queue — FIFO</p>
        <div class="mb-3 flex min-h-32 items-center gap-1 overflow-x-auto">
          @for (x of queue(); track $index) {
            <div class="rounded-sm bg-surface-2 px-3 py-1 font-mono text-sm">{{ x }}</div>
          }
        </div>
        <div class="flex gap-2">
          <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="enqueue()">Enqueue {{ n() }}</button>
          <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="dequeue()">Dequeue</button>
        </div>
      </div>
      <label class="flex items-center gap-2 text-sm text-muted sm:col-span-2">
        Next value
        <input class="h-8 w-20 rounded-md border border-border bg-surface px-2 text-sm" type="number" [value]="n()" (input)="setN($event)" />
      </label>
    </div>
  `,
})
export class StackQueue {
  readonly stack = signal([3, 1, 4]);
  readonly queue = signal([1, 2, 3]);
  readonly n = signal(7);
  push() {
    this.stack.update((s) => [...s, this.n()]);
  }
  pop() {
    this.stack.update((s) => s.slice(0, -1));
  }
  enqueue() {
    this.queue.update((q) => [...q, this.n()]);
  }
  dequeue() {
    this.queue.update((q) => q.slice(1));
  }
  setN(e: Event) {
    this.n.set(Number((e.target as HTMLInputElement).value));
  }
}

@Component({
  selector: "cs-hash",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <div class="mb-3 flex flex-wrap gap-2">
        <select class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="mode()" (change)="mode.set($any($event.target).value)">
          <option value="chain">Chaining</option>
          <option value="probe">Linear probing</option>
        </select>
        <input class="h-8 w-28 rounded-md border border-border bg-surface px-2 text-sm" [value]="input()" (input)="input.set($any($event.target).value)" />
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="insert()">Insert</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="keys.set(['cat', 'car', 'dog', 'cab'])">Reset</button>
      </div>
      <div class="grid grid-cols-5 gap-2">
        @for (b of buckets(); track $index; let i = $index) {
          <div class="min-h-24 rounded-md border border-border bg-bg p-2">
            <p class="font-mono text-[11px] text-muted">#{{ i }}</p>
            @for (k of b; track k) {
              <p class="font-mono text-xs text-fg">{{ k }}</p>
            }
          </div>
        }
      </div>
    </div>
  `,
})
export class HashCollisions {
  readonly mode = signal<"chain" | "probe">("chain");
  readonly keys = signal(["cat", "car", "dog", "cab"]);
  readonly input = signal("arc");
  readonly m = 5;
  buckets() {
    const m = this.m;
    const hash = (k: string) => k.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % m;
    const buckets: string[][] = Array.from({ length: m }, () => []);
    if (this.mode() === "chain") {
      for (const k of this.keys()) buckets[hash(k)].push(k);
    } else {
      const table: (string | null)[] = Array(m).fill(null);
      for (const k of this.keys()) {
        let i = hash(k);
        for (let t = 0; t < m; t++) {
          if (!table[i]) {
            table[i] = k;
            break;
          }
          i = (i + 1) % m;
        }
      }
      table.forEach((k, i) => {
        if (k) buckets[i].push(k);
      });
    }
    return buckets;
  }
  insert() {
    const v = this.input();
    if (v) this.keys.update((k) => [...k, v]);
  }
}

type GNode = { id: string; x: number; y: number };
const G: GNode[] = [
  { id: "A", x: 40, y: 70 },
  { id: "B", x: 140, y: 30 },
  { id: "C", x: 140, y: 110 },
  { id: "D", x: 240, y: 30 },
  { id: "E", x: 240, y: 110 },
  { id: "F", x: 340, y: 70 },
];
const GE: [string, string][] = [["A", "B"], ["A", "C"], ["B", "D"], ["C", "E"], ["D", "F"], ["E", "F"], ["B", "C"]];

function walk(kind: "bfs" | "dfs") {
  const m: Record<string, string[]> = {};
  for (const n of G) m[n.id] = [];
  for (const [a, b] of GE) {
    m[a].push(b);
    m[b].push(a);
  }
  const order: string[] = [];
  const seen = new Set<string>();
  if (kind === "bfs") {
    const q = ["A"];
    seen.add("A");
    while (q.length) {
      const u = q.shift()!;
      order.push(u);
      for (const v of m[u]) if (!seen.has(v)) {
        seen.add(v);
        q.push(v);
      }
    }
  } else {
    const rec = (u: string) => {
      seen.add(u);
      order.push(u);
      for (const v of m[u]) if (!seen.has(v)) rec(v);
    };
    rec("A");
  }
  return order;
}

@Component({
  selector: "cs-graph-search",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Graph search" [sim]="sim">
      <select extra class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="kind()" (change)="setKind($any($event.target).value)">
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
      </select>
      <svg viewBox="0 0 380 150" class="h-40 w-full">
        @for (e of edges; track e[0] + e[1]) {
          <line [attr.x1]="node(e[0]).x" [attr.y1]="node(e[0]).y" [attr.x2]="node(e[1]).x" [attr.y2]="node(e[1]).y" class="stroke-border-strong" stroke-width="2" />
        }
        @for (n of nodes; track n.id) {
          <g>
            <circle [attr.cx]="n.x" [attr.cy]="n.y" r="16" [class.fill-primary]="n.id === current()" [class.fill-ok]="n.id !== current() && active().has(n.id)" [class.fill-surface-2]="n.id !== current() && !active().has(n.id)" />
            <text [attr.x]="n.x" [attr.y]="n.y + 4" text-anchor="middle" [class.fill-primary-fg]="n.id === current()" [class.fill-fg]="n.id !== current()" font-size="12">{{ n.id }}</text>
          </g>
        }
      </svg>
      <p class="font-mono text-xs text-muted">order: {{ order().slice(0, sim.step() + 1).join(" → ") }}</p>
    </cs-sim-shell>
  `,
})
export class GraphSearch {
  readonly kind = signal<"bfs" | "dfs">("bfs");
  readonly nodes = G;
  readonly edges = GE;
  readonly order = computed(() => walk(this.kind()));
  readonly sim = useSim(() => this.order().length - 1);
  current() {
    return this.order()[this.sim.step()];
  }
  active() {
    return new Set(this.order().slice(0, this.sim.step() + 1));
  }
  node(id: string) {
    return G.find((n) => n.id === id)!;
  }
  setKind(v: "bfs" | "dfs") {
    this.kind.set(v);
    this.sim.reset();
  }
}

const DIST = [
  { A: 0, B: 4, C: 2, D: Infinity, E: Infinity, F: Infinity, at: "A" },
  { A: 0, B: 4, C: 2, D: Infinity, E: 5, F: Infinity, at: "C" },
  { A: 0, B: 4, C: 2, D: 7, E: 5, F: Infinity, at: "B" },
  { A: 0, B: 4, C: 2, D: 7, E: 5, F: 9, at: "E" },
  { A: 0, B: 4, C: 2, D: 7, E: 5, F: 9, at: "D" },
  { A: 0, B: 4, C: 2, D: 7, E: 5, F: 9, at: "F" },
];

@Component({
  selector: "cs-dijkstra",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Dijkstra from A" [sim]="sim">
      <div class="flex flex-wrap gap-2">
        @for (k of keys; track k) {
          <div class="rounded-md border px-3 py-2 font-mono text-sm" [class.border-primary]="f().at === k" [class.bg-primary]="f().at === k" [class.text-primary-fg]="f().at === k" [class.border-border]="f().at !== k" [class.bg-bg]="f().at !== k">
            {{ k }}: {{ fmt(k) }}
          </div>
        }
      </div>
      <p class="mt-3 text-sm text-muted">Settling {{ f().at }}. Nonnegative edges, greedy frontier.</p>
    </cs-sim-shell>
  `,
})
export class DijkstraViz {
  readonly keys = ["A", "B", "C", "D", "E", "F"];
  readonly sim = useSim(DIST.length - 1);
  f() {
    return DIST[this.sim.step()];
  }
  fmt(k: string) {
    const v = (this.f() as Record<string, number | string>)[k];
    return v === Infinity ? "∞" : v;
  }
}

type TNode = { k: number; l?: TNode; r?: TNode };
function insert(n: TNode | undefined, k: number): TNode {
  if (!n) return { k };
  if (k < n.k) return { ...n, l: insert(n.l, k) };
  if (k > n.k) return { ...n, r: insert(n.r, k) };
  return n;
}
function layout(n: TNode | undefined, x: number, y: number, dx: number, acc: { k: number; x: number; y: number; p?: number }[] = []) {
  if (!n) return acc;
  acc.push({ k: n.k, x, y });
  if (n.l) {
    acc.push({ k: n.l.k, x: x - dx, y: y + 56, p: n.k });
    layout(n.l, x - dx, y + 56, dx / 1.7, acc);
  }
  if (n.r) {
    acc.push({ k: n.r.k, x: x + dx, y: y + 56, p: n.k });
    layout(n.r, x + dx, y + 56, dx / 1.7, acc);
  }
  return acc;
}
const SEED = [8, 3, 10, 1, 6, 14, 4, 7];

@Component({
  selector: "cs-bst",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <div class="mb-2 flex gap-2">
        <input class="h-8 w-20 rounded-md border border-border bg-surface px-2 text-sm" type="number" [value]="val()" (input)="setVal($event)" />
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="add()">Insert</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="root.set(seed())">Reset</button>
      </div>
      <svg viewBox="0 0 400 240" class="h-56 w-full">
        @for (n of nodes(); track 'e' + n.k) {
          @if (parentOf(n); as p) {
            <line [attr.x1]="p.x" [attr.y1]="p.y" [attr.x2]="n.x" [attr.y2]="n.y" class="stroke-border-strong" stroke-width="1.5" />
          }
        }
        @for (n of nodes(); track n.k) {
          <g>
            <circle [attr.cx]="n.x" [attr.cy]="n.y" r="14" class="fill-surface-2 stroke-border" />
            <text [attr.x]="n.x" [attr.y]="n.y + 4" text-anchor="middle" class="fill-fg" font-size="11">{{ n.k }}</text>
          </g>
        }
      </svg>
    </div>
  `,
})
export class BstExplorer {
  readonly val = signal(13);
  readonly root = signal<TNode>(SEED.reduce((n, k) => insert(n, k), undefined as unknown as TNode));
  readonly nodes = computed(() => {
    const raw = layout(this.root(), 200, 28, 90);
    const uniq = new Map<number, (typeof raw)[0]>();
    for (const n of raw) uniq.set(n.k, n);
    return [...uniq.values()];
  });
  readonly byK = computed(() => new Map(this.nodes().map((n) => [n.k, n])));
  insertNode = insert;
  seed() {
    return SEED.reduce((n, k) => insert(n, k), undefined as unknown as TNode);
  }
  setVal(e: Event) {
    this.val.set(Number((e.target as HTMLInputElement).value));
  }
  add() {
    this.root.update((r) => insert(r, this.val()));
  }
  parentOf(n: { p?: number }) {
    return n.p == null ? undefined : this.byK().get(n.p);
  }
}
