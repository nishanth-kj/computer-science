import { Component, computed, input } from "@angular/core";

@Component({
  selector: "cs-badge",
  template: `<span class="badge" [class]="'badge--' + tone()">{{ value() }}</span>`,
  styles: `
    :host {
      display: inline-flex;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 0.15rem 0.5rem;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      background: var(--surface-2);
      color: var(--muted);
    }
    .badge--ok {
      background: color-mix(in oklab, var(--ok) 15%, transparent);
      color: var(--ok);
    }
    .badge--warn {
      background: color-mix(in oklab, var(--warn) 15%, transparent);
      color: var(--warn);
    }
    .badge--danger {
      background: color-mix(in oklab, var(--danger) 15%, transparent);
      color: var(--danger);
    }
    .badge--link {
      background: color-mix(in oklab, var(--link) 15%, transparent);
      color: var(--link);
    }
  `,
})
export class Badge {
  readonly value = input.required<string>();
  readonly tone = computed(() => {
    const v = this.value();
    if (v === "beginner") return "ok";
    if (v === "intermediate") return "warn";
    if (v === "advanced") return "danger";
    return "link";
  });
}
