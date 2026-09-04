"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ALL_NAV, SECTIONS, getTopic } from "@/content";
import { Badge } from "@/components/ui/badge";
import type { Level, SectionId } from "@/content/types";

export function InterviewPage() {
  const [section, setSection] = useState<SectionId | "all">("all");
  const [level, setLevel] = useState<Level | "all">("all");
  const items = useMemo(() => {
    const slugs =
      section === "all" ? ALL_NAV.map((t) => t.slug) : ALL_NAV.filter((t) => t.section === section).map((t) => t.slug);
    const uniq = [...new Set(slugs)];
    const out: { slug: string; title: string; q: string; a: string; level: Level }[] = [];
    for (const slug of uniq) {
      const t = getTopic(slug);
      if (!t) continue;
      for (const iq of t.interview) {
        if (level !== "all" && iq.level !== level) continue;
        out.push({ slug, title: t.title, q: iq.q, a: iq.a, level: iq.level });
      }
    }
    return out.slice(0, 120);
  }, [section, level]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl tracking-tight">Interview mode</h1>
      <p className="mt-2 text-muted">
        Questions pulled from the documentation. Try to answer before you open the fold. Then read the page.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <select
          className="h-9 rounded-md border border-border bg-surface px-2 text-sm"
          value={section}
          onChange={(e) => setSection(e.target.value as SectionId | "all")}
        >
          <option value="all">All sections</option>
          {SECTIONS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.short}
            </option>
          ))}
        </select>
        <select
          className="h-9 rounded-md border border-border bg-surface px-2 text-sm"
          value={level}
          onChange={(e) => setLevel(e.target.value as Level | "all")}
        >
          <option value="all">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <ol className="mt-8 space-y-3">
        {items.map((it, i) => (
          <li key={it.slug + it.q} className="rounded-lg border border-border bg-surface px-4 py-3">
            <p className="text-[11px] text-muted">
              {i + 1}.{" "}
              <Link href={`/topics/${it.slug}`} className="hover:underline">
                {it.title}
              </Link>
            </p>
            <details>
              <summary className="cursor-pointer text-sm font-medium">{it.q}</summary>
              <p className="mt-2 text-sm text-muted">{it.a}</p>
            </details>
            <Badge className="mt-2" variant={it.level}>
              {it.level}
            </Badge>
          </li>
        ))}
      </ol>
    </div>
  );
}
