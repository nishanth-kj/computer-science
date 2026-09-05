import { Component, computed, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTIONS, getTopic } from "@/app/lib/content";
import type { Level, SectionId } from "@/app/lib/content/types";

@Component({
  selector: "cs-interview",
  imports: [RouterLink],
  templateUrl: "./interview.html",
  styleUrl: "./interview.css",
})
export class Interview {
  readonly sections = SECTIONS;
  readonly section = signal<SectionId | "all">("all");
  readonly level = signal<Level | "all">("all");
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
    return out.slice(0, 120);
  });
}
