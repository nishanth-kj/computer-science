import { Component, input } from "@angular/core";

@Component({
  selector: "cs-pipeline",
  template: `
    <ol class="my-4 flex" [class.flex-col]="vertical()" [class.flex-row]="!vertical()" [class.flex-wrap]="!vertical()">
      @for (step of steps(); track $index; let last = $last) {
        <li class="flex" [class.flex-col]="vertical()" [class.items-center]="!vertical()" [class.gap-2]="!vertical()">
          <div
            class="rounded-md border px-3 py-2 text-sm"
            [class.border-primary]="active() === $index"
            [class.bg-primary]="active() === $index"
            [class.text-primary-fg]="active() === $index"
            [class.border-border]="active() !== $index"
            [class.bg-surface]="active() !== $index"
          >
            {{ step }}
          </div>
          @if (!last) {
            <div class="bg-border-strong" [class]="vertical() ? 'mx-4 my-0.5 h-4 w-px' : 'h-px w-4'" aria-hidden="true"></div>
          }
        </li>
      }
    </ol>
  `,
})
export class Pipeline {
  readonly steps = input.required<string[]>();
  readonly active = input<number | undefined>(undefined);
  readonly vertical = input(true);
}
