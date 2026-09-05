import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { Pipeline } from "./pipeline";
import { Viz } from "@/components/viz/registry";
import { hasViz } from "@/components/viz/viz-ids";
import { exists, getTopic, type Topic } from "@/content";
import { SECTION_BY_ID } from "@/content/sections";
import type { ContentBlock, Level } from "@/content/types";
import { cn } from "@/lib/utils";

const LEVEL_VARIANT: Record<Level, "beginner" | "intermediate" | "advanced" | "research"> = {
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
  research: "research",
};

function TopicLink({ slug }: { slug: string }) {
  const t = getTopic(slug);
  if (t)
    return (
      <Link href={`/topics/${slug}`} className="text-link underline-offset-2 hover:underline">
        {t.title}
      </Link>
    );
  const section = SECTION_BY_ID[slug as keyof typeof SECTION_BY_ID];
  if (section)
    return (
      <Link href={`/topics/${slug}`} className="text-link underline-offset-2 hover:underline">
        {section.title}
      </Link>
    );
  return <span>{slug}</span>;
}

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "h3")
          return (
            <h3 key={i} id={b.id} className="mt-8 mb-2 font-display text-xl">
              {b.text}
            </h3>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="my-3 list-disc space-y-1 pl-5">
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={i} className="my-3 list-decimal space-y-1 pl-5">
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ol>
          );
        if (b.type === "table")
          return (
            <div key={i} className="my-4 overflow-x-auto">
              <table className="w-full min-w-xl text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted">
                    {b.headers.map((h) => (
                      <th key={h} className="py-2 pr-4 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, ri) => (
                    <tr key={ri} className="border-b border-border/60">
                      {r.map((c, ci) => (
                        <td key={ci} className="py-2 pr-4 align-top">
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        if (b.type === "code") return <CodeBlock key={i} code={b.code} lang={b.lang} title={b.title} />;
        if (b.type === "callout")
          return (
            <Callout key={i} kind={b.kind} title={b.title}>
              {b.text}
            </Callout>
          );
        if (b.type === "viz") return hasViz(b.id) ? <Viz key={i} id={b.id} /> : null;
        if (b.type === "flow") return <Pipeline key={i} steps={b.steps} />;
        return null;
      })}
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-24">
      <h2 id={id} className="mt-10 mb-3 font-display text-2xl tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-fg/90">{children}</div>
    </section>
  );
}

export const DOC_HEADINGS = [
  ["what-is-it", "What is it?"],
  ["why-it-matters", "Why does it matter?"],
  ["prerequisites", "Prerequisites"],
  ["mental-model", "Mental model"],
  ["visual-explanation", "Visual explanation"],
  ["how-it-works", "How it works"],
  ["step-by-step", "Step-by-step example"],
  ["interactive", "Interactive simulation"],
  ["code-example", "Code example"],
  ["internal-implementation", "Internal implementation"],
  ["complexity", "Complexity / trade-offs"],
  ["real-world", "Real-world usage"],
  ["common-mistakes", "Common mistakes"],
  ["interview-questions", "Interview questions"],
  ["related", "Related concepts"],
  ["next-topic", "Next topic"],
] as const;

export function DocArticle({ topic }: { topic: Topic }) {
  const section = SECTION_BY_ID[topic.section];
  const vizId = topic.viz && hasViz(topic.viz) ? topic.viz : undefined;
  const extra = topic.extra?.filter((b) => b.type !== "viz");
  return (
    <article className="mx-auto max-w-3xl pb-24">
      <p className="mb-3 text-xs tracking-wide text-muted uppercase">
        <Link href={`/topics/${topic.section}`} className="hover:text-fg">
          {section.title}
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="font-display text-4xl leading-tight tracking-tight text-balance">{topic.title}</h1>
        <Badge variant={LEVEL_VARIANT[topic.level]}>{topic.level}</Badge>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-muted">{topic.summary}</p>

      <Section id="what-is-it" title="What is it?">
        <p>{topic.what}</p>
      </Section>
      <Section id="why-it-matters" title="Why does it matter?">
        <p>{topic.why}</p>
      </Section>
      <Section id="prerequisites" title="Prerequisites">
        {topic.prereqs.length ? (
          <ul className="list-disc space-y-1 pl-5">
            {topic.prereqs.filter(exists).map((s) => (
              <li key={s}>
                <TopicLink slug={s} />
              </li>
            ))}
          </ul>
        ) : (
          <p>None — you can start here.</p>
        )}
      </Section>
      <Section id="mental-model" title="Mental model">
        <p>{topic.mental}</p>
      </Section>
      <Section id="visual-explanation" title="Visual explanation">
        {topic.steps?.length ? <Pipeline steps={topic.steps} /> : <p>{topic.mental}</p>}
      </Section>
      <Section id="how-it-works" title="How it works">
        <ol className="list-decimal space-y-2 pl-5">
          {topic.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
        {extra?.length ? <Blocks blocks={extra} /> : null}
      </Section>
      {topic.steps ? (
        <Section id="step-by-step" title="Step-by-step example">
          <p className="text-sm text-muted">Walk this path with a small instance in your head, then use the lab if there is one.</p>
        </Section>
      ) : null}
      {vizId ? (
        <Section id="interactive" title="Interactive simulation">
          <Viz id={vizId} />
          <p className="text-muted">
            Use play, step, and reset. Open the same lab full-page in{" "}
            <Link href={`/labs/${vizId}`} className="text-link hover:underline">
              Interactive Labs
            </Link>
            .
          </p>
        </Section>
      ) : null}
      {topic.code ? (
        <Section id="code-example" title="Code example">
          <CodeBlock code={topic.code.code} lang={topic.code.lang} title={topic.code.title} />
        </Section>
      ) : null}
      {topic.implementation ? (
        <Section id="internal-implementation" title="Internal implementation">
          <p>{topic.implementation}</p>
        </Section>
      ) : null}
      {topic.complexity ? (
        <Section id="complexity" title="Complexity / trade-offs">
          <dl className="grid gap-2 sm:grid-cols-2">
            {topic.complexity.time ? (
              <div className="rounded-lg border border-border bg-surface p-3">
                <dt className="text-xs text-muted">Time</dt>
                <dd className="font-mono text-sm">{topic.complexity.time}</dd>
              </div>
            ) : null}
            {topic.complexity.space ? (
              <div className="rounded-lg border border-border bg-surface p-3">
                <dt className="text-xs text-muted">Space</dt>
                <dd className="font-mono text-sm">{topic.complexity.space}</dd>
              </div>
            ) : null}
          </dl>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {topic.complexity.tradeoffs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>
      ) : null}
      <Section id="real-world" title="Real-world usage">
        <ul className="list-disc space-y-1 pl-5">
          {topic.usage.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </Section>
      <Section id="common-mistakes" title="Common mistakes">
        <ul className="list-disc space-y-1 pl-5">
          {topic.mistakes.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </Section>
      <Section id="interview-questions" title="Interview questions">
        <div className="space-y-2">
          {topic.interview.map((q) => (
            <details key={q.q} className="rounded-lg border border-border bg-surface px-4 py-3">
              <summary className={cn("cursor-pointer text-sm font-medium")}>{q.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{q.a}</p>
              {q.followUp ? <p className="mt-2 text-xs text-subtle">Follow-up: {q.followUp}</p> : null}
              <Badge className="mt-2" variant={LEVEL_VARIANT[q.level]}>
                {q.level}
              </Badge>
            </details>
          ))}
        </div>
      </Section>
      <Section id="related" title="Related concepts">
        <div className="flex flex-wrap gap-2">
          {topic.related.filter(exists).map((s) => (
            <Link
              key={s}
              href={`/topics/${s}`}
              className="rounded-full border border-border px-3 py-1 text-sm hover:bg-surface-2"
            >
              {getTopic(s)?.title ?? SECTION_BY_ID[s as keyof typeof SECTION_BY_ID]?.title ?? s}
            </Link>
          ))}
        </div>
      </Section>
      {topic.next && exists(topic.next) ? (
        <Section id="next-topic" title="Next topic">
          <Link href={`/topics/${topic.next}`} className="text-link hover:underline">
            {getTopic(topic.next)?.title ?? SECTION_BY_ID[topic.next as keyof typeof SECTION_BY_ID]?.title}
          </Link>
        </Section>
      ) : null}
    </article>
  );
}
