import { Component, effect, inject, input, output, signal } from "@angular/core";
import { Router } from "@angular/router";
import { LABS, PATHS, SECTIONS, searchLabs, searchTopics } from "@/app/lib/content";

@Component({
  selector: "cs-search",
  template: `
    @if (open()) {
      <div class="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-[12vh]">
        <button type="button" class="absolute inset-0 cursor-default" aria-label="Close search" (click)="close()"></button>
        <div class="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-border)]">
          <input
            class="h-12 w-full border-b border-border bg-transparent px-4 text-sm outline-none placeholder:text-subtle"
            placeholder="Search topics, labs, paths…"
            [value]="q()"
            (input)="q.set($any($event.target).value)"
          />
          <div class="max-h-80 overflow-y-auto p-2">
            @if (q() && !topics().length && !labs().length) {
              <p class="px-3 py-6 text-center text-sm text-muted">No matches.</p>
            }
            @if (topics().length) {
              <p class="px-3 py-1 text-[11px] text-muted">Topics</p>
              @for (t of topics(); track t.slug) {
                <button type="button" class="flex w-full flex-col rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2" (click)="go('/topics/' + t.slug)">
                  <span>{{ t.title }}</span>
                  <span class="text-xs text-muted">{{ t.summary }}</span>
                </button>
              }
            }
            @if (labs().length) {
              <p class="px-3 py-1 text-[11px] text-muted">Labs</p>
              @for (l of labs(); track l.id) {
                <button type="button" class="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2" (click)="go('/labs/' + l.id)">{{ l.title }}</button>
              }
            }
            @if (!q()) {
              <p class="px-3 py-1 text-[11px] text-muted">Labs</p>
              @for (l of featuredLabs; track l.id) {
                <button type="button" class="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2" (click)="go('/labs/' + l.id)">{{ l.title }}</button>
              }
              <p class="px-3 py-1 text-[11px] text-muted">Sections</p>
              @for (s of featuredSections; track s.id) {
                <button type="button" class="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2" (click)="go('/topics/' + s.id)">{{ s.title }}</button>
              }
              <p class="px-3 py-1 text-[11px] text-muted">Paths</p>
              @for (p of paths; track p.id) {
                <button type="button" class="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2" (click)="go('/paths/' + p.id)">{{ p.title }}</button>
              }
            }
          </div>
        </div>
      </div>
    }
  `,
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
