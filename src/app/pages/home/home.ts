import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, PATHS, SECTION_BY_ID, SECTION_GROUPS, STATS, getTopic, topicHref } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";
import { Icon } from "@/app/components/ui/icon";

const START = ["what-is-programming", "processes", "osi-model", "sql", "arrays", "cpu"] as const;
const HUBS = new Set(["programming", "systems", "software", "security", "intelligence"]);

@Component({
  selector: "cs-home",
  imports: [RouterLink, Icon],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  readonly stats = STATS;
  readonly paths = PATHS;
  readonly topicHref = topicHref;
  readonly start = START.flatMap((slug) => {
    const topic = getTopic(slug);
    return topic ? [topic] : [];
  });
  readonly featured = SECTION_GROUPS.map((g, i) => ({
    ...g,
    n: String(i + 1).padStart(2, "0"),
    href: HUBS.has(g.id) ? "/" + g.id : "/" + g.sections[0],
    count: ALL_NAV.filter((t) => (g.sections as readonly string[]).includes(t.section)).length,
    blurb: g.sections.map((id) => SECTION_BY_ID[id as SectionId].short).join(" · "),
  }));
  readonly beats = [
    { n: "01", title: "One idea per page", text: "What it is, why it matters, the model in your head, and the mistakes that show up when you use it." },
    { n: "02", title: "A path, not a pile", text: "Beginner through interview, backend, and AI. Each step is a real page with a next link." },
    { n: "03", title: "See how it connects", text: "Every page sits on a map of prerequisites and neighbors. Follow the graph while you read." },
  ] as const;
}
