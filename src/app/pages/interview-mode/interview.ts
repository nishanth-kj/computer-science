import { Component, computed, effect, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTIONS, getTopic, topicHref } from "@/lib/content";
import type { Level, SectionId } from "@/lib/content/types";
import { Badge } from "@/app/components/ui/badge";
import { Pagination } from "@/app/components/ui/pagination/pagination";

const PAGE_SIZE = 12;

@Component({
  selector: "cs-interview",
  imports: [RouterLink, Badge, Pagination],
  templateUrl: "./interview.html",
  styleUrl: "./interview.css",
})
export class Interview {
  readonly topicHref = topicHref;
  readonly sections = SECTIONS;
  readonly pageSize = PAGE_SIZE;
  readonly section = signal<SectionId | "all">("all");
  readonly level = signal<Level | "all">("all");
  readonly page = signal(1);
  readonly items = computed(() => {
    const section = this.section();
    const level = this.level();
    const slugs = section === "all" ? ALL_NAV.map((t) => t.slug) : ALL_NAV.filter((t) => t.section === section).map((t) => t.slug);
    const out: { slug: string; title: string; q: string; a: string; level: Level }[] = [];
    for (const slug of [...new Set(slugs)]) {
      const t = getTopic(slug);
      if (!t) continue;
      for (const iq of t.interview) {
        if (level !== "all" && iq.level !== level) continue;
        out.push({ slug, title: t.title, q: iq.q, a: iq.a, level: iq.level });
      }
    }
    return out;
  });
  readonly paged = computed(() => {
    const start = (this.page() - 1) * PAGE_SIZE;
    return this.items().slice(start, start + PAGE_SIZE);
  });

  constructor() {
    effect(() => {
      this.section();
      this.level();
      this.page.set(1);
    });
  }
}
