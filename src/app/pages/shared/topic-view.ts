import { Component, computed, effect, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { getTopic, SECTION_BY_ID } from "@/content";
import { ProgressService } from "../../lib/progress";
import { DocArticle } from "../../components/topics/article";
import { Toc } from "../../components/topics/toc";
import { Icon } from "../../components/ui/icon";

@Component({
  selector: "cs-topic-view",
  imports: [RouterLink, DocArticle, Toc, Icon],
  templateUrl: "./topic-view.html",
})
export class TopicView {
  readonly slug = input.required<string>();
  readonly progress = new ProgressService();
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
