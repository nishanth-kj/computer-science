import { Component, computed, effect, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { getTopic, SECTION_BY_ID } from "@/lib/content";
import { ProgressService } from "@/lib/progress";
import { DocArticle } from "./article";
import { Toc } from "./toc";
import { Icon } from "@/app/components/ui/icon";

@Component({
  selector: "cs-topic-view",
  imports: [RouterLink, DocArticle, Toc, Icon],
  templateUrl: "./topic-view.html",
  styleUrl: "./topic-view.css",
})
export class TopicView {
  readonly slug = input.required<string>();
  readonly progress = inject(ProgressService);
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly topic = computed(() => getTopic(this.slug()));

  constructor() {
    effect(() => {
      const t = this.topic();
      if (t) this.progress.markVisited(t.slug);
    });
  }

  bookmarked() {
    return this.progress.isBookmarked(this.slug());
  }
}
