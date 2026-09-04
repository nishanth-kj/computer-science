import Link from "next/link";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/content";
import { websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "./json-ld";

export function HomePage() {
  return (
    <div className="px-4 py-10 sm:px-8">
      <JsonLd data={websiteJsonLd()} />
      <h1 className="font-display text-4xl tracking-tight">Topics</h1>
      <p className="mt-3 max-w-xl text-muted">
        {ALL_NAV.length} pages. Every topic is listed in the sidebar — scroll or filter to open one.
      </p>
      <ul className="mt-8 columns-1 gap-x-8 sm:columns-2">
        {SECTION_GROUPS.flatMap((g) => g.sections).map((id) => {
          const s = SECTION_BY_ID[id];
          const n = ALL_NAV.filter((t) => t.section === id).length;
          return (
            <li key={id} className="break-inside-avoid">
              <Link
                href={`/topics/${id}`}
                className="flex items-baseline justify-between gap-3 border-b border-border py-2 text-sm hover:text-link"
              >
                <span>{s.title}</span>
                <span className="font-mono text-xs text-subtle tabular-nums">{n}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
