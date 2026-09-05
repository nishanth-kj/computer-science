import { Component, computed, inject, output, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/lib/content";
import { filter, map, startWith } from "rxjs";
import { Icon } from "@/components/ui/icon";

const DEFAULT_OPEN: Record<string, boolean> = Object.fromEntries(
  SECTION_GROUPS.flatMap((g) => g.sections).map((id) => [id, true]),
);

@Component({
  selector: "cs-sidebar",
  imports: [RouterLink, Icon],
  templateUrl: "./sidebar.html",
  styleUrl: "./sidebar.css",
})
export class Sidebar {
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

export { Sidebar as DocsSidebar };
