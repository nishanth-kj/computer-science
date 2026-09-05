import { Component, computed, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS, graphData, type SectionId } from "@/content";

@Component({
  selector: "cs-graph",
  template: `
    <div class="mx-auto max-w-5xl px-4 py-10">
      <h1 class="font-display text-4xl tracking-tight">Knowledge graph</h1>
      <p class="mt-2 max-w-2xl text-muted">{{ count }} nodes. Edges are prerequisites and related links. Click a node to open its page.</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <button type="button" class="rounded-full border px-3 py-1 text-xs" [class.border-primary]="section() === 'all'" [class.bg-primary]="section() === 'all'" [class.text-primary-fg]="section() === 'all'" [class.border-border]="section() !== 'all'" (click)="section.set('all')">Sample</button>
        @for (id of ordered; track id) {
          <button type="button" class="rounded-full border px-3 py-1 text-xs" [class.border-primary]="section() === id" [class.bg-primary]="section() === id" [class.text-primary-fg]="section() === id" [class.border-border]="section() !== id" (click)="section.set(id)">{{ SECTION_BY_ID[id].short }}</button>
        }
      </div>
      <svg viewBox="0 0 100 100" class="mt-6 h-auto w-full rounded-xl border border-border bg-surface">
        @for (e of laid().edges; track $index) {
          <line [attr.x1]="e.x1" [attr.y1]="e.y1" [attr.x2]="e.x2" [attr.y2]="e.y2" class="stroke-border-strong" stroke-width="0.15" />
        }
        @for (n of laid().nodes; track n.id) {
          <g class="cursor-pointer" (click)="open(n.id)">
            <circle [attr.cx]="n.x" [attr.cy]="n.y" r="1.4" class="fill-primary" />
            <text [attr.x]="n.x + 1.8" [attr.y]="n.y + 0.6" font-size="1.6" class="fill-fg">{{ n.label }}</text>
          </g>
        }
      </svg>
    </div>
  `,
})
export class GraphPage {
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
      return { ...node, x: 50 + Math.cos(ang) * r, y: 50 + Math.sin(ang) * r, label: node.title.length > 18 ? node.title.slice(0, 16) + "…" : node.title };
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
    void this.router.navigateByUrl(`/topics/${id}`);
  }
}
