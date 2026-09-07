import { Component, signal } from "@angular/core";

@Component({
  selector: "cs-hash",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <div class="mb-3 flex flex-wrap gap-2">
        <select class="h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="mode()" (change)="mode.set($any($event.target).value)">
          <option value="chain">Chaining</option>
          <option value="probe">Linear probing</option>
        </select>
        <input class="h-8 w-28 rounded-md border border-border bg-surface px-2 text-sm" [value]="input()" (input)="input.set($any($event.target).value)" />
        <button type="button" class="h-8 rounded-sm bg-primary px-3 text-xs text-primary-fg" (click)="insert()">Insert</button>
        <button type="button" class="h-8 rounded-sm border border-border px-3 text-xs" (click)="keys.set(['cat', 'car', 'dog', 'cab'])">Reset</button>
      </div>
      <div class="grid grid-cols-5 gap-2">
        @for (b of buckets(); track $index; let i = $index) {
          <div class="min-h-24 rounded-md border border-border bg-bg p-2">
            <p class="font-mono text-[11px] text-muted">#{{ i }}</p>
            @for (k of b; track k) {
              <p class="font-mono text-xs text-fg">{{ k }}</p>
            }
          </div>
        }
      </div>
    </div>
  `,
})
export class HashCollisions {
  readonly mode = signal<"chain" | "probe">("chain");
  readonly keys = signal(["cat", "car", "dog", "cab"]);
  readonly input = signal("arc");
  readonly m = 5;
  buckets() {
    const m = this.m;
    const hash = (k: string) => k.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % m;
    const buckets: string[][] = Array.from({ length: m }, () => []);
    if (this.mode() === "chain") {
      for (const k of this.keys()) buckets[hash(k)].push(k);
    } else {
      const table: (string | null)[] = Array(m).fill(null);
      for (const k of this.keys()) {
        let i = hash(k);
        for (let t = 0; t < m; t++) {
          if (!table[i]) {
            table[i] = k;
            break;
          }
          i = (i + 1) % m;
        }
      }
      table.forEach((k, i) => {
        if (k) buckets[i].push(k);
      });
    }
    return buckets;
  }
  insert() {
    const v = this.input();
    if (v) this.keys.update((k) => [...k, v]);
  }
}
