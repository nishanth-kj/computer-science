import { Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, PHASE_BY_ID, SECTION_GROUPS, groupHref } from "@/lib/content";
import { GroupView } from "@/app/components/group-view/group-view";

@Component({
  selector: "cs-phase-page",
  imports: [RouterLink, GroupView],
  templateUrl: "./phase.html",
  styleUrl: "./phase.css",
})
export class PhasePage {
  readonly id = input.required<string>();
  readonly phase = computed(() => PHASE_BY_ID[this.id()]);
  readonly groups = computed(() =>
    (this.phase()?.groups ?? []).flatMap((gid) => {
      const group = SECTION_GROUPS.find((g) => g.id === gid);
      if (!group) return [];
      const sections: readonly string[] = group.sections;
      return [{ ...group, href: groupHref(group), count: ALL_NAV.filter((t) => sections.includes(t.section)).length }];
    }),
  );
  readonly total = computed(() => this.groups().reduce((n, g) => n + g.count, 0));

  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
