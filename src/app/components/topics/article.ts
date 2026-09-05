import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { exists, getTopic, type Topic } from "@/content";
import { SECTION_BY_ID } from "@/content/sections";
import type { ContentBlock } from "@/content/types";
import { hasViz } from "../../lib/viz-ids";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { Pipeline } from "./pipeline";
import { Viz } from "../viz/registry";

@Component({
  selector: "cs-article",
  imports: [RouterLink, Callout, CodeBlock, Pipeline, Viz],
  template: `
    <article class="mx-auto max-w-3xl pb-24">
      <p class="mb-3 text-xs tracking-wide text-muted uppercase">
        <a [routerLink]="'/topics/' + topic().section" class="hover:text-fg">{{ sectionTitle() }}</a>
      </p>
      <div class="flex flex-wrap items-center gap-2">
        <h1 class="font-display text-4xl leading-tight tracking-tight text-balance">{{ topic().title }}</h1>
        <span class="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium" [class]="levelClass(topic().level)">{{ topic().level }}</span>
      </div>
      <p class="mt-4 text-lg leading-relaxed text-muted">{{ topic().summary }}</p>

      <section class="scroll-mt-24">
        <h2 id="what-is-it" class="mt-10 mb-3 font-display text-2xl tracking-tight">What is it?</h2>
        <p class="text-[15px] leading-relaxed text-fg/90">{{ topic().what }}</p>
      </section>
      <section class="scroll-mt-24">
        <h2 id="why-it-matters" class="mt-10 mb-3 font-display text-2xl tracking-tight">Why does it matter?</h2>
        <p class="text-[15px] leading-relaxed text-fg/90">{{ topic().why }}</p>
      </section>
      <section class="scroll-mt-24">
        <h2 id="prerequisites" class="mt-10 mb-3 font-display text-2xl tracking-tight">Prerequisites</h2>
        @if (topic().prereqs.length) {
          <ul class="list-disc space-y-1 pl-5 text-[15px]">
            @for (s of topic().prereqs; track s) {
              @if (exists(s)) {
                <li><a [routerLink]="'/topics/' + s" class="text-link underline-offset-2 hover:underline">{{ titleOf(s) }}</a></li>
              }
            }
          </ul>
        } @else {
          <p class="text-[15px] leading-relaxed text-fg/90">None — you can start here.</p>
        }
      </section>
      <section class="scroll-mt-24">
        <h2 id="mental-model" class="mt-10 mb-3 font-display text-2xl tracking-tight">Mental model</h2>
        <p class="text-[15px] leading-relaxed text-fg/90">{{ topic().mental }}</p>
      </section>
      <section class="scroll-mt-24">
        <h2 id="visual-explanation" class="mt-10 mb-3 font-display text-2xl tracking-tight">Visual explanation</h2>
        @if (topic().steps?.length) {
          <cs-pipeline [steps]="topic().steps!" />
        } @else {
          <p class="text-[15px] leading-relaxed text-fg/90">{{ topic().mental }}</p>
        }
      </section>
      <section class="scroll-mt-24">
        <h2 id="how-it-works" class="mt-10 mb-3 font-display text-2xl tracking-tight">How it works</h2>
        <ol class="list-decimal space-y-2 pl-5 text-[15px] leading-relaxed">
          @for (p of topic().points; track p) {
            <li>{{ p }}</li>
          }
        </ol>
        @if (extra().length) {
          @for (b of extra(); track $index) {
            @switch (b.type) {
              @case ("p") { <p class="mt-3">{{ $any(b).text }}</p> }
              @case ("h3") { <h3 [id]="$any(b).id" class="mt-8 mb-2 font-display text-xl">{{ $any(b).text }}</h3> }
              @case ("ul") {
                <ul class="my-3 list-disc space-y-1 pl-5">
                  @for (it of $any(b).items; track it) { <li>{{ it }}</li> }
                </ul>
              }
              @case ("ol") {
                <ol class="my-3 list-decimal space-y-1 pl-5">
                  @for (it of $any(b).items; track it) { <li>{{ it }}</li> }
                </ol>
              }
              @case ("code") { <cs-code [code]="$any(b).code" [lang]="$any(b).lang" [title]="$any(b).title" /> }
              @case ("callout") { <cs-callout [kind]="$any(b).kind" [title]="$any(b).title" [text]="$any(b).text" /> }
              @case ("flow") { <cs-pipeline [steps]="$any(b).steps" /> }
              @case ("table") {
                <div class="my-4 overflow-x-auto">
                  <table class="w-full min-w-xl text-left text-sm">
                    <thead>
                      <tr class="border-b border-border text-muted">
                        @for (h of $any(b).headers; track h) { <th class="py-2 pr-4 font-medium">{{ h }}</th> }
                      </tr>
                    </thead>
                    <tbody>
                      @for (r of $any(b).rows; track $index) {
                        <tr class="border-b border-border/60">
                          @for (c of r; track $index) { <td class="py-2 pr-4 align-top">{{ c }}</td> }
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }
            }
          }
        }
      </section>
      @if (vizId()) {
        <section class="scroll-mt-24">
          <h2 id="interactive" class="mt-10 mb-3 font-display text-2xl tracking-tight">Interactive simulation</h2>
          <cs-viz [id]="vizId()!" />
          <p class="text-muted">
            Use play, step, and reset. Open the same lab full-page in
            <a [routerLink]="'/labs/' + vizId()" class="text-link hover:underline">Interactive Labs</a>.
          </p>
        </section>
      }
      @if (topic().code) {
        <section class="scroll-mt-24">
          <h2 id="code-example" class="mt-10 mb-3 font-display text-2xl tracking-tight">Code example</h2>
          <cs-code [code]="topic().code!.code" [lang]="topic().code!.lang" [title]="topic().code!.title" />
        </section>
      }
      @if (topic().implementation) {
        <section class="scroll-mt-24">
          <h2 id="internal-implementation" class="mt-10 mb-3 font-display text-2xl tracking-tight">Internal implementation</h2>
          <p class="text-[15px] leading-relaxed text-fg/90">{{ topic().implementation }}</p>
        </section>
      }
      @if (topic().complexity) {
        <section class="scroll-mt-24">
          <h2 id="complexity" class="mt-10 mb-3 font-display text-2xl tracking-tight">Complexity / trade-offs</h2>
          <dl class="grid gap-2 sm:grid-cols-2">
            @if (topic().complexity!.time) {
              <div class="rounded-lg border border-border bg-surface p-3">
                <dt class="text-xs text-muted">Time</dt>
                <dd class="font-mono text-sm">{{ topic().complexity!.time }}</dd>
              </div>
            }
            @if (topic().complexity!.space) {
              <div class="rounded-lg border border-border bg-surface p-3">
                <dt class="text-xs text-muted">Space</dt>
                <dd class="font-mono text-sm">{{ topic().complexity!.space }}</dd>
              </div>
            }
          </dl>
          <ul class="mt-3 list-disc space-y-1 pl-5">
            @for (t of topic().complexity!.tradeoffs; track t) {
              <li>{{ t }}</li>
            }
          </ul>
        </section>
      }
      <section class="scroll-mt-24">
        <h2 id="real-world" class="mt-10 mb-3 font-display text-2xl tracking-tight">Real-world usage</h2>
        <ul class="list-disc space-y-1 pl-5 text-[15px]">
          @for (u of topic().usage; track u) { <li>{{ u }}</li> }
        </ul>
      </section>
      <section class="scroll-mt-24">
        <h2 id="common-mistakes" class="mt-10 mb-3 font-display text-2xl tracking-tight">Common mistakes</h2>
        <ul class="list-disc space-y-1 pl-5 text-[15px]">
          @for (u of topic().mistakes; track u) { <li>{{ u }}</li> }
        </ul>
      </section>
      <section class="scroll-mt-24">
        <h2 id="interview-questions" class="mt-10 mb-3 font-display text-2xl tracking-tight">Interview questions</h2>
        <div class="space-y-2">
          @for (q of topic().interview; track q.q) {
            <details class="rounded-lg border border-border bg-surface px-4 py-3">
              <summary class="cursor-pointer text-sm font-medium">{{ q.q }}</summary>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ q.a }}</p>
              @if (q.followUp) {
                <p class="mt-2 text-xs text-subtle">Follow-up: {{ q.followUp }}</p>
              }
              <span class="mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium" [class]="levelClass(q.level)">{{ q.level }}</span>
            </details>
          }
        </div>
      </section>
      <section class="scroll-mt-24">
        <h2 id="related" class="mt-10 mb-3 font-display text-2xl tracking-tight">Related concepts</h2>
        <div class="flex flex-wrap gap-2">
          @for (s of topic().related; track s) {
            @if (exists(s)) {
              <a [routerLink]="'/topics/' + s" class="rounded-full border border-border px-3 py-1 text-sm hover:bg-surface-2">{{ titleOf(s) }}</a>
            }
          }
        </div>
      </section>
      @if (topic().next && exists(topic().next!)) {
        <section class="scroll-mt-24">
          <h2 id="next-topic" class="mt-10 mb-3 font-display text-2xl tracking-tight">Next topic</h2>
          <a [routerLink]="'/topics/' + topic().next" class="text-link hover:underline">{{ titleOf(topic().next!) }}</a>
        </section>
      }
    </article>
  `,
})
export class DocArticle {
  readonly topic = input.required<Topic>();
  exists = exists;

  sectionTitle() {
    return SECTION_BY_ID[this.topic().section].title;
  }
  extra(): ContentBlock[] {
    return (this.topic().extra ?? []).filter((b) => b.type !== "viz");
  }
  vizId() {
    const v = this.topic().viz;
    return v && hasViz(v) ? v : undefined;
  }
  titleOf(slug: string) {
    return getTopic(slug)?.title ?? SECTION_BY_ID[slug as keyof typeof SECTION_BY_ID]?.title ?? slug;
  }
  levelClass(level: string) {
    if (level === "beginner") return "bg-ok/15 text-ok";
    if (level === "intermediate") return "bg-warn/15 text-warn";
    if (level === "advanced") return "bg-danger/15 text-danger";
    return "bg-link/15 text-link";
  }
}
