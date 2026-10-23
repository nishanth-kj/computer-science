import { Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SECTION_BY_ID, SECTION_GROUPS, getSectionTopics, topicHref } from "@/lib/content";

@Component({
  selector: "cs-group-view",
  imports: [RouterLink],
  templateUrl: "./group-view.html",
  styleUrl: "./group-view.css",
})
export class GroupView {
  readonly topicHref = topicHref;
  readonly id = input.required<string>();
  readonly limit = input(8);
  readonly sections = computed(() => {
    const group = SECTION_GROUPS.find((g) => g.id === this.id());
    if (!group) return [];
    return group.sections.map((id) => {
      const section = SECTION_BY_ID[id];
      const topics = getSectionTopics(id);
      return {
        id,
        title: section.title,
        blurb: section.blurb,
        total: topics.length,
        shown: topics.slice(0, this.limit()),
        more: Math.max(0, topics.length - this.limit()),
      };
    });
  });
}
