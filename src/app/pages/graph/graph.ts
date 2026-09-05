import { Component, computed, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS, graphData, topicHref, type SectionId } from "@/lib/content";

@Component({
  selector: "cs-graph",
  templateUrl: "./graph.html",
  styleUrl: "./graph.css",
})
export class Graph {
  readonly count = ALL_NAV.length;
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly ordered = SECTION_GROUPS.flatMap((g) => g.sections);
  readonly section = signal<SectionId | "all">("all");
  private readonly router = inject(Router);
  readonly data = graphData();
  readonly laid = computed(() => {
    const section = this.section();
    const nodes = section === "all" ? this.data.nodes.slice(0, 80) : this.data.nodes.filter((x) => x.section === section);
    const ids = new Set(nodes.map((x) => x.id));
    const edges = this.data.edges.filter((x) => ids.has(x.from) && ids.has(x.to)).slice(0, 120);
    const count = nodes.length || 1;
    const laid = nodes.map((node, i) => {
      const ang = (i / count) * Math.PI * 2 - Math.PI / 2;
      const r = 38 + (i % 5) * 8;
      return {
        ...node,
        x: 50 + Math.cos(ang) * r,
        y: 50 + Math.sin(ang) * r,
        label: node.title.length > 18 ? node.title.slice(0, 16) + "…" : node.title,
      };
    });
    const pos = new Map(laid.map((n) => [n.id, n]));
    return {
      nodes: laid,
      edges: edges
        .map((e) => {
          const a = pos.get(e.from);
          const b = pos.get(e.to);
          if (!a || !b) return null;
          return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
        })
        .filter((x): x is { x1: number; y1: number; x2: number; y2: number } => x !== null),
    };
  });
  open(id: string) {
    void this.router.navigateByUrl(topicHref(id));
  }
}
