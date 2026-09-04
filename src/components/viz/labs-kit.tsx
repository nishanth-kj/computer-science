"use client";

import { useMemo, useState } from "react";
import { SimShell } from "./sim-shell";
import { useSim } from "./use-sim";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function StackQueue() {
  const [stack, setStack] = useState<number[]>([3, 1, 4]);
  const [queue, setQueue] = useState<number[]>([1, 2, 3]);
  const [n, setN] = useState(7);
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="mb-2 text-sm font-medium">Stack — LIFO</p>
        <div className="mb-3 flex min-h-32 flex-col-reverse gap-1">
          {stack.map((x, i) => (
            <div key={i} className="rounded-sm bg-surface-2 px-3 py-1 text-center font-mono text-sm">
              {x}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => setStack((s) => [...s, n])}>
            Push {n}
          </Button>
          <Button size="sm" variant="outline" onClick={() => setStack((s) => s.slice(0, -1))}>
            Pop
          </Button>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="mb-2 text-sm font-medium">Queue — FIFO</p>
        <div className="mb-3 flex min-h-32 items-center gap-1 overflow-x-auto">
          {queue.map((x, i) => (
            <div key={i} className="rounded-sm bg-surface-2 px-3 py-1 font-mono text-sm">
              {x}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => setQueue((q) => [...q, n])}>
            Enqueue {n}
          </Button>
          <Button size="sm" variant="outline" onClick={() => setQueue((q) => q.slice(1))}>
            Dequeue
          </Button>
        </div>
      </div>
      <label className="sm:col-span-2 flex items-center gap-2 text-sm text-muted">
        Next value
        <Input
          className="h-8 w-20"
          type="number"
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export function HashCollisions() {
  const [mode, setMode] = useState<"chain" | "probe">("chain");
  const [keys, setKeys] = useState<string[]>(["cat", "car", "dog", "cab"]);
  const [input, setInput] = useState("arc");
  const m = 5;
  const hash = (k: string) =>
    k.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % m;
  const buckets: string[][] = Array.from({ length: m }, () => []);
  if (mode === "chain") {
    for (const k of keys) buckets[hash(k)].push(k);
  } else {
    const table: (string | null)[] = Array(m).fill(null);
    for (const k of keys) {
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
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="mb-3 flex flex-wrap gap-2">
        <select
          className="h-8 rounded-sm border border-border bg-bg px-2 text-xs"
          value={mode}
          onChange={(e) => setMode(e.target.value as "chain" | "probe")}
        >
          <option value="chain">Chaining</option>
          <option value="probe">Linear probing</option>
        </select>
        <Input className="h-8 w-28" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button size="sm" onClick={() => input && setKeys((k) => [...k, input])}>
          Insert
        </Button>
        <Button size="sm" variant="outline" onClick={() => setKeys(["cat", "car", "dog", "cab"])}>
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {buckets.map((b, i) => (
          <div key={i} className="min-h-24 rounded-md border border-border bg-bg p-2">
            <p className="font-mono text-[11px] text-muted">#{i}</p>
            {b.map((k) => (
              <p key={k} className="font-mono text-xs text-fg">
                {k}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
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
const E: [string, string][] = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "E"],
  ["D", "F"],
  ["E", "F"],
  ["B", "C"],
];

function adj() {
  const m: Record<string, string[]> = {};
  for (const n of G) m[n.id] = [];
  for (const [a, b] of E) {
    m[a].push(b);
    m[b].push(a);
  }
  return m;
}

function walk(kind: "bfs" | "dfs") {
  const g = adj();
  const order: string[] = [];
  const seen = new Set<string>();
  if (kind === "bfs") {
    const q = ["A"];
    seen.add("A");
    while (q.length) {
      const u = q.shift()!;
      order.push(u);
      for (const v of g[u])
        if (!seen.has(v)) {
          seen.add(v);
          q.push(v);
        }
    }
  } else {
    const rec = (u: string) => {
      seen.add(u);
      order.push(u);
      for (const v of g[u]) if (!seen.has(v)) rec(v);
    };
    rec("A");
  }
  return order;
}

export function GraphSearch() {
  const [kind, setKind] = useState<"bfs" | "dfs">("bfs");
  const order = useMemo(() => walk(kind), [kind]);
  const sim = useSim(order.length - 1);
  const active = new Set(order.slice(0, sim.step + 1));
  const current = order[sim.step];
  return (
    <SimShell
      title="Graph search"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
      extra={
        <select
          className="h-8 rounded-sm border border-border bg-bg px-2 text-xs"
          value={kind}
          onChange={(e) => {
            setKind(e.target.value as "bfs" | "dfs");
            sim.reset();
          }}
        >
          <option value="bfs">BFS</option>
          <option value="dfs">DFS</option>
        </select>
      }
    >
      <svg viewBox="0 0 380 150" className="h-40 w-full">
        {E.map(([a, b]) => {
          const na = G.find((n) => n.id === a)!;
          const nb = G.find((n) => n.id === b)!;
          return (
            <line
              key={a + b}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              className="stroke-border-strong"
              strokeWidth="2"
            />
          );
        })}
        {G.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="16"
              className={cn(
                n.id === current ? "fill-primary" : active.has(n.id) ? "fill-ok" : "fill-surface-2",
              )}
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              className={n.id === current ? "fill-primary-fg" : "fill-fg"}
              fontSize="12"
            >
              {n.id}
            </text>
          </g>
        ))}
      </svg>
      <p className="font-mono text-xs text-muted">order: {order.slice(0, sim.step + 1).join(" → ")}</p>
    </SimShell>
  );
}

export function DijkstraViz() {
  const distFrames = [
    { A: 0, B: 4, C: 2, D: Infinity, E: Infinity, F: Infinity, at: "A" },
    { A: 0, B: 4, C: 2, D: Infinity, E: 5, F: Infinity, at: "C" },
    { A: 0, B: 4, C: 2, D: 7, E: 5, F: Infinity, at: "B" },
    { A: 0, B: 4, C: 2, D: 7, E: 5, F: 9, at: "E" },
    { A: 0, B: 4, C: 2, D: 7, E: 5, F: 9, at: "D" },
    { A: 0, B: 4, C: 2, D: 7, E: 5, F: 9, at: "F" },
  ];
  const sim = useSim(distFrames.length - 1);
  const f = distFrames[sim.step];
  return (
    <SimShell
      title="Dijkstra from A"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="flex flex-wrap gap-2">
        {Object.entries(f)
          .filter(([k]) => k !== "at")
          .map(([k, v]) => (
            <div
              key={k}
              className={cn(
                "rounded-md border px-3 py-2 font-mono text-sm",
                f.at === k ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg",
              )}
            >
              {k}: {v === Infinity ? "∞" : v}
            </div>
          ))}
      </div>
      <p className="mt-3 text-sm text-muted">Settling {f.at}. Nonnegative edges, greedy frontier.</p>
    </SimShell>
  );
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

export function BstExplorer() {
  const [root, setRoot] = useState<TNode>(() => [8, 3, 10, 1, 6, 14, 4, 7].reduce((n, k) => insert(n, k), undefined as unknown as TNode));
  const [val, setVal] = useState(13);
  const nodes = useMemo(() => {
    const raw = layout(root, 200, 28, 90);
    const uniq = new Map<number, (typeof raw)[0]>();
    for (const n of raw) uniq.set(n.k, n);
    return [...uniq.values()];
  }, [root]);
  const byK = new Map(nodes.map((n) => [n.k, n]));
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="mb-2 flex gap-2">
        <Input className="h-8 w-20" type="number" value={val} onChange={(e) => setVal(Number(e.target.value))} />
        <Button size="sm" onClick={() => setRoot((r) => insert(r, val))}>
          Insert
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setRoot([8, 3, 10, 1, 6, 14, 4, 7].reduce((n, k) => insert(n, k), undefined as unknown as TNode))}
        >
          Reset
        </Button>
      </div>
      <svg viewBox="0 0 400 240" className="h-56 w-full">
        {nodes.map((n) =>
          n.p != null && byK.get(n.p) ? (
            <line
              key={"e" + n.k}
              x1={byK.get(n.p)!.x}
              y1={byK.get(n.p)!.y}
              x2={n.x}
              y2={n.y}
              className="stroke-border-strong"
              strokeWidth="1.5"
            />
          ) : null,
        )}
        {nodes.map((n) => (
          <g key={n.k}>
            <circle cx={n.x} cy={n.y} r="14" className="fill-surface-2 stroke-border" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" className="fill-fg" fontSize="11">
              {n.k}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const JOBS = [
  { id: "P1", burst: 5, arrival: 0, color: "bg-layer-app" },
  { id: "P2", burst: 3, arrival: 1, color: "bg-layer-trans" },
  { id: "P3", burst: 8, arrival: 2, color: "bg-layer-net" },
  { id: "P4", burst: 2, arrival: 3, color: "bg-layer-dl" },
];

function schedule(kind: "fcfs" | "sjf" | "rr", quantum: number) {
  const slots: { id: string; t: number }[] = [];
  if (kind === "fcfs") {
    let t = 0;
    for (const j of JOBS) {
      t = Math.max(t, j.arrival);
      for (let k = 0; k < j.burst; k++) slots.push({ id: j.id, t: t++ });
    }
  } else if (kind === "sjf") {
    const left = JOBS.map((j) => ({ ...j, rem: j.burst }));
    let t = 0;
    while (left.some((j) => j.rem > 0)) {
      const ready = left.filter((j) => j.arrival <= t && j.rem > 0).sort((a, b) => a.rem - b.rem);
      if (!ready.length) {
        t++;
        continue;
      }
      const j = ready[0];
      slots.push({ id: j.id, t: t++ });
      j.rem--;
    }
  } else {
    const left = JOBS.map((j) => ({ ...j, rem: j.burst }));
    let t = 0;
    const q: typeof left = [];
    const inq = new Set<string>();
    while (left.some((j) => j.rem > 0)) {
      for (const j of left) {
        if (j.arrival === t && !inq.has(j.id) && j.rem > 0) {
          q.push(j);
          inq.add(j.id);
        }
      }
      if (!q.length) {
        t++;
        continue;
      }
      const j = q.shift()!;
      inq.delete(j.id);
      const run = Math.min(quantum, j.rem);
      for (let k = 0; k < run; k++) {
        slots.push({ id: j.id, t: t++ });
        j.rem--;
        for (const o of left) {
          if (o.arrival === t && !inq.has(o.id) && o.rem > 0 && o.id !== j.id) {
            q.push(o);
            inq.add(o.id);
          }
        }
      }
      if (j.rem > 0) {
        q.push(j);
        inq.add(j.id);
      }
    }
  }
  return slots;
}

export function CpuScheduler() {
  const [kind, setKind] = useState<"fcfs" | "sjf" | "rr">("rr");
  const [q, setQ] = useState(2);
  const slots = useMemo(() => schedule(kind, q), [kind, q]);
  const sim = useSim(slots.length - 1, 4);
  const shown = slots.slice(0, sim.step + 1);
  return (
    <SimShell
      title="CPU scheduler"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
      extra={
        <>
          <select
            className="h-8 rounded-sm border border-border bg-bg px-2 text-xs"
            value={kind}
            onChange={(e) => {
              setKind(e.target.value as "fcfs" | "sjf" | "rr");
              sim.reset();
            }}
          >
            <option value="fcfs">FCFS</option>
            <option value="sjf">SJF (preemptive)</option>
            <option value="rr">Round robin</option>
          </select>
          {kind === "rr" ? (
            <label className="flex items-center gap-1 text-[11px] text-muted">
              q
              <input
                type="number"
                min={1}
                max={5}
                value={q}
                onChange={(e) => setQ(Number(e.target.value))}
                className="h-8 w-12 rounded-sm border border-border bg-bg px-1"
              />
            </label>
          ) : null}
        </>
      }
    >
      <div className="flex h-12 overflow-hidden rounded-md border border-border">
        {shown.map((s, i) => {
          const job = JOBS.find((j) => j.id === s.id)!;
          return (
            <div
              key={i}
              className={cn("flex flex-1 items-center justify-center font-mono text-[10px] text-[#0c0e11]", job.color)}
              title={`${s.id} @ t=${s.t}`}
            >
              {s.id}
            </div>
          );
        })}
      </div>
      <p className="mt-2 font-mono text-xs text-muted">t = {sim.step}</p>
    </SimShell>
  );
}

export function ProcessStates() {
  const states = ["new", "ready", "running", "waiting", "terminated"] as const;
  const events = [
    { to: 1, label: "admitted" },
    { to: 2, label: "scheduler dispatch" },
    { to: 3, label: "I/O or wait" },
    { to: 1, label: "I/O done" },
    { to: 2, label: "dispatch again" },
    { to: 4, label: "exit" },
  ];
  const sim = useSim(events.length - 1);
  const at = events[sim.step].to;
  return (
    <SimShell
      title="Process state machine"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="flex flex-wrap gap-2">
        {states.map((s, i) => (
          <div
            key={s}
            className={cn(
              "min-h-11 rounded-md border px-3 py-2 text-sm capitalize",
              i === at ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg",
            )}
          >
            {s}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">{events[sim.step].label}</p>
    </SimShell>
  );
}

export function PagingSim() {
  const refs = [0, 2, 1, 3, 0, 4, 2];
  const sim = useSim(refs.length - 1);
  const frames = 3;
  const mem: number[] = [];
  const faults: boolean[] = [];
  for (let i = 0; i <= sim.step; i++) {
    const p = refs[i];
    if (mem.includes(p)) {
      faults.push(false);
    } else {
      faults.push(true);
      if (mem.length < frames) mem.push(p);
      else mem[i % frames] = p;
    }
  }
  return (
    <SimShell
      title="Paging (3 frames, FIFO-ish fill)"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <p className="mb-2 font-mono text-xs text-muted">refs: {refs.join(" ")} — access {refs[sim.step]}</p>
      <div className="flex gap-2">
        {Array.from({ length: frames }, (_, i) => (
          <div key={i} className="flex h-16 w-16 items-center justify-center rounded-md border border-border bg-bg font-mono text-lg">
            {mem[i] ?? "—"}
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted">{faults[sim.step] ? "page fault" : "hit"}</p>
    </SimShell>
  );
}

export function PageReplacement() {
  const refs = [7, 0, 1, 2, 0, 3, 0, 4];
  const [algo, setAlgo] = useState<"fifo" | "lru">("lru");
  function run(kind: "fifo" | "lru") {
    const frames: number[] = [];
    const hist: { frames: number[]; fault: boolean; ref: number }[] = [];
    const q: number[] = [];
    for (const r of refs) {
      let fault = false;
      if (!frames.includes(r)) {
        fault = true;
        if (frames.length < 3) {
          frames.push(r);
          q.push(r);
        } else if (kind === "fifo") {
          const victim = q.shift()!;
          const i = frames.indexOf(victim);
          frames[i] = r;
          q.push(r);
        } else {
          const victim = q.shift()!;
          const i = frames.indexOf(victim);
          frames[i] = r;
          q.push(r);
        }
      } else if (kind === "lru") {
        q.splice(q.indexOf(r), 1);
        q.push(r);
      }
      hist.push({ frames: frames.slice(), fault, ref: r });
    }
    return hist;
  }
  const hist = useMemo(() => run(algo), [algo]);
  const sim = useSim(hist.length - 1);
  const h = hist[sim.step];
  return (
    <SimShell
      title="Page replacement"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
      extra={
        <select
          className="h-8 rounded-sm border border-border bg-bg px-2 text-xs"
          value={algo}
          onChange={(e) => {
            setAlgo(e.target.value as "fifo" | "lru");
            sim.reset();
          }}
        >
          <option value="fifo">FIFO</option>
          <option value="lru">LRU</option>
        </select>
      }
    >
      <p className="font-mono text-xs text-muted">
        access {h.ref} — {h.fault ? "fault" : "hit"}
      </p>
      <div className="mt-2 flex gap-2">
        {h.frames.map((f, i) => (
          <div key={i} className="flex h-14 w-14 items-center justify-center rounded-md border border-border bg-bg font-mono">
            {f}
          </div>
        ))}
      </div>
    </SimShell>
  );
}

export function DeadlockSim() {
  const steps = [
    "P1 holds R1",
    "P2 holds R2",
    "P1 requests R2 — waits",
    "P2 requests R1 — cycle",
    "Deadlock detected",
    "Abort P2, R2 freed",
    "P1 acquires R2, finishes",
  ];
  const sim = useSim(steps.length - 1);
  return (
    <SimShell
      title="Deadlock"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="grid grid-cols-2 gap-3">
        <div className={cn("rounded-lg border p-3", sim.step >= 4 && sim.step < 6 ? "border-danger" : "border-border")}>
          <p className="text-sm font-medium">P1</p>
          <p className="text-xs text-muted">{sim.step >= 0 ? "has R1" : ""} {sim.step >= 2 && sim.step < 6 ? "wants R2" : ""}</p>
        </div>
        <div className={cn("rounded-lg border p-3", sim.step >= 4 && sim.step < 6 ? "border-danger" : "border-border")}>
          <p className="text-sm font-medium">P2</p>
          <p className="text-xs text-muted">{sim.step >= 1 && sim.step < 6 ? "has R2" : ""} {sim.step >= 3 && sim.step < 6 ? "wants R1" : ""}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">{steps[sim.step]}</p>
    </SimShell>
  );
}

const PIPE = ["Fetch", "Decode", "Execute", "Memory", "Writeback"];

export function CpuPipelineViz() {
  const instr = ["ld r1", "add r2", "st r1", "bne", "nop"];
  const sim = useSim(8, 3);
  return (
    <SimShell
      title="5-stage pipeline"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="grid grid-cols-5 gap-1">
        {PIPE.map((p, i) => {
          const idx = sim.step - i;
          return (
            <div key={p} className="rounded-md border border-border bg-bg p-2">
              <p className="font-mono text-[10px] text-muted">{p}</p>
              <p className="text-sm">{idx >= 0 && idx < instr.length ? instr[idx] : "—"}</p>
            </div>
          );
        })}
      </div>
    </SimShell>
  );
}

export function LoadBalancerViz() {
  const [alive, setAlive] = useState([true, true, true]);
  const [counts, setCounts] = useState([0, 0, 0]);
  const send = () => {
    const pool = alive.map((a, i) => (a ? i : -1)).filter((i) => i >= 0);
    if (!pool.length) return;
    const i = pool.reduce((best, i) => (counts[i] < counts[best] ? i : best), pool[0]);
    setCounts((c) => c.map((n, k) => (k === i ? n + 1 : n)));
  };
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="mb-3 flex gap-2">
        <Button size="sm" onClick={send}>
          Send request
        </Button>
        <Button size="sm" variant="outline" onClick={() => { setCounts([0, 0, 0]); setAlive([true, true, true]); }}>
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {counts.map((n, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setAlive((a) => a.map((x, k) => (k === i ? !x : x)))}
            className={cn(
              "min-h-20 rounded-lg border p-3 text-left",
              alive[i] ? "border-border bg-bg" : "border-danger bg-danger/10",
            )}
          >
            <p className="text-sm font-medium">backend {i + 1}</p>
            <p className="font-mono text-xs text-muted">{alive[i] ? `${n} req` : "down"}</p>
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">Least-connections. Click a backend to kill or revive it.</p>
    </div>
  );
}

export function ConsistentHashViz() {
  const [nodes, setNodes] = useState([2, 7, 14]);
  const ring = 18;
  const keys = [1, 4, 8, 11, 16];
  const owner = (k: number) => {
    const sorted = [...nodes].sort((a, b) => a - b);
    return sorted.find((n) => n >= k) ?? sorted[0];
  };
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="mb-3 flex gap-2">
        <Button size="sm" onClick={() => setNodes((n) => n.length < 6 ? [...n, (n[n.length - 1] + 3) % ring] : n)}>
          Add node
        </Button>
        <Button size="sm" variant="outline" onClick={() => setNodes((n) => n.slice(0, -1))}>
          Remove
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setNodes([2, 7, 14])}>
          Reset
        </Button>
      </div>
      <div className="relative mx-auto size-56">
        {Array.from({ length: ring }, (_, i) => {
          const ang = (i / ring) * Math.PI * 2 - Math.PI / 2;
          const x = 104 + Math.cos(ang) * 88;
          const y = 104 + Math.sin(ang) * 88;
          const isNode = nodes.includes(i);
          const isKey = keys.includes(i);
          return (
            <div
              key={i}
              className={cn(
                "absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                isNode ? "size-5 bg-primary" : isKey ? "bg-ok" : "bg-border",
              )}
              style={{ left: x, top: y }}
              title={isNode ? `node ${i}` : isKey ? `key ${i} → ${owner(i)}` : String(i)}
            />
          );
        })}
      </div>
      <ul className="mt-2 font-mono text-xs text-muted">
        {keys.map((k) => (
          <li key={k}>
            key {k} → node {owner(k)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LeaderElection() {
  const steps = [
    { leader: 0, dead: -1, note: "A is leader, B and C follow" },
    { leader: 0, dead: 0, note: "A crashes. Heartbeats stop." },
    { leader: 1, dead: 0, note: "B times out, starts election, wins." },
    { leader: 1, dead: 0, note: "Clients now talk to B." },
  ];
  const sim = useSim(steps.length - 1);
  const s = steps[sim.step];
  const names = ["A", "B", "C"];
  return (
    <SimShell
      title="Leader election"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="flex gap-3">
        {names.map((n, i) => (
          <div
            key={n}
            className={cn(
              "min-h-20 flex-1 rounded-lg border p-3",
              s.dead === i ? "border-danger opacity-50" : s.leader === i ? "border-primary bg-primary/10" : "border-border",
            )}
          >
            <p className="font-medium">{n}</p>
            <p className="text-xs text-muted">{s.dead === i ? "down" : s.leader === i ? "leader" : "follower"}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">{s.note}</p>
    </SimShell>
  );
}

export function CacheSim() {
  const [assoc, setAssoc] = useState<1 | 2>(1);
  const addrs = [0, 8, 16, 0, 24, 8];
  const sim = useSim(addrs.length - 1);
  const sets = 4;
  const cache: number[][] = Array.from({ length: sets }, () => []);
  let hits = 0;
  let lastHit = false;
  for (let i = 0; i <= sim.step; i++) {
    const a = addrs[i];
    const set = (a / 8) % sets;
    const line = cache[set];
    if (line.includes(a)) {
      hits++;
      lastHit = true;
    } else {
      lastHit = false;
      if (line.length >= assoc) line.shift();
      line.push(a);
    }
  }
  return (
    <SimShell
      title="Cache"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
      extra={
        <select
          className="h-8 rounded-sm border border-border bg-bg px-2 text-xs"
          value={assoc}
          onChange={(e) => {
            setAssoc(Number(e.target.value) as 1 | 2);
            sim.reset();
          }}
        >
          <option value={1}>direct-mapped</option>
          <option value={2}>2-way</option>
        </select>
      }
    >
      <p className="font-mono text-xs text-muted">
        addr {addrs[sim.step]} — {lastHit ? "hit" : "miss"} ({hits} hits)
      </p>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {cache.map((line, i) => (
          <div key={i} className="rounded-md border border-border bg-bg p-2 font-mono text-xs">
            set {i}: {line.join(", ") || "—"}
          </div>
        ))}
      </div>
    </SimShell>
  );
}

export function RoutingSim() {
  const table = [
    { prefix: "10.0.0.0/16", nh: "R1" },
    { prefix: "10.1.0.0/16", nh: "R2" },
    { prefix: "10.1.4.0/24", nh: "R3" },
    { prefix: "0.0.0.0/0", nh: "ISP" },
  ];
  const dests = ["10.1.4.22", "10.1.9.1", "10.0.3.4", "8.8.8.8"];
  const sim = useSim(dests.length - 1);
  const dest = dests[sim.step];
  const pick = dest.startsWith("10.1.4") ? "R3" : dest.startsWith("10.1") ? "R2" : dest.startsWith("10.0") ? "R1" : "ISP";
  return (
    <SimShell
      title="Longest-prefix match"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <p className="mb-2 text-sm">
        Packet to <span className="font-mono">{dest}</span> → <span className="font-medium">{pick}</span>
      </p>
      <table className="w-full text-left text-sm">
        <thead className="text-muted">
          <tr>
            <th className="py-1">prefix</th>
            <th>next hop</th>
          </tr>
        </thead>
        <tbody>
          {table.map((r) => (
            <tr key={r.prefix} className={r.nh === pick ? "bg-surface-2" : ""}>
              <td className="py-1 font-mono text-xs">{r.prefix}</td>
              <td>{r.nh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SimShell>
  );
}

export function BPlusTreeViz() {
  const [keys, setKeys] = useState([2, 5, 8, 11, 14, 17]);
  const [n, setN] = useState(19);
  const leaves = [];
  for (let i = 0; i < keys.length; i += 3) leaves.push(keys.slice(i, i + 3));
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="mb-3 flex gap-2">
        <Input className="h-8 w-20" type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
        <Button
          size="sm"
          onClick={() => setKeys((k) => [...k, n].sort((a, b) => a - b))}
        >
          Insert
        </Button>
        <Button size="sm" variant="outline" onClick={() => setKeys([2, 5, 8, 11, 14, 17])}>
          Reset
        </Button>
      </div>
      <div className="flex justify-center gap-2">
        {leaves.map((leaf, i) => (
          <div key={i} className="rounded-md border border-border bg-bg px-3 py-2 font-mono text-xs">
            {leaf.join(" · ")}
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] text-muted">Leaves of a B+ tree (order ~3). Insert and watch splits conceptually group by threes.</p>
    </div>
  );
}

export function TransactionIso() {
  const levels = ["read uncommitted", "read committed", "repeatable read", "serializable"] as const;
  const [level, setLevel] = useState<(typeof levels)[number]>("read committed");
  const sim = useSim(4);
  const dirty = level === "read uncommitted" && sim.step >= 1 && sim.step < 3;
  return (
    <SimShell
      title="Isolation"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
      extra={
        <select
          className="h-8 rounded-sm border border-border bg-bg px-2 text-xs"
          value={level}
          onChange={(e) => setLevel(e.target.value as (typeof levels)[number])}
        >
          {levels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      }
    >
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md border border-border p-3">
          <p className="font-medium">T1</p>
          <p className="text-muted">{["BEGIN", "UPDATE bal=0", "… still open", "ROLLBACK", "done"][sim.step]}</p>
        </div>
        <div className="rounded-md border border-border p-3">
          <p className="font-medium">T2 reads bal</p>
          <p className={dirty ? "text-danger" : "text-muted"}>
            {sim.step === 0 ? "—" : dirty ? "0 (dirty read)" : "100 (committed snapshot)"}
          </p>
        </div>
      </div>
    </SimShell>
  );
}

export function NeuralNetViz() {
  const sim = useSim(4);
  const labels = ["input x", "z = Wx+b", "a = σ(z)", "loss vs y", "backprop, W ← W − η∇W"];
  return (
    <SimShell
      title="Tiny network"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="flex items-center justify-center gap-6 py-4">
        {[1, 3, 1].map((n, layer) => (
          <div key={layer} className="flex flex-col gap-2">
            {Array.from({ length: n }, (_, i) => (
              <div
                key={i}
                className={cn(
                  "size-8 rounded-full border",
                  sim.step >= layer ? "border-primary bg-primary/30" : "border-border bg-bg",
                )}
              />
            ))}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted">{labels[sim.step]}</p>
    </SimShell>
  );
}

export function DfaSim() {
  const [s, setS] = useState("010");
  const machine = [
    { q: 0, "0": 0, "1": 1 },
    { q: 1, "0": 2, "1": 1 },
    { q: 2, "0": 0, "1": 1 },
  ];
  const accept = new Set([2]);
  const path: number[] = [0];
  for (const ch of s) {
    const last = path[path.length - 1];
    const row = machine[last] as { q: number; "0": number; "1": number };
    path.push(ch === "0" || ch === "1" ? row[ch] : last);
  }
  const sim = useSim(Math.max(0, path.length - 1));
  const q = path[Math.min(sim.step, path.length - 1)];
  return (
    <SimShell
      title="DFA: strings that end in 01"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
      extra={
        <Input
          className="h-8 w-28 font-mono"
          value={s}
          onChange={(e) => {
            setS(e.target.value.replace(/[^01]/g, ""));
            sim.reset();
          }}
        />
      }
    >
      <div className="flex gap-2">
        {[0, 1, 2].map((st) => (
          <div
            key={st}
            className={cn(
              "flex size-14 items-center justify-center rounded-full border text-sm",
              q === st ? "border-primary bg-primary text-primary-fg" : "border-border",
              accept.has(st) && "ring-2 ring-ok ring-offset-2 ring-offset-surface",
            )}
          >
            q{st}
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-xs text-muted">
        input {s} — {accept.has(path[path.length - 1]) ? "ACCEPT" : "REJECT"}
      </p>
    </SimShell>
  );
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

export function CompilerExplorer() {
  const [src, setSrc] = useState("let x = 1 + 2 * 3");
  const tokens = lex(src);
  let ast = "";
  try {
    ast = parseExpr(tokens);
  } catch {
    ast = "(error)";
  }
  const ir = ast.replace(/^\(let (\w+) /, "x = ").replace(/\)$/, "").replace(/\((\W) /g, "$1 ");
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <textarea
        className="mb-3 h-20 w-full rounded-md border border-border bg-bg p-2 font-mono text-sm"
        value={src}
        onChange={(e) => setSrc(e.target.value)}
        aria-label="Source"
      />
      <p className="mb-1 text-[11px] text-muted">Tokens</p>
      <div className="flex flex-wrap gap-1">
        {tokens.map((t, i) => (
          <span key={i} className="rounded-sm bg-bg px-2 py-0.5 font-mono text-[11px]">
            {t.kind}:{t.value}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-muted">AST</p>
      <pre className="overflow-x-auto font-mono text-[11px] text-muted">{ast}</pre>
      <p className="mt-3 text-[11px] text-muted">IR (three-address-ish)</p>
      <pre className="overflow-x-auto font-mono text-[11px] text-muted">{ir}</pre>
    </div>
  );
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
  let rows: Record<string, string | number>[] =
    from === "users" ? USERS.map((u) => ({ ...u })) : from === "orders" ? ORDERS.map((o) => ({ ...o })) : [];
  if (!rows.length) return { error: "Unknown table. Try users or orders." };
  if (m[3]) {
    const other = m[3].toLowerCase();
    const right = other === "users" ? USERS : ORDERS;
    const la = m[5];
    const rb = m[7];
    const joined: Record<string, string | number>[] = [];
    for (const L of rows) {
      for (const R of right) {
        if (String((L as never)[la]) === String((R as never)[rb])) {
          joined.push({ ...L, ...R, id: L.id });
        }
      }
    }
    rows = joined;
  }
  if (m[8]) {
    const col = m[8];
    const val = m[9];
    rows = rows.filter((r) => String((r as never)[col]) === val);
  }
  const headers = cols[0] === "*" ? Object.keys(rows[0] ?? {}) : cols;
  return {
    headers,
    rows: rows.map((r) => headers.map((h) => String((r as never)[h] ?? ""))),
  };
}

export function SqlPlayground() {
  const [q, setQ] = useState("SELECT name, country FROM users");
  const [out, setOut] = useState(() => runSql("SELECT name, country FROM users"));
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <textarea
        className="h-20 w-full rounded-md border border-border bg-bg p-2 font-mono text-sm"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className="mt-2 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => setOut(runSql(q))}>
          Run
        </Button>
        {[
          ["SELECT * FROM users", "All users"],
          ["SELECT name FROM users WHERE country = 'UK'", "Filter UK"],
          ["SELECT name, amount FROM users JOIN orders ON users.id = orders.user_id", "Join orders"],
        ].map(([s, label]) => (
          <Button key={s} size="sm" variant="ghost" onClick={() => { setQ(s); setOut(runSql(s)); }}>
            {label}
          </Button>
        ))}
      </div>
      {"error" in out ? (
        <p className="mt-3 text-sm text-danger">{out.error}</p>
      ) : (
        <table className="mt-3 w-full text-left text-sm">
          <thead>
            <tr className="text-muted">
              {out.headers.map((h) => (
                <th key={h} className="py-1 pr-3 font-mono text-xs">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {out.rows.map((r, i) => (
              <tr key={i} className="border-t border-border">
                {r.map((c, j) => (
                  <td key={j} className="py-1 pr-3">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

type Fs = { [name: string]: string | Fs };

const FS0: Fs = {
  home: {
    user: {
      "readme.txt": "Welcome to the CS terminal.\nTry ls, cd, cat, grep, pwd.",
      notes: { "osi.txt": "Seven layers. Encapsulation going down." },
    },
  },
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

export function LinuxTerminal() {
  const [cwd, setCwd] = useState<string[]>(["home", "user"]);
  const [lines, setLines] = useState<string[]>(["CS terminal. Type help."]);
  const [cmd, setCmd] = useState("");
  const run = (raw: string) => {
    const [c, ...args] = raw.trim().split(/\s+/);
    const out: string[] = [`$ ${raw}`];
    const loc = () => "/" + cwd.join("/");
    if (!c || c === "help")
      out.push("help ls cd pwd cat echo mkdir grep whoami uname date ps");
    else if (c === "pwd") out.push(loc());
    else if (c === "whoami") out.push("user");
    else if (c === "uname") out.push("Linux csref 6.8.0");
    else if (c === "date") out.push(new Date().toUTCString());
    else if (c === "ps") out.push("PID TTY CMD\n  1 ?   init\n 42 pts/0 bash");
    else if (c === "ls") {
      const node = getPath(FS0, cwd);
      if (node && typeof node !== "string") out.push(Object.keys(node).join("  "));
      else out.push("not a directory");
    } else if (c === "cd") {
      const t = args[0] ?? "/home/user";
      let next = [...cwd];
      if (t.startsWith("/")) next = t.split("/").filter(Boolean);
      else if (t === "..") next = next.slice(0, -1);
      else next = [...next, ...t.split("/").filter(Boolean)];
      const node = getPath(FS0, next);
      if (node && typeof node !== "string") setCwd(next);
      else out.push("cd: no such directory");
    } else if (c === "cat") {
      const node = getPath(FS0, [...cwd, args[0] ?? ""]);
      if (typeof node === "string") out.push(node);
      else out.push("cat: not a file");
    } else if (c === "echo") out.push(args.join(" "));
    else if (c === "grep") {
      const node = getPath(FS0, [...cwd, args[1] ?? ""]);
      if (typeof node === "string")
        out.push(
          ...node
            .split("\n")
            .filter((l) => l.includes(args[0] ?? "")),
        );
      else out.push("grep: not a file");
    } else out.push(`${c}: command not found`);
    setLines((L) => [...L, ...out].slice(-80));
  };
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0c0e11] p-3 font-mono text-[13px] text-[#e8eaee]">
      <div className="mb-2 max-h-56 overflow-y-auto whitespace-pre-wrap">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (cmd.trim()) run(cmd);
          setCmd("");
        }}
        className="flex gap-2"
      >
        <span className="text-ok">user@csref</span>
        <input
          className="min-w-0 flex-1 bg-transparent outline-none"
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          aria-label="Terminal input"
        />
      </form>
    </div>
  );
}
