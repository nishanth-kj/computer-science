import { Component, HostListener, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeService } from "../../lib/theme";
import { Icon } from "../ui/icon";
import { SearchDialog } from "./search";

const NAV = [
  { href: "/topics", label: "Topics" },
  { href: "/labs", label: "Labs" },
  { href: "/graph", label: "Graph" },
  { href: "/paths", label: "Paths" },
  { href: "/interview", label: "Interview" },
] as const;

@Component({
  selector: "cs-header",
  imports: [RouterLink, RouterLinkActive, Icon, SearchDialog],
  template: `
    <header class="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div class="mx-auto flex h-14 max-w-[88rem] items-center gap-3 px-4">
        <button
          type="button"
          class="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-surface-2 lg:hidden"
          aria-label="Open menu"
          (click)="menu.set(true)"
        >
          <cs-icon name="menu" />
        </button>
        <a routerLink="/" class="inline-flex items-center gap-2.5 text-fg no-underline hover:opacity-90 transition-opacity" aria-label="Computer Science home">
          <img src="logo.svg" alt="Computer Science" class="size-7 rounded-lg border border-border shrink-0" />
          <span class="font-sans text-base font-semibold tracking-tight sm:text-lg whitespace-nowrap">Computer Science</span>
        </a>
        <nav class="ml-4 hidden items-center gap-1 lg:flex">
          @for (n of nav; track n.href) {
            <a
              [routerLink]="n.href"
              routerLinkActive="text-fg bg-surface-2"
              [routerLinkActiveOptions]="{ exact: n.href === '/topics' ? false : false }"
              class="rounded-md px-3 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-fg"
              >{{ n.label }}</a
            >
          }
        </nav>
        <div class="ml-auto flex items-center gap-1">
          <button
            type="button"
            class="hidden h-9 w-56 items-center justify-between rounded-md border border-border px-3 text-sm text-muted hover:bg-surface-2 sm:inline-flex"
            (click)="search.set(true)"
          >
            <span class="flex items-center gap-2"><cs-icon name="search" /> Search</span>
            <kbd class="font-mono text-[10px] text-subtle">⌘K</kbd>
          </button>
          <button type="button" class="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-surface-2 sm:hidden" aria-label="Search" (click)="search.set(true)">
            <cs-icon name="search" />
          </button>
          <button type="button" class="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-surface-2" aria-label="Toggle theme" (click)="theme.toggle()">
            @if (theme.theme() === "dark") {
              <cs-icon name="sun" />
            } @else {
              <cs-icon name="moon" />
            }
          </button>
        </div>
      </div>
    </header>
    @if (menu()) {
      <div class="fixed inset-0 z-50 lg:hidden">
        <button type="button" class="absolute inset-0 bg-bg/70" aria-label="Close menu" (click)="menu.set(false)"></button>
        <div class="relative z-10 flex h-full w-[min(20rem,88vw)] flex-col border-r border-border bg-surface p-4">
          <div class="mb-4 flex items-center gap-2.5">
            <img src="logo.svg" alt="Computer Science" class="size-6 rounded-md border border-border shrink-0" />
            <span class="font-sans text-base font-semibold tracking-tight">Computer Science</span>
          </div>
          <nav class="flex flex-col gap-1">
            @for (n of nav; track n.href) {
              <a [routerLink]="n.href" class="rounded-md px-3 py-2 text-sm hover:bg-surface-2" (click)="menu.set(false)">{{ n.label }}</a>
            }
          </nav>
        </div>
      </div>
    }
    <cs-search [open]="search()" (openChange)="search.set($event)" />
  `,
})
export class AppHeader {
  readonly theme = inject(ThemeService);
  readonly nav = NAV;
  readonly search = signal(false);
  readonly menu = signal(false);

  @HostListener("window:keydown", ["$event"])
  onKey(e: KeyboardEvent) {
    const t = e.target as HTMLElement | null;
    const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      this.search.set(true);
    } else if (!typing && e.key === "/" && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      this.search.set(true);
    } else if (e.key === "Escape") {
      this.search.set(false);
      this.menu.set(false);
    }
  }
}
