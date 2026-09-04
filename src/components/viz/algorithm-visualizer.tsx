"use client";

import { useMemo, useState } from "react";
import { SimShell } from "./sim-shell";
import { useSim } from "./use-sim";
import { cn } from "@/lib/utils";

type Algo = "bubble" | "insertion" | "quick" | "binsearch";

function framesFor(algo: Algo, src: number[]): { arr: number[]; hi: number[]; lo?: number; mid?: number }[] {
  const a = src.slice();
  const frames: { arr: number[]; hi: number[]; lo?: number; mid?: number }[] = [{ arr: a.slice(), hi: [] }];
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
    frames.push({ arr: sorted.slice(), hi: [], lo, mid: -1 });
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      frames.push({ arr: sorted.slice(), hi: [mid], lo, mid });
      if (sorted[mid] === target) break;
      if (sorted[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  frames.push({ arr: (algo === "binsearch" ? src.slice().sort((x, y) => x - y) : a).slice(), hi: [] });
  return frames;
}

const START = [7, 2, 9, 4, 1, 8, 5, 3];

export function AlgorithmVisualizer() {
  const [algo, setAlgo] = useState<Algo>("bubble");
  const frames = useMemo(() => framesFor(algo, START), [algo]);
  const sim = useSim(Math.max(0, frames.length - 1), 4);
  const f = frames[Math.min(sim.step, frames.length - 1)] ?? frames[0];
  const max = Math.max(...START);

  return (
    <SimShell
      title="Array algorithms"
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
            setAlgo(e.target.value as Algo);
            sim.reset();
          }}
        >
          <option value="bubble">Bubble sort</option>
          <option value="insertion">Insertion sort</option>
          <option value="quick">Quicksort</option>
          <option value="binsearch">Binary search</option>
        </select>
      }
    >
      <div className="flex h-40 items-end gap-1">
        {f.arr.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={cn(
                "w-full rounded-sm",
                f.hi.includes(i) ? "bg-primary" : "bg-surface-2",
              )}
              style={{ height: `${(v / max) * 100}%` }}
            />
            <span className="font-mono text-[10px] tabular-nums text-muted">{v}</span>
          </div>
        ))}
      </div>
    </SimShell>
  );
}
