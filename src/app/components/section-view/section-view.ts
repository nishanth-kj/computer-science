import { Component, computed, effect, input, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { getSectionTopics, SECTION_BY_ID, graphData, topicHref } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";
import { GraphView } from "@/app/components/ui/graph/graph";
import { Pagination } from "@/app/components/ui/pagination/pagination";

const PAGE_SIZE = 20;

@Component({
  selector: "cs-section-view",
  imports: [RouterLink, Pagination, GraphView],
  templateUrl: "./section-view.html",
  styleUrl: "./section-view.css",
})
export class SectionView {
  readonly topicHref = topicHref;
  readonly pageSize = PAGE_SIZE;
  readonly id = input.required<string>();
  readonly page = signal(1);
  readonly section = computed(() => SECTION_BY_ID[this.id() as SectionId]);
  readonly topics = computed(() => (this.section() ? getSectionTopics(this.id() as SectionId) : []));
  readonly paged = computed(() => {
    const start = (this.page() - 1) * PAGE_SIZE;
    return this.topics().slice(start, start + PAGE_SIZE);
  });
  readonly graph = computed(() => {
    const slugs = new Set(this.topics().map((t) => t.slug));
    const data = graphData();
    return {
      nodes: data.nodes.filter((n) => slugs.has(n.id)).map((n) => ({ id: n.id, title: n.title })),
      edges: data.edges.filter((e) => slugs.has(e.from) && slugs.has(e.to)),
    };
  });

  constructor() {
    effect(() => {
      this.id();
      this.page.set(1);
    });
  }

  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
