import { Component, computed, effect, inject, input, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PATH_BY_ID, getTopic, topicHref } from "@/lib/content";
import { ProgressService } from "@/lib/progress";
import { Pagination } from "@/app/components/ui/pagination/pagination";

const PAGE_SIZE = 20;

@Component({
  selector: "cs-path-view",
  imports: [RouterLink, Pagination],
  templateUrl: "./path-view.html",
  styleUrl: "./path-view.css",
})
export class PathView {
  readonly topicHref = topicHref;
  readonly pageSize = PAGE_SIZE;
  readonly id = input.required<string>();
  readonly page = signal(1);
  readonly progress = inject(ProgressService);
  readonly getTopic = getTopic;
  readonly path = computed(() => PATH_BY_ID[this.id()]);
  readonly visited = this.progress.visited;
  readonly slugs = computed(() => this.path()?.slugs ?? []);
  readonly paged = computed(() => {
    const start = (this.page() - 1) * PAGE_SIZE;
    return this.slugs().slice(start, start + PAGE_SIZE);
  });

  constructor() {
    effect(() => {
      this.id();
      this.page.set(1);
    });
  }

  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
