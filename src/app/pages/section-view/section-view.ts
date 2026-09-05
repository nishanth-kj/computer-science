import { Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { getSectionTopics, SECTION_BY_ID } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";

@Component({
  selector: "cs-section-view",
  imports: [RouterLink],
  templateUrl: "./section-view.html",
})
export class SectionView {
  readonly id = input.required<string>();
  readonly section = computed(() => SECTION_BY_ID[this.id() as SectionId]);
  readonly topics = computed(() => (this.section() ? getSectionTopics(this.id() as SectionId) : []));

  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
