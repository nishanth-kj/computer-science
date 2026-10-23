import { Component, computed, effect, inject, input, output, signal } from "@angular/core";
import { Router } from "@angular/router";
import { PATHS, SECTIONS, searchTopics, topicHref } from "@/lib/content";

@Component({
  selector: "cs-search",
  templateUrl: "./search.html",
  styleUrl: "./search.css",
})
export class SearchDialog {
  readonly open = input(false);
  readonly openChange = output<boolean>();
  readonly q = signal("");
  private readonly router = inject(Router);
  readonly featuredSections = SECTIONS.slice(0, 8);
  readonly paths = PATHS;
  readonly matchingPaths = computed(() => {
    const query = this.q().trim().toLowerCase();
    if (!query) return [];
    return PATHS.filter((path) =>
      [path.title, path.id, path.blurb, path.audience].some((value) => value.toLowerCase().includes(query)),
    ).slice(0, 5);
  });

  constructor() {
    effect(() => {
      if (!this.open()) this.q.set("");
    });
  }

  topics() {
    return searchTopics(this.q(), 12);
  }
  close() {
    this.openChange.emit(false);
  }
  go(to: string) {
    this.close();
    void this.router.navigateByUrl(to);
  }

  topicHref = topicHref;
}
