"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS, graphData, type SectionId } from "@/content";
import { cn } from "@/lib/utils";

export function GraphPage() {
  const [section, setSection] = useState<SectionId | "all">("all");
  const router = useRouter();
  const { nodes, edges } = useMemo(() => graphData(), []);
  const visible = useMemo(() => {
    const n =
      section === "all" ? nodes.slice(0, 80) : nodes.filter((x) => x.section === section);
    const ids = new Set(n.map((x) => x.id));
    const e = edges.filter((x) => ids.has(x.from) && ids.has(x.to)).slice(0, 120);
    return { n, e };
  }, [section, nodes, edges]);

  const laid = useMemo(() => {
    const count = visible.n.length || 1;
    return visible.n.map((node, i) => {
      const ang = (i / count) * Math.PI * 2 - Math.PI / 2;
      const r = 38 + (i % 5) * 8;
      return { ...node, x: 50 + Math.cos(ang) * r, y: 50 + Math.sin(ang) * r };
    });
  }, [visible]);

  const pos = new Map(laid.map((n) => [n.id, n]));
  const ordered = SECTION_GROUPS.flatMap((g) => g.sections);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl tracking-tight">Knowledge graph</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {ALL_NAV.length} nodes. Edges are prerequisites and related links. Click a node to open its page.
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setSection("all")}
          className={cn(
            "rounded-full border px-3 py-1 text-xs",
            section === "all" ? "border-primary bg-primary text-primary-fg" : "border-border",
          )}
        >
          Sample
        </button>
        {ordered.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setSection(id)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs",
              section === id ? "border-primary bg-primary text-primary-fg" : "border-border",
            )}
          >
            {SECTION_BY_ID[id].short}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 100 100" className="mt-6 h-auto w-full rounded-xl border border-border bg-surface">
        {visible.e.map((e, i) => {
          const a = pos.get(e.from);
          const b = pos.get(e.to);
          if (!a || !b) return null;
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="stroke-border-strong"
              strokeWidth="0.15"
            />
          );
        })}
        {laid.map((n) => (
          <g key={n.id} className="cursor-pointer" onClick={() => router.push(`/docs/${n.id}`)}>
            <circle cx={n.x} cy={n.y} r="1.4" className="fill-primary" />
            <text x={n.x + 1.8} y={n.y + 0.6} fontSize="1.6" className="fill-fg">
              {n.title.length > 18 ? n.title.slice(0, 16) + "…" : n.title}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
