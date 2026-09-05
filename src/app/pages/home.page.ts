import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/content";

@Component({
  selector: "cs-home",
  imports: [RouterLink],
  template: `
    <div class="px-4 py-10 sm:px-8">
      <h1 class="font-display text-4xl tracking-tight">Topics</h1>
      <p class="mt-3 max-w-xl text-muted">{{ count }} pages. Every topic is listed in the sidebar — scroll or filter to open one.</p>
      <ul class="mt-8 columns-1 gap-x-8 sm:columns-2">
        @for (id of sections; track id) {
          <li class="break-inside-avoid">
            <a [routerLink]="'/topics/' + id" class="flex items-baseline justify-between gap-3 border-b border-border py-2 text-sm hover:text-link">
              <span>{{ SECTION_BY_ID[id].title }}</span>
              <span class="font-mono text-xs text-subtle tabular-nums">{{ countIn(id) }}</span>
            </a>
          </li>
        }
      </ul>
    </div>
  `,
})
export class HomePage {
  readonly count = ALL_NAV.length;
  readonly sections = SECTION_GROUPS.flatMap((g) => g.sections);
  readonly SECTION_BY_ID = SECTION_BY_ID;
  countIn(id: string) {
    return ALL_NAV.filter((t) => t.section === id).length;
  }
}
