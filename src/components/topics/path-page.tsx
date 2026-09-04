"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { PATH_BY_ID, getTopic } from "@/content";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function PathPage({ id }: { id: string }) {
  const path = PATH_BY_ID[id];
  if (!path) notFound();
  const visited = useProgress((s) => s.visited);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs text-muted">
        <Link href="/paths" className="hover:underline">
          Paths
        </Link>
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">{path.title}</h1>
      <p className="mt-2 text-muted">{path.blurb}</p>
      <ol className="mt-8 space-y-2">
        {path.slugs.map((slug, i) => {
          const t = getTopic(slug);
          const done = visited.includes(slug);
          return (
            <li key={slug}>
              <Link
                href={`/docs/${slug}`}
                className={cn(
                  "flex items-start gap-4 rounded-lg border border-border px-4 py-3 hover:bg-surface-2",
                  done && "border-ok/40",
                )}
              >
                <span className="w-8 font-mono text-xs text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-sm font-medium">{t?.title ?? slug}</span>
                  <span className="block text-xs text-muted">{t?.summary}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
