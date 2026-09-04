"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS, type SectionId } from "@/content";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const DEFAULT_OPEN: Record<string, boolean> = Object.fromEntries(
  SECTION_GROUPS.flatMap((g) => g.sections).map((id) => [id, true]),
);

function sectionOf(slug: string | undefined): SectionId | undefined {
  if (!slug) return undefined;
  if (slug in SECTION_BY_ID) return slug as SectionId;
  return ALL_NAV.find((t) => t.slug === slug)?.section;
}

function matches(title: string, slug: string, q: string) {
  if (!q) return true;
  const n = q.toLowerCase();
  return title.toLowerCase().includes(n) || slug.toLowerCase().includes(n);
}

export function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const params = useParams<{ slug?: string }>();
  const current = params?.slug;
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const section = sectionOf(current);
    return section ? { ...DEFAULT_OPEN, [section]: true } : { ...DEFAULT_OPEN };
  });

  useEffect(() => {
    const section = sectionOf(current);
    if (section) setOpen((o) => (o[section] ? o : { ...o, [section]: true }));
  }, [current]);

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="p-3">
        <Input
          placeholder="Filter topics"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="h-9"
        />
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <nav className="px-2 pb-10" aria-label="Topics">
          {SECTION_GROUPS.map((group) => {
            const blocks = group.sections
              .map((id) => {
                const section = SECTION_BY_ID[id];
                const topics = ALL_NAV.filter(
                  (t) => t.section === id && matches(t.title, t.slug, q),
                );
                const label = group.sections.length === 1 ? group.title : section.short;
                const groupHit = matches(group.title, group.id, q) || matches(section.title, id, q);
                if (q && !topics.length && !groupHit) return null;
                return { id, section, topics, label, count: ALL_NAV.filter((t) => t.section === id).length };
              })
              .filter(Boolean) as {
              id: SectionId;
              section: (typeof SECTION_BY_ID)[SectionId];
              topics: typeof ALL_NAV;
              label: string;
              count: number;
            }[];

            if (!blocks.length) return null;

            return (
              <div key={group.id} className="mb-3">
                {group.sections.length > 1 ? (
                  <p className="px-2 pt-3 pb-1 font-mono text-xs tracking-wider text-subtle uppercase">
                    {group.title}
                  </p>
                ) : null}
                {blocks.map((b) => {
                  const isOpen = q ? true : Boolean(open[b.id]);
                  return (
                    <div key={b.id}>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex size-9 shrink-0 items-center justify-center rounded-md text-subtle hover:bg-surface-2 hover:text-fg"
                          onClick={() => toggle(b.id)}
                          aria-expanded={isOpen}
                          aria-label={`${isOpen ? "Collapse" : "Expand"} ${b.label}`}
                        >
                          <ChevronRight
                            className={cn("size-3.5 transition-transform", isOpen && "rotate-90")}
                          />
                        </button>
                        <Link
                          href={`/docs/${b.id}`}
                          onClick={onNavigate}
                          className={cn(
                            "flex min-h-10 min-w-0 flex-1 items-center rounded-md px-1.5 text-sm hover:bg-surface-2",
                            current === b.id && "bg-surface-2 text-fg",
                          )}
                        >
                          <span className="min-w-0 flex-1 truncate">{b.label}</span>
                          <span className="ml-2 font-mono text-xs text-subtle tabular-nums">
                            {q ? b.topics.length : b.count}
                          </span>
                        </Link>
                      </div>
                      {isOpen ? (
                        <ul className="mb-1 ml-4 border-l border-border">
                          {b.topics.map((t) => (
                            <li key={t.slug}>
                              <Link
                                href={`/docs/${t.slug}`}
                                onClick={onNavigate}
                                className={cn(
                                  "block min-h-9 px-3 py-1.5 text-sm text-muted hover:bg-surface-2/80 hover:text-fg",
                                  current === t.slug && "bg-surface-2 text-fg",
                                )}
                              >
                                {t.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}
