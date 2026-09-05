import { Component, computed, inject, input } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/lib/content";
import type { SectionId } from "@/lib/content/types";

const BLURB: Record<string, string> = {
  programming: "Languages, fundamentals, object-oriented design, data structures, and discrete mathematics.",
  systems: "What the machine actually does: architecture, Unix, and programs that share a core.",
  software: "How teams design, ship, and run software — engineering, the web, compilers, and mobile.",
  security: "Who is allowed to do what, and the cloud those controls live in.",
  intelligence: "Search, learning, language, vision, graphics, and robots.",
  theory: "What computers can decide, how we retrieve, and how to prepare for interviews.",
  distributed: "Clocks, consensus, and the architectures behind products at scale.",
};

@Component({
  selector: "cs-group-page",
  imports: [RouterLink],
  templateUrl: "./group.html",
  styleUrl: "./group.css",
})
export class GroupPage {
  private readonly route = inject(ActivatedRoute);
  readonly id = input(this.route.snapshot.data["id"] as string);
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly group = computed(() => SECTION_GROUPS.find((g) => g.id === this.id()));
  readonly blurb = computed(() => BLURB[this.id()] ?? this.group()?.title ?? "");

  href(section: SectionId) {
    return this.id() === "programming" ? `/programming/${section}` : `/${section}`;
  }

  countIn(section: string) {
    return ALL_NAV.filter((t) => t.section === section).length;
  }
}
