import { Component, computed, effect, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { getTopic } from "@/lib/content";
import { ProgressService } from "@/lib/progress";
import { Icon } from "@/app/components/ui/icon";
import { DocArticle } from "./article";
import { Toc } from "./toc";

@Component({
  selector: "cs-topic-view",
  imports: [RouterLink, DocArticle, Toc, Icon],
  templateUrl: "./topic-view.html",
  styleUrl: "./topic-view.css",
})
export class TopicView {
  readonly slug = input.required<string>();
  readonly progress = inject(ProgressService);
  readonly topic = computed(() => getTopic(this.slug()));

  constructor() {
    effect(() => {
      const s = this.slug();
      if (s) {
        this.progress.markVisited(s);
      }
    });
  }

  isVisited() {
    return this.progress.isVisited(this.slug());
  }

  toggleVisited() {
    this.progress.toggleVisited(this.slug());
  }

  bookmarked() {
    return this.progress.isBookmarked(this.slug());
  }

  toggleBookmark() {
    this.progress.toggleBookmark(this.slug());
  }
}

