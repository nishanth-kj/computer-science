import { Component, computed, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PATH_BY_ID, getTopic } from "@/app/lib/content";
import { ProgressService } from "../../lib/progress";

@Component({
  selector: "cs-path-view",
  imports: [RouterLink],
  templateUrl: "./path-view.html",
})
export class PathView {
  readonly id = input.required<string>();
  readonly progress = inject(ProgressService);
  readonly getTopic = getTopic;
  readonly path = computed(() => PATH_BY_ID[this.id()]);
  readonly visited = this.progress.visited;

  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
