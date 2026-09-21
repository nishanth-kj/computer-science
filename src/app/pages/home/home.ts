import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, PATHS, PHASES, SECTION_BY_ID, SECTION_GROUPS, STATS, getTopic, graphData, groupHref, topicHref } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";
import { Icon } from "@/app/components/ui/icon";
import { GraphView } from "@/app/components/ui/graph/graph";
import { ProgressService } from "@/lib/progress";

const START = ["what-is-programming", "processes", "osi-model", "sql", "arrays", "cpu"] as const;

@Component({
  selector: "cs-home",
  imports: [RouterLink, Icon, GraphView],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  readonly progress = inject(ProgressService);
  readonly stats = STATS;
  readonly paths = PATHS;
  readonly phase = PHASES[0];
  readonly topicHref = topicHref;
  readonly start = START.flatMap((slug) => {
    const topic = getTopic(slug);
    return topic ? [topic] : [];
  });
  readonly featured = this.phase.groups
    .flatMap((id) => SECTION_GROUPS.filter((g) => g.id === id))
    .map((g, i) => ({
      ...g,
      n: String(i + 1).padStart(2, "0"),
      href: groupHref(g),
      count: ALL_NAV.filter((t) => (g.sections as readonly string[]).includes(t.section)).length,
      blurb: g.sections.map((id) => SECTION_BY_ID[id as SectionId].short).join(" · "),
    }));
  readonly beats = [
    { n: "01", title: "One idea per page", text: "What it is, why it matters, the model in your head, and the mistakes that show up when you use it." },
    { n: "02", title: "A path, not a pile", text: "Beginner through interview, backend, and AI. Each step is a real page with a next link." },
    { n: "03", title: "See how it connects", text: "Every page sits on a map of prerequisites and neighbors. Follow the graph while you read." },
  ] as const;
  readonly graph = (() => {
    const data = graphData();
    const seeds = new Set<string>(START);
    const extra = new Set<string>();
    for (const e of data.edges) {
      if (seeds.has(e.from)) extra.add(e.to);
      if (seeds.has(e.to)) extra.add(e.from);
    }
    const keep = new Set([...seeds, ...[...extra].slice(0, 16)]);
    return {
      nodes: data.nodes.filter((n) => keep.has(n.id)).map((n) => ({ id: n.id, title: n.title })),
      edges: data.edges.filter((e) => keep.has(e.from) && keep.has(e.to)),
    };
  })();
}
