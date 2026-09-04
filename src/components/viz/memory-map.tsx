"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Frame = { name: string; locals: string[] };
type HeapObj = { id: string; label: string };

export function MemoryMap() {
  const [frames, setFrames] = useState<Frame[]>([{ name: "main", locals: ["argc", "argv"] }]);
  const [heap, setHeap] = useState<HeapObj[]>([{ id: "h0", label: "config {}" }]);
  const [n, setN] = useState(1);

  const call = () => {
    const name = n === 1 ? "parse()" : n === 2 ? "eval()" : `fn${n}()`;
    setFrames((f) => [...f, { name, locals: ["i", "tmp"] }]);
    setN((x) => x + 1);
  };
  const ret = () => setFrames((f) => (f.length > 1 ? f.slice(0, -1) : f));
  const alloc = () =>
    setHeap((h) => [...h, { id: "h" + h.length, label: h.length % 2 ? "buf[64]" : "Node" }]);
  const freeLast = () => setHeap((h) => h.slice(0, Math.max(1, h.length - 1)));

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <p className="mr-auto text-sm font-medium">Process address space</p>
        <Button size="sm" onClick={call}>
          Call
        </Button>
        <Button size="sm" variant="outline" onClick={ret}>
          Return
        </Button>
        <Button size="sm" variant="outline" onClick={alloc}>
          malloc
        </Button>
        <Button size="sm" variant="ghost" onClick={freeLast}>
          free
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setFrames([{ name: "main", locals: ["argc", "argv"] }]);
            setHeap([{ id: "h0", label: "config {}" }]);
            setN(1);
          }}
        >
          Reset
        </Button>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Region title="Stack (grows down)" hint="one frame per active call">
            {[...frames].reverse().map((fr, i) => (
              <div
                key={fr.name + i}
                className={cn(
                  "rounded-sm border px-2 py-1 font-mono text-[11px]",
                  i === 0 ? "border-primary bg-primary/10" : "border-border bg-bg",
                )}
              >
                <span className="font-medium">{fr.name}</span>
                <span className="text-muted"> · {fr.locals.join(", ")}</span>
              </div>
            ))}
          </Region>
          <Region title="Heap (grows up)" hint="dynamic objects">
            {heap.map((o) => (
              <div key={o.id} className="rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]">
                {o.id}: {o.label}
              </div>
            ))}
          </Region>
        </div>
        <div className="flex flex-col gap-1">
          <Region title="Data" hint="globals / static">
            <div className="rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]">errno, FILE *s</div>
          </Region>
          <Region title="Code (text)" hint="instructions, usually R-X">
            <div className="rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]">main, parse, eval</div>
          </Region>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Call pushes a frame. Return pops it. malloc adds a heap object whose lifetime is not tied to a
            frame — that is the whole point, and the whole class of bugs.
          </p>
        </div>
      </div>
    </div>
  );
}

function Region({ title, hint, children }: { title: string; hint: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-bg p-2">
      <p className="text-[11px] font-medium text-fg">{title}</p>
      <p className="mb-1 text-[10px] text-subtle">{hint}</p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
