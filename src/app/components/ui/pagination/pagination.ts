import { Component, computed, effect, input, model } from "@angular/core";
import { Icon } from "@/app/components/ui/icon";

@Component({
  selector: "cs-pagination",
  imports: [Icon],
  templateUrl: "./pagination.html",
  styleUrl: "./pagination.css",
})
export class Pagination {
  readonly total = input.required<number>();
  readonly pageSize = input(20);
  readonly page = model(1);

  readonly pageCount = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));
  readonly from = computed(() => (this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1));
  readonly to = computed(() => Math.min(this.page() * this.pageSize(), this.total()));
  readonly numbers = computed(() => {
    const n = this.pageCount();
    const cur = Math.min(this.page(), n);
    if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1);
    const keep = new Set([1, n, cur, cur - 1, cur + 1]);
    const nums = [...keep].filter((p) => p >= 1 && p <= n).sort((a, b) => a - b);
    const out: (number | "gap")[] = [];
    let prev = 0;
    for (const p of nums) {
      if (prev && p > prev + 1) out.push("gap");
      out.push(p);
      prev = p;
    }
    return out;
  });

  constructor() {
    effect(() => {
      const max = this.pageCount();
      if (this.page() > max) this.page.set(max);
    });
  }

  go(n: number) {
    const next = Math.min(this.pageCount(), Math.max(1, n));
    if (next !== this.page()) this.page.set(next);
  }
}
