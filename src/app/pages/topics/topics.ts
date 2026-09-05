import { Component, computed, input } from "@angular/core";
import { SECTION_BY_ID } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";
import { SectionView } from "@/app/section-view/section-view";
import { TopicView } from "@/app/topics/view/topic-view";

@Component({
  selector: "cs-topics",
  imports: [SectionView, TopicView],
  templateUrl: "./topics.html",
  styleUrl: "./topics.css",
})
export class Topics {
  readonly slug = input.required<string>();
  readonly isSection = computed(() => this.slug() in SECTION_BY_ID);

  sectionId(): SectionId {
    return this.slug() as SectionId;
  }
}
