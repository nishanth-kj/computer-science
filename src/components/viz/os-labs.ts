import { Component, computed, signal } from "@angular/core";
import { useSim } from "../../lib/sim";
import { SimShell } from "./sim-shell";

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

@Component({
  selector: "cs-cpu-sched",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="CPU scheduler" [sim]="sim">
      <select extra class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="kind()" (change)="setKind($any($event.target).value)">
        <option value="fcfs">FCFS</option>
        <option value="sjf">SJF (preemptive)</option>
        <option value="rr">Round robin</option>
      </select>
      <div class="flex h-12 overflow-hidden rounded-md border border-border">
        @for (s of shown(); track $index) {
          <div class="flex flex-1 items-center justify-center font-mono text-[10px] text-[#0c0e11]" [class]="job(s.id).color">{{ s.id }}</div>
        }
      </div>
      <p class="mt-2 font-mono text-xs text-muted">t = {{ sim.step() }}</p>
    </cs-sim-shell>
  `,
})
export class CpuScheduler {
  readonly kind = signal<"fcfs" | "sjf" | "rr">("rr");
  readonly q = signal(2);
  readonly slots = computed(() => schedule(this.kind(), this.q()));
  readonly sim = useSim(() => this.slots().length - 1, 4);
  shown() {
    return this.slots().slice(0, this.sim.step() + 1);
  }
  job(id: string) {
    return JOBS.find((j) => j.id === id)!;
  }
  setKind(v: "fcfs" | "sjf" | "rr") {
    this.kind.set(v);
    this.sim.reset();
  }
}

const STATES = ["new", "ready", "running", "waiting", "terminated"] as const;
const EVENTS = [
  { to: 1, label: "admitted" },
  { to: 2, label: "scheduler dispatch" },
  { to: 3, label: "I/O or wait" },
  { to: 1, label: "I/O done" },
  { to: 2, label: "dispatch again" },
  { to: 4, label: "exit" },
];

@Component({
  selector: "cs-process",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Process state machine" [sim]="sim">
      <div class="flex flex-wrap gap-2">
        @for (s of states; track s; let i = $index) {
          <div class="min-h-11 rounded-md border px-3 py-2 text-sm capitalize" [class.border-primary]="i === at()" [class.bg-primary]="i === at()" [class.text-primary-fg]="i === at()" [class.border-border]="i !== at()" [class.bg-bg]="i !== at()">{{ s }}</div>
        }
      </div>
      <p class="mt-3 text-sm text-muted">{{ events[sim.step()].label }}</p>
    </cs-sim-shell>
  `,
})
export class ProcessStates {
  readonly states = STATES;
  readonly events = EVENTS;
  readonly sim = useSim(EVENTS.length - 1);
  at() {
    return EVENTS[this.sim.step()].to;
  }
}

@Component({
  selector: "cs-paging",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Paging (3 frames)" [sim]="sim">
      <p class="mb-2 font-mono text-xs text-muted">refs: {{ refs.join(" ") }} — access {{ refs[sim.step()] }}</p>
      <div class="flex gap-2">
        @for (i of frames; track i) {
          <div class="flex h-16 w-16 items-center justify-center rounded-md border border-border bg-bg font-mono text-lg">{{ frameAt(i) }}</div>
        }
      </div>
      <p class="mt-2 text-sm text-muted">{{ fault() ? "page fault" : "hit" }}</p>
    </cs-sim-shell>
  `,
})
export class PagingSim {
  readonly refs = [0, 2, 1, 3, 0, 4, 2];
  readonly frames = [0, 1, 2];
  readonly sim = useSim(6);
  mem() {
    const mem: number[] = [];
    for (let i = 0; i <= this.sim.step(); i++) {
      const p = this.refs[i];
      if (!mem.includes(p)) {
        if (mem.length < 3) mem.push(p);
        else mem[i % 3] = p;
      }
    }
    return mem;
  }
  frameAt(i: number) {
    const v = this.mem()[i];
    return v === undefined ? "—" : v;
  }
  fault() {
    const mem: number[] = [];
    let last = false;
    for (let i = 0; i <= this.sim.step(); i++) {
      const p = this.refs[i];
      if (mem.includes(p)) last = false;
      else {
        last = true;
        if (mem.length < 3) mem.push(p);
        else mem[i % 3] = p;
      }
    }
    return last;
  }
}

@Component({
  selector: "cs-page-rep",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Page replacement" [sim]="sim">
      <select extra class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="algo()" (change)="setAlgo($any($event.target).value)">
        <option value="fifo">FIFO</option>
        <option value="lru">LRU</option>
      </select>
      <p class="font-mono text-xs text-muted">access {{ h().ref }} — {{ h().fault ? "fault" : "hit" }}</p>
      <div class="mt-2 flex gap-2">
        @for (f of h().frames; track $index) {
          <div class="flex h-14 w-14 items-center justify-center rounded-md border border-border bg-bg font-mono">{{ f }}</div>
        }
      </div>
    </cs-sim-shell>
  `,
})
export class PageReplacement {
  readonly algo = signal<"fifo" | "lru">("lru");
  readonly refs = [7, 0, 1, 2, 0, 3, 0, 4];
  readonly hist = computed(() => {
    const kind = this.algo();
    const frames: number[] = [];
    const hist: { frames: number[]; fault: boolean; ref: number }[] = [];
    const q: number[] = [];
    for (const r of this.refs) {
      let fault = false;
      if (!frames.includes(r)) {
        fault = true;
        if (frames.length < 3) {
          frames.push(r);
          q.push(r);
        } else {
          const victim = q.shift()!;
          frames[frames.indexOf(victim)] = r;
          q.push(r);
        }
      } else if (kind === "lru") {
        q.splice(q.indexOf(r), 1);
        q.push(r);
      }
      hist.push({ frames: frames.slice(), fault, ref: r });
    }
    return hist;
  });
  readonly sim = useSim(() => this.hist().length - 1);
  h() {
    return this.hist()[this.sim.step()];
  }
  setAlgo(v: "fifo" | "lru") {
    this.algo.set(v);
    this.sim.reset();
  }
}

const DEAD = ["P1 holds R1", "P2 holds R2", "P1 requests R2 — waits", "P2 requests R1 — cycle", "Deadlock detected", "Abort P2, R2 freed", "P1 acquires R2, finishes"];

@Component({
  selector: "cs-deadlock",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Deadlock" [sim]="sim">
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg border p-3" [class.border-danger]="sim.step() >= 4 && sim.step() < 6" [class.border-border]="!(sim.step() >= 4 && sim.step() < 6)">
          <p class="text-sm font-medium">P1</p>
          <p class="text-xs text-muted">{{ sim.step() >= 0 ? "has R1" : "" }} {{ sim.step() >= 2 && sim.step() < 6 ? "wants R2" : "" }}</p>
        </div>
        <div class="rounded-lg border p-3" [class.border-danger]="sim.step() >= 4 && sim.step() < 6" [class.border-border]="!(sim.step() >= 4 && sim.step() < 6)">
          <p class="text-sm font-medium">P2</p>
          <p class="text-xs text-muted">{{ sim.step() >= 1 && sim.step() < 6 ? "has R2" : "" }} {{ sim.step() >= 3 && sim.step() < 6 ? "wants R1" : "" }}</p>
        </div>
      </div>
      <p class="mt-3 text-sm text-muted">{{ steps[sim.step()] }}</p>
    </cs-sim-shell>
  `,
})
export class DeadlockSim {
  readonly steps = DEAD;
  readonly sim = useSim(DEAD.length - 1);
}

const PIPE = ["Fetch", "Decode", "Execute", "Memory", "Writeback"];
const INSTR = ["ld r1", "add r2", "st r1", "bne", "nop"];

@Component({
  selector: "cs-cpu-pipe",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="5-stage pipeline" [sim]="sim">
      <div class="grid grid-cols-5 gap-1">
        @for (p of pipe; track p; let i = $index) {
          <div class="rounded-md border border-border bg-bg p-2">
            <p class="font-mono text-[10px] text-muted">{{ p }}</p>
            <p class="text-sm">{{ slot(i) }}</p>
          </div>
        }
      </div>
    </cs-sim-shell>
  `,
})
export class CpuPipelineViz {
  readonly pipe = PIPE;
  readonly sim = useSim(8, 3);
  slot(i: number) {
    const idx = this.sim.step() - i;
    return idx >= 0 && idx < INSTR.length ? INSTR[idx] : "—";
  }
}

@Component({
  selector: "cs-memory",
  template: `
    <div class="overflow-hidden rounded-xl border border-border bg-surface">
      <div class="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <p class="mr-auto text-sm font-medium">Process address space</p>
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="call()">Call</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="ret()">Return</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="alloc()">malloc</button>
        <button type="button" class="h-8 rounded-sm px-3 text-xs hover:bg-surface-2" (click)="freeLast()">free</button>
        <button type="button" class="h-8 rounded-sm px-3 text-xs hover:bg-surface-2" (click)="reset()">Reset</button>
      </div>
      <div class="grid gap-3 p-3 sm:grid-cols-2">
        <div class="flex flex-col gap-1">
          <div class="rounded-lg border border-border bg-bg p-2">
            <p class="text-[11px] font-medium text-fg">Stack (grows down)</p>
            @for (fr of stackView(); track $index; let i = $index) {
              <div class="mt-1 rounded-sm border px-2 py-1 font-mono text-[11px]" [class.border-primary]="i === 0" [class.bg-primary/10]="i === 0" [class.border-border]="i !== 0" [class.bg-bg]="i !== 0">
                <span class="font-medium">{{ fr.name }}</span>
                <span class="text-muted"> · {{ fr.locals.join(", ") }}</span>
              </div>
            }
          </div>
          <div class="rounded-lg border border-border bg-bg p-2">
            <p class="text-[11px] font-medium text-fg">Heap (grows up)</p>
            @for (o of heap(); track o.id) {
              <div class="mt-1 rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]">{{ o.id }}: {{ o.label }}</div>
            }
          </div>
        </div>
        <p class="text-xs leading-relaxed text-muted">Call pushes a frame. Return pops it. malloc adds a heap object whose lifetime is not tied to a frame.</p>
      </div>
    </div>
  `,
})
export class MemoryMap {
  readonly frames = signal([{ name: "main", locals: ["argc", "argv"] }]);
  readonly heap = signal([{ id: "h0", label: "config {}" }]);
  readonly n = signal(1);
  stackView() {
    return [...this.frames()].reverse();
  }
  call() {
    const name = this.n() === 1 ? "parse()" : this.n() === 2 ? "eval()" : `fn${this.n()}()`;
    this.frames.update((f) => [...f, { name, locals: ["i", "tmp"] }]);
    this.n.update((x) => x + 1);
  }
  ret() {
    this.frames.update((f) => (f.length > 1 ? f.slice(0, -1) : f));
  }
  alloc() {
    this.heap.update((h) => [...h, { id: "h" + h.length, label: h.length % 2 ? "buf[64]" : "Node" }]);
  }
  freeLast() {
    this.heap.update((h) => h.slice(0, Math.max(1, h.length - 1)));
  }
  reset() {
    this.frames.set([{ name: "main", locals: ["argc", "argv"] }]);
    this.heap.set([{ id: "h0", label: "config {}" }]);
    this.n.set(1);
  }
}
