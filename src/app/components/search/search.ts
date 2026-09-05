import { Component, effect, inject, input, output, signal } from "@angular/core";
import { Router } from "@angular/router";
import { LABS, PATHS, SECTIONS, searchLabs, searchTopics } from "@/lib/content";

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
  readonly featuredLabs = LABS.slice(0, 6);
  readonly featuredSections = SECTIONS.slice(0, 8);
  readonly paths = PATHS;

  constructor() {
    effect(() => {
      if (!this.open()) this.q.set("");
    });
  }

  topics() {
    return searchTopics(this.q(), 12);
  }
  labs() {
    return this.q() ? searchLabs(this.q(), 6) : [];
  }
  close() {
    this.openChange.emit(false);
  }
  go(to: string) {
    this.close();
    void this.router.navigateByUrl(to);
  }
}
