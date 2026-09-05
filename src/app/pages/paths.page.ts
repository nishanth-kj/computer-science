import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PATHS } from "@/content";

@Component({
  selector: "cs-paths",
  imports: [RouterLink],
  template: `
    <div class="mx-auto max-w-3xl px-4 py-10">
      <h1 class="font-display text-4xl tracking-tight">Learning paths</h1>
      <p class="mt-2 text-muted">A sequence, not a syllabus. Each step is a documentation page with a next link.</p>
      <div class="mt-8 grid gap-3">
        @for (p of paths; track p.id) {
          <a [routerLink]="'/paths/' + p.id" class="block">
            <div class="rounded-xl border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface-2">
              <p class="text-xs text-muted">{{ p.audience }}</p>
              <h2 class="mt-1 font-display text-2xl">{{ p.title }}</h2>
              <p class="mt-1 text-sm text-muted">{{ p.blurb }}</p>
            </div>
          </a>
        }
      </div>
    </div>
  `,
})
export class PathsPage {
  readonly paths = PATHS;
}
