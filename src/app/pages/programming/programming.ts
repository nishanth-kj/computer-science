import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/lib/content";

@Component({
  selector: "cs-programming-page",
  imports: [RouterLink],
  template: `
    <div class="mx-auto max-w-5xl px-4 py-10">
      <h1 class="font-display text-4xl tracking-tight">Programming</h1>
      <p class="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
        Languages, fundamentals, object-oriented design, data structures, and discrete mathematics.
      </p>
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        @for (sec of group.sections; track sec) {
          <a [routerLink]="'/' + sec" class="block">
            <div class="h-full rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface-2">
              <h2 class="font-display text-2xl tracking-tight">{{ SECTION_BY_ID[sec].title }}</h2>
              <p class="mt-1 text-sm text-muted">{{ SECTION_BY_ID[sec].blurb }}</p>
              <p class="mt-3 font-mono text-xs text-subtle">{{ countIn(sec) }} pages</p>
            </div>
          </a>
        }
      </div>
    </div>
  `,
})
export class ProgrammingPage {
  readonly group = SECTION_GROUPS.find((g) => g.id === "programming")!;
  readonly SECTION_BY_ID = SECTION_BY_ID;
  countIn(id: string) {
    return ALL_NAV.filter((t) => t.section === id).length;
  }
}

export { ProgrammingPage as ProgramPage };

