import { AfterViewInit, Component, DestroyRef, inject, signal } from "@angular/core";

@Component({
  selector: "cs-toc",
  template: `
    @if (items().length) {
      <nav class="sticky top-20">
        <p class="mb-2 text-[11px] font-medium tracking-wide text-muted uppercase">On this page</p>
        <ul class="space-y-1 border-l border-border">
          @for (h of items(); track h.id) {
            <li>
              <a
                [href]="'#' + h.id"
                class="block border-l-2 py-1 pl-3 text-[13px] text-muted hover:text-fg"
                [class.border-primary]="active() === h.id"
                [class.text-fg]="active() === h.id"
                [class.border-transparent]="active() !== h.id"
                >{{ h.label }}</a
              >
            </li>
          }
        </ul>
      </nav>
    }
  `,
})
export class Toc implements AfterViewInit {
  readonly items = signal<{ id: string; label: string }[]>([]);
  readonly active = signal("");
  private readonly destroy = inject(DestroyRef);

  ngAfterViewInit() {
    queueMicrotask(() => this.scan());
  }

  private scan() {
    const hs = [...document.querySelectorAll("article h2[id]")].map((el) => ({
      id: el.id,
      label: el.textContent?.trim() || el.id,
    }));
    this.items.set(hs);
    if (hs[0]) this.active.set(hs[0].id);
    const els = hs.map((h) => document.getElementById(h.id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]?.target.id) this.active.set(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 1] },
    );
    els.forEach((el) => obs.observe(el));
    this.destroy.onDestroy(() => obs.disconnect());
  }
}
