import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { PATH_BY_ID, getTopic } from "@/content";
import { ProgressService } from "../lib/progress";
import { map } from "rxjs";

@Component({
  selector: "cs-path",
  imports: [RouterLink],
  template: `
    @if (path()) {
      <div class="mx-auto max-w-3xl px-4 py-10">
        <p class="text-xs text-muted"><a routerLink="/paths" class="hover:underline">Paths</a></p>
        <h1 class="mt-2 font-display text-4xl tracking-tight">{{ path()!.title }}</h1>
        <p class="mt-2 text-muted">{{ path()!.blurb }}</p>
        <ol class="mt-8 space-y-2">
          @for (slug of path()!.slugs; track slug; let i = $index) {
            <li>
              <a
                [routerLink]="'/topics/' + slug"
                class="flex items-start gap-4 rounded-lg border px-4 py-3 hover:bg-surface-2"
                [class.border-ok/40]="visited().includes(slug)"
                [class.border-border]="!visited().includes(slug)"
              >
                <span class="w-8 font-mono text-xs text-subtle tabular-nums">{{ pad(i + 1) }}</span>
                <span>
                  <span class="block text-sm font-medium">{{ getTopic(slug)?.title ?? slug }}</span>
                  <span class="block text-xs text-muted">{{ getTopic(slug)?.summary }}</span>
                </span>
              </a>
            </li>
          }
        </ol>
      </div>
    } @else {
      <div class="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 class="font-display text-3xl">Path not found</h1>
        <a routerLink="/paths" class="mt-6 inline-block text-sm text-link hover:underline">Back to paths</a>
      </div>
    }
  `,
})
export class PathPage {
  private readonly route = inject(ActivatedRoute);
  readonly progress = inject(ProgressService);
  readonly getTopic = getTopic;
  readonly id = toSignal(this.route.data.pipe(map((d) => String(d["id"] ?? this.route.snapshot.paramMap.get("id") ?? ""))), {
    initialValue: String(this.route.snapshot.data["id"] ?? this.route.snapshot.paramMap.get("id") ?? ""),
  });
  readonly path = computed(() => PATH_BY_ID[this.id()]);
  readonly visited = this.progress.visited;
  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
