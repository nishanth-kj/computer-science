import { Component, computed, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { getSectionTopics, getTopic, SECTION_BY_ID } from "@/content";
import type { SectionId } from "@/content/types";
import { ProgressService } from "../lib/progress";
import { DocArticle } from "../components/topics/article";
import { Toc } from "../components/topics/toc";
import { Icon } from "../components/ui/icon";
import { map } from "rxjs";

@Component({
  selector: "cs-topic",
  imports: [RouterLink, DocArticle, Toc, Icon],
  template: `
    @if (section()) {
      <div class="mx-auto max-w-3xl px-4 py-10 sm:px-8">
        <nav class="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <ol class="flex flex-wrap items-center gap-1.5">
            <li><a routerLink="/topics" class="hover:text-fg">Library</a></li>
            <li aria-hidden="true">/</li>
            <li class="font-medium text-fg">{{ section()!.title }}</li>
          </ol>
        </nav>
        <p class="font-mono text-xs text-muted uppercase">Section</p>
        <h1 class="mt-2 font-display text-4xl tracking-tight">{{ section()!.title }}</h1>
        <p class="mt-3 text-lg text-muted">{{ section()!.blurb }}</p>
        <ol class="mt-8 divide-y divide-border border-y border-border">
          @for (t of sectionTopics(); track t.slug; let i = $index) {
            <li>
              <a [routerLink]="'/topics/' + t.slug" class="flex gap-4 py-3 hover:bg-surface-2/60">
                <span class="w-8 font-mono text-xs text-subtle tabular-nums">{{ pad(i + 1) }}</span>
                <span class="min-w-0">
                  <span class="block text-sm font-medium">{{ t.title }}</span>
                  <span class="block text-xs text-muted">{{ t.summary }}</span>
                </span>
              </a>
            </li>
          }
        </ol>
      </div>
    } @else if (topic()) {
      <div class="flex">
        <div class="min-w-0 flex-1 px-4 py-10 sm:px-8">
          <nav class="mb-6 text-sm text-muted" aria-label="Breadcrumb">
            <ol class="flex flex-wrap items-center gap-1.5">
              <li><a routerLink="/topics" class="hover:text-fg">Library</a></li>
              <li aria-hidden="true">/</li>
              <li>
                <a [routerLink]="'/topics/' + topic()!.section" class="hover:text-fg">{{ SECTION_BY_ID[topic()!.section].title }}</a>
              </li>
              <li aria-hidden="true">/</li>
              <li class="font-medium text-fg">{{ topic()!.title }}</li>
            </ol>
          </nav>
          <div class="mb-4 flex justify-end">
            <button type="button" class="inline-flex h-8 items-center gap-2 rounded-sm px-3 text-xs" [class.bg-surface-2]="bookmarked()" [class.hover:bg-surface-2]="!bookmarked()" (click)="progress.toggleBookmark(slug())">
              <cs-icon name="bookmark" />
              {{ bookmarked() ? "Saved" : "Save" }}
            </button>
          </div>
          <cs-article [topic]="topic()!" />
        </div>
        <aside class="hidden w-52 shrink-0 px-3 py-10 xl:block">
          <cs-toc />
        </aside>
      </div>
    } @else {
      <div class="mx-auto max-w-lg px-4 py-24 text-center">
        <p class="font-mono text-xs text-muted">404</p>
        <h1 class="mt-2 font-display text-3xl">This page was not found</h1>
        <a routerLink="/" class="mt-6 inline-block text-sm text-link hover:underline">Back to home</a>
      </div>
    }
  `,
})
export class TopicPage {
  private readonly route = inject(ActivatedRoute);
  readonly progress = inject(ProgressService);
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly slug = toSignal(this.route.data.pipe(map((d) => String(d["slug"] ?? this.route.snapshot.paramMap.get("slug") ?? ""))), {
    initialValue: String(this.route.snapshot.data["slug"] ?? this.route.snapshot.paramMap.get("slug") ?? ""),
  });
  readonly section = computed(() => SECTION_BY_ID[this.slug() as SectionId]);
  readonly topic = computed(() => getTopic(this.slug()));
  readonly sectionTopics = computed(() => (this.section() ? getSectionTopics(this.slug() as SectionId) : []));

  constructor() {
    effect(() => {
      const t = this.topic();
      if (t) this.progress.markVisited(t.slug);
    });
  }

  bookmarked() {
    return this.progress.isBookmarked(this.slug());
  }
  pad(n: number) {
    return String(n).padStart(2, "0");
  }
}
