import { Component, input } from "@angular/core";
import { Icon } from "@/app/components/ui/icon";

@Component({
  selector: "cs-callout",
  imports: [Icon],
  template: `
    <aside
      class="my-4 flex gap-3 rounded-lg border bg-surface px-4 py-3"
      [class.border-border]="kind() === 'note' || kind() === 'tip'"
      [class.border-warn/30]="kind() === 'warning'"
      [class.border-link/30]="kind() === 'interview'"
    >
      <cs-icon [name]="icon()" class="mt-0.5 shrink-0 text-muted" />
      <div class="min-w-0 text-sm leading-relaxed">
        <p class="mb-1 font-medium text-fg">{{ title() || label() }}</p>
        <div class="text-muted">{{ text() }}</div>
      </div>
    </aside>
  `,
})
export class Callout {
  readonly kind = input<"note" | "tip" | "warning" | "interview">("note");
  readonly title = input<string | undefined>(undefined);
  readonly text = input("");

  icon() {
    const k = this.kind();
    return k === "tip" ? "tip" : k === "warning" ? "warn" : k === "interview" ? "interview" : "info";
  }
  label() {
    const k = this.kind();
    return k === "tip" ? "Tip" : k === "warning" ? "Watch" : k === "interview" ? "Interview" : "Note";
  }
}
