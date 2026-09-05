import { Component, computed, inject, input } from "@angular/core";
import { Router } from "@angular/router";
import { exists, getTopic, known, topicHref, type Topic } from "@/lib/content";

type Node = { id: string; title: string; x: number; y: number; kind: "here" | "prereq" | "related" | "next" };
type Edge = { x1: number; y1: number; x2: number; y2: number; kind: "prereq" | "related" };

@Component({
  selector: "cs-topic-graph",
  templateUrl: "./topic-graph.html",
  styleUrl: "./topic-graph.css",
})
export class TopicGraph {
  readonly topic = input.required<Topic>();
  private readonly router = inject(Router);

  readonly map = computed(() => {
    const topic = this.topic();
    const prereqs = known(topic.prereqs).slice(0, 5);
    const related = known(topic.related.filter((s) => s !== topic.next)).slice(0, 5);
    const next = topic.next && exists(topic.next) ? [topic.next] : [];
    const cx = 50;
    const cy = 50;
    const nodes: Node[] = [
      { id: topic.slug, title: topic.title, x: cx, y: cy, kind: "here" },
    ];
    const edges: Edge[] = [];
    const place = (ids: string[], kind: Node["kind"], x: number) => {
      const n = ids.length || 1;
      ids.forEach((id, i) => {
        const y = n === 1 ? cy : 18 + (i * 64) / Math.max(n - 1, 1);
        const title = getTopic(id)?.title ?? id;
        nodes.push({ id, title, x, y, kind });
        if (kind === "prereq") edges.push({ x1: x, y1: y, x2: cx, y2: cy, kind: "prereq" });
        else edges.push({ x1: cx, y1: cy, x2: x, y2: y, kind: "related" });
      });
    };
    place(prereqs, "prereq", 16);
    const right = [...related];
    if (next[0] && !right.includes(next[0])) right.push(next[0]);
    place(right, "related", 84);
    if (next[0]) {
      const node = nodes.find((n) => n.id === next[0]);
      if (node) node.kind = "next";
    }
    return { nodes, edges };
  });

  label(title: string) {
    return title.length > 22 ? `${title.slice(0, 20)}…` : title;
  }

  open(id: string) {
    if (id === this.topic().slug) return;
    void this.router.navigateByUrl(topicHref(id));
  }
}
