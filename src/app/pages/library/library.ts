import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS, topicHref } from "@/lib/content";

@Component({
  selector: "cs-library",
  imports: [RouterLink],
  templateUrl: "./library.html",
  styleUrl: "./library.css",
})
export class Library {
  readonly topicHref = topicHref;
  readonly count = ALL_NAV.length;
  readonly groups = SECTION_GROUPS;
  readonly SECTION_BY_ID = SECTION_BY_ID;
  topics(id: string) {
    return ALL_NAV.filter((t) => t.section === id);
  }
}
