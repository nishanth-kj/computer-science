import { Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { getTopic } from "@/lib/content";
import { DocArticle } from "./article";
import { Toc } from "./toc";

@Component({
  selector: "cs-topic-view",
  imports: [RouterLink, DocArticle, Toc],
  templateUrl: "./topic-view.html",
  styleUrl: "./topic-view.css",
})
export class TopicView {
  readonly slug = input.required<string>();
  readonly topic = computed(() => getTopic(this.slug()));
}

