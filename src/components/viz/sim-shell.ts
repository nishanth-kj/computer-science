import { Component, input } from "@angular/core";
import { Sim } from "../../lib/sim";
import { Icon } from "../ui/icon";

@Component({
  selector: "cs-sim-shell",
  imports: [Icon],
  template: `
    <div class="overflow-hidden rounded-xl border border-border bg-surface">
      <div class="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        @if (title()) {
          <p class="mr-auto text-sm font-medium">{{ title() }}</p>
        } @else {
          <span class="mr-auto"></span>
        }
        <div class="flex items-center gap-1">
          <button type="button" class="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-surface-2" [attr.aria-label]="sim().playing() ? 'Pause' : 'Play'" (click)="sim().playing() ? sim().pause() : sim().play()">
            <cs-icon [name]="sim().playing() ? 'pause' : 'play'" />
          </button>
          <button type="button" class="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-surface-2" aria-label="Step" (click)="sim().next()">
            <cs-icon name="step" />
          </button>
          <button type="button" class="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-surface-2" aria-label="Reset" (click)="sim().reset()">
            <cs-icon name="reset" />
          </button>
        </div>
        <label class="flex items-center gap-2 text-[11px] text-muted">
          Speed
          <input type="range" min="1" max="5" [value]="sim().speed()" (input)="onSpeed($event)" class="w-20 accent-primary" />
        </label>
        <ng-content select="[extra]" />
      </div>
      <div class="p-3"><ng-content /></div>
    </div>
  `,
})
export class SimShell {
  readonly title = input<string | undefined>(undefined);
  readonly sim = input.required<Sim>();

  onSpeed(e: Event) {
    this.sim().setSpeed(Number((e.target as HTMLInputElement).value));
  }
}
