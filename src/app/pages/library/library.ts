import { Component, computed, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, PHASES, SECTION_BY_ID, SECTION_GROUPS, graphData, topicHref } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";
import { GraphView } from "@/app/components/ui/graph/graph";
import { Pagination } from "@/app/components/ui/pagination/pagination";
import { Table, type TableCell } from "@/app/components/ui/table/table";
import { AdSlot } from "@/app/components/ui/ad-slot/ad-slot";

const PAGE_SIZE = 20;

@Component({
  selector: "cs-library",
  imports: [RouterLink, Table, Pagination, GraphView, AdSlot],
  templateUrl: "./library.html",
  styleUrl: "./library.css",
})
export class Library {
  readonly topicHref = topicHref;
  readonly count = ALL_NAV.length;
  readonly phases = PHASES.map((p) => ({
    ...p,
    groups: p.groups.flatMap((id) => SECTION_GROUPS.filter((g) => g.id === id)),
  }));
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly fields = SECTION_GROUPS.flatMap((g) => g.sections);
  readonly pageSize = PAGE_SIZE;
  readonly page = signal(1);
  readonly graphSection = signal<SectionId | "all">("all");
  readonly catalog = computed(() => {
    const start = (this.page() - 1) * PAGE_SIZE;
    return ALL_NAV.slice(start, start + PAGE_SIZE).map((t): TableCell[] => [
      { text: t.title, href: topicHref(t.slug) },
      SECTION_BY_ID[t.section].short,
      t.level,
    ]);
  });
  readonly graph = computed(() => {
    const data = graphData();
    const section = this.graphSection();
    const nodes = section === "all" ? data.nodes.slice(0, 80) : data.nodes.filter((n) => n.section === section);
    const ids = new Set(nodes.map((n) => n.id));
    const edges = data.edges.filter((e) => ids.has(e.from) && ids.has(e.to)).slice(0, 140);
    return {
      nodes: nodes.map((n) => ({ id: n.id, title: n.title })),
      edges,
    };
  });

  topics(id: string) {
    return ALL_NAV.filter((t) => t.section === id);
  }
}
