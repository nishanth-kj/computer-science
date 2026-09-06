import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PATHS } from "@/lib/content";
import { ProgressService } from "@/lib/progress";

@Component({
  selector: "cs-paths",
  imports: [RouterLink],
  templateUrl: "./paths.html",
  styleUrl: "./paths.css",
})
export class Paths {
  readonly progress = inject(ProgressService);
  readonly paths = PATHS;

  completedFor(slugs: readonly string[]): number {
    const v = new Set(this.progress.visited());
    return slugs.filter((s) => v.has(s)).length;
  }

  percentFor(slugs: readonly string[]): number {
    if (!slugs.length) return 0;
    return Math.min(100, Math.round((this.completedFor(slugs) / slugs.length) * 100));
  }
}

