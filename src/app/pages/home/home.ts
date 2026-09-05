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
  readonly groups = SECTION_GROUPS;
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly paths = PATHS;
  readonly topicHref = topicHref;
  readonly start = START.flatMap((slug) => {
    const topic = getTopic(slug);
    return topic ? [topic] : [];
  });
  readonly featured = SECTION_GROUPS.map((g) => ({
    ...g,
    href: HUBS.has(g.id) ? "/" + g.id : "/" + g.sections[0],
    count: ALL_NAV.filter((t) => (g.sections as readonly string[]).includes(t.section)).length,
    blurb: g.sections.map((id) => SECTION_BY_ID[id as SectionId].short).join(" · "),
  }));

  countIn(id: string) {
    return ALL_NAV.filter((t) => t.section === id).length;
  }
}
