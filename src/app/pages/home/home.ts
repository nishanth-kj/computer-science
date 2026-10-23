import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_GROUPS, STATS, groupHref, topicHref } from "@/lib/content";
import { Icon } from "@/app/components/ui/icon";

@Component({
  selector: "cs-home",
  imports: [RouterLink, Icon],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  readonly stats = STATS;
  readonly topicHref = topicHref;
  readonly featured = SECTION_GROUPS.map((g, i) => ({
    ...g,
    n: String(i + 1).padStart(2, "0"),
    href: groupHref(g),
    count: ALL_NAV.filter((t) => (g.sections as readonly string[]).includes(t.section)).length,
  }));
}
