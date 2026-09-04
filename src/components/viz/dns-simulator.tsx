"use client";

import { SimShell } from "./sim-shell";
import { useSim } from "./use-sim";
import { cn } from "@/lib/utils";

const NODES = ["Browser", "Stub / OS", "Resolver", "Root", "TLD (.com)", "Auth (example.com)"];
const STEPS = [
  { from: 0, to: 1, label: "What's the A for www.example.com?" },
  { from: 1, to: 2, label: "Recursive query" },
  { from: 2, to: 3, label: "Where is .com?" },
  { from: 3, to: 2, label: "NS for .com" },
  { from: 2, to: 4, label: "Where is example.com?" },
  { from: 4, to: 2, label: "NS for example.com" },
  { from: 2, to: 5, label: "A www.example.com?" },
  { from: 5, to: 2, label: "93.184.216.34  TTL=3600" },
  { from: 2, to: 1, label: "Answer + cache" },
  { from: 1, to: 0, label: "Use 93.184.216.34" },
];

export function DnsSimulator() {
  const sim = useSim(STEPS.length - 1);
  const s = STEPS[sim.step];
  return (
    <SimShell
      title="Recursive DNS lookup"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="flex flex-wrap gap-2">
        {NODES.map((n, i) => (
          <div
            key={n}
            className={cn(
              "min-h-11 rounded-md border px-3 py-2 text-sm",
              i === s.from || i === s.to
                ? "border-primary bg-primary text-primary-fg"
                : "border-border bg-bg text-fg",
            )}
          >
            {n}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">
        {NODES[s.from]} → {NODES[s.to]}: {s.label}
      </p>
    </SimShell>
  );
}
