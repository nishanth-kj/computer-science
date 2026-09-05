import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { LAB_BY_ID, getTopic, SECTION_BY_ID } from "@/content";
import { hasViz } from "../lib/viz-ids";
import { Viz } from "../components/viz/registry";
import { map } from "rxjs";

@Component({
  selector: "cs-lab",
  imports: [RouterLink, Viz],
  template: `
    @if (lab() && hasViz(lab()!.id)) {
      <div class="mx-auto max-w-4xl px-4 py-10">
        <p class="text-xs text-muted">
          <a routerLink="/labs" class="hover:underline">Labs</a>
          <span aria-hidden="true"> / </span>
          <span>{{ SECTION_BY_ID[lab()!.section].short }}</span>
        </p>
        <h1 class="mt-2 font-display text-4xl tracking-tight">{{ lab()!.title }}</h1>
        <p class="mt-2 text-muted">{{ lab()!.blurb }}</p>
        <div class="mt-6"><cs-viz [id]="lab()!.id" /></div>
        <h2 class="mt-10 font-display text-xl">Related pages</h2>
        <ul class="mt-3 space-y-1">
          @for (slug of lab()!.topics; track slug) {
            <li>
              <a [routerLink]="'/topics/' + slug" class="text-sm text-link hover:underline">{{ getTopic(slug)?.title ?? slug }}</a>
            </li>
          }
        </ul>
      </div>
    } @else {
      <div class="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 class="font-display text-3xl">Lab not found</h1>
        <a routerLink="/labs" class="mt-6 inline-block text-sm text-link hover:underline">Back to labs</a>
      </div>
    }
  `,
})
export class LabPage {
  private readonly route = inject(ActivatedRoute);
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly getTopic = getTopic;
  readonly hasViz = hasViz;
  readonly id = toSignal(this.route.data.pipe(map((d) => String(d["id"] ?? this.route.snapshot.paramMap.get("id") ?? ""))), {
    initialValue: String(this.route.snapshot.data["id"] ?? this.route.snapshot.paramMap.get("id") ?? ""),
  });
  readonly lab = computed(() => LAB_BY_ID[this.id()]);
}
