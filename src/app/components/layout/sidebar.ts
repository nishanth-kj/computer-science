import { Component, computed, inject, output, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/app/lib/content";
import { filter, map, startWith } from "rxjs";
import { Icon } from "../ui/icon";

const DEFAULT_OPEN: Record<string, boolean> = Object.fromEntries(
  SECTION_GROUPS.flatMap((g) => g.sections).map((id) => [id, true]),
);

@Component({
  selector: "cs-sidebar",
  imports: [RouterLink, Icon],
  template: `
    <div class="flex h-full min-h-0 flex-col overflow-hidden">
      <div class="p-3">
        <input
          class="h-9 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle"
          placeholder="Filter topics"
          [value]="q()"
          (input)="q.set($any($event.target).value)"
        />
      </div>
      <nav class="min-h-0 flex-1 overflow-y-auto px-2 pb-10" aria-label="Topics">
        @for (group of groups(); track group.id) {
          <div class="mb-3">
            @if (group.showTitle) {
              <p class="px-2 pt-3 pb-1 font-mono text-xs tracking-wider text-subtle uppercase">{{ group.title }}</p>
            }
            @for (b of group.blocks; track b.id) {
              <div>
                <div class="flex items-center">
                  <button
                    type="button"
                    class="flex size-9 shrink-0 items-center justify-center rounded-md text-subtle hover:bg-surface-2 hover:text-fg"
                    [attr.aria-expanded]="b.open"
                    (click)="toggle(b.id)"
                  >
                    <span [class.rotate-90]="b.open" class="inline-flex transition-transform"><cs-icon name="chevron" /></span>
                  </button>
                  <a
                    [routerLink]="'/topics/' + b.id"
                    class="flex min-h-10 min-w-0 flex-1 items-center rounded-md px-1.5 text-sm hover:bg-surface-2"
                    [class.bg-surface-2]="current() === b.id"
                    [class.text-fg]="current() === b.id"
                    (click)="navigated.emit()"
                  >
                    <span class="min-w-0 flex-1 truncate">{{ b.label }}</span>
                    <span class="ml-2 font-mono text-xs text-subtle tabular-nums">{{ b.count }}</span>
                  </a>
                </div>
                @if (b.open) {
                  <ul class="mb-1 ml-4 border-l border-border">
                    @for (t of b.topics; track t.slug) {
                      <li>
                        <a
                          [routerLink]="'/topics/' + t.slug"
                          class="block min-h-9 px-3 py-1.5 text-sm text-muted hover:bg-surface-2/80 hover:text-fg"
                          [class.bg-surface-2]="current() === t.slug"
                          [class.text-fg]="current() === t.slug"
                          (click)="navigated.emit()"
                          >{{ t.title }}</a
                        >
                      </li>
                    }
                  </ul>
                }
              </div>
            }
          </div>
        }
      </nav>
    </div>
  `,
})
export class DocsSidebar {
  readonly navigated = output<void>();
  readonly q = signal("");
  readonly open = signal<Record<string, boolean>>({ ...DEFAULT_OPEN });
  private readonly router = inject(Router);
  readonly current = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      startWith(null),
      map(() => {
        const parts = this.router.url.split("?")[0].split("#")[0].split("/").filter(Boolean);
        return parts[0] === "topics" ? (parts[1] ?? "") : "";
      }),
    ),
    { initialValue: "" },
  );

  readonly groups = computed(() => {
    const q = this.q().toLowerCase();
    const open = this.open();
    return SECTION_GROUPS.map((group) => {
      const blocks = group.sections
        .map((id) => {
          const section = SECTION_BY_ID[id];
          const topics = ALL_NAV.filter(
            (t) => t.section === id && (!q || t.title.toLowerCase().includes(q) || t.slug.toLowerCase().includes(q)),
          );
          const label = group.sections.length === 1 ? group.title : section.short;
          const groupHit = !q || group.title.toLowerCase().includes(q) || section.title.toLowerCase().includes(q) || topics.length > 0;
          if (q && !topics.length && !groupHit) return null;
          return {
            id,
            label,
            topics,
            count: q ? topics.length : ALL_NAV.filter((t) => t.section === id).length,
            open: q ? true : Boolean(open[id]),
          };
        })
        .filter((x): x is NonNullable<typeof x> => x !== null);
      return { id: group.id, title: group.title, showTitle: group.sections.length > 1, blocks };
    }).filter((g) => g.blocks.length);
  });

  toggle(id: string) {
    this.open.update((o) => ({ ...o, [id]: !o[id] }));
  }
}
