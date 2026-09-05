import { Component, input, signal } from "@angular/core";
import { Icon } from "@/components/ui/icon";

@Component({
  selector: "cs-code",
  imports: [Icon],
  template: `
    <div class="overflow-hidden rounded-lg border border-border bg-code">
      <div class="flex items-center justify-between gap-3 border-b border-border px-3 py-1.5">
        <span class="font-mono text-[11px] text-muted">{{ title() || lang() || "code" }}</span>
        <button type="button" class="inline-flex size-8 items-center justify-center rounded-sm text-muted hover:bg-surface-2 hover:text-fg" aria-label="Copy code" (click)="copy()">
          <cs-icon [name]="copied() ? 'check' : 'copy'" />
        </button>
      </div>
      <pre class="overflow-x-auto p-3 font-mono text-[13px] leading-relaxed"><code class="text-fg">{{ code() }}</code></pre>
    </div>
  `,
})
export class CodeBlock {
  readonly code = input.required<string>();
  readonly lang = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly copied = signal(false);

  async copy() {
    await navigator.clipboard.writeText(this.code());
    this.copied.set(true);
    window.setTimeout(() => this.copied.set(false), 1200);
  }
}
