"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { searchTopics, searchLabs, SECTIONS, LABS, PATHS } from "@/content";
import { cn } from "@/lib/utils";

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [q, setQ] = useState("");
  const router = useRouter();
  const topics = searchTopics(q, 12);
  const labs = q ? searchLabs(q, 6) : [];

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const go = (to: string) => {
    onOpenChange(false);
    router.push(to);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-[12vh]">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close search" onClick={() => onOpenChange(false)} />
      <Command
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-border)]"
        loop
      >
        <div className="flex items-center gap-2 border-b border-border px-3">
          <Search className="size-4 text-muted" />
          <Command.Input
            autoFocus
            value={q}
            onValueChange={setQ}
            placeholder="Search topics, labs, paths…"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-subtle"
          />
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted">No matches.</Command.Empty>
          {topics.length ? (
            <Command.Group heading="Topics" className="text-[11px] text-muted">
              {topics.map((t) => (
                <Command.Item
                  key={t.slug}
                  value={t.title + t.slug}
                  onSelect={() => go(`/topics/${t.slug}`)}
                  className={cn(
                    "flex cursor-pointer flex-col rounded-md px-3 py-2 text-sm text-fg aria-selected:bg-surface-2",
                  )}
                >
                  <span>{t.title}</span>
                  <span className="text-xs text-muted">{t.summary}</span>
                </Command.Item>
              ))}
            </Command.Group>
          ) : null}
          {labs.length ? (
            <Command.Group heading="Labs" className="text-[11px] text-muted">
              {labs.map((l) => (
                <Command.Item
                  key={l.id}
                  value={l.title + l.id}
                  onSelect={() => go(`/labs/${l.id}`)}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm aria-selected:bg-surface-2"
                >
                  {l.title}
                </Command.Item>
              ))}
            </Command.Group>
          ) : null}
          {!q ? (
            <>
              <Command.Group heading="Labs" className="text-[11px] text-muted">
                {LABS.slice(0, 6).map((l) => (
                  <Command.Item
                    key={l.id}
                    value={l.title}
                    onSelect={() => go(`/labs/${l.id}`)}
                    className="cursor-pointer rounded-md px-3 py-2 text-sm aria-selected:bg-surface-2"
                  >
                    {l.title}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Sections" className="text-[11px] text-muted">
                {SECTIONS.slice(0, 8).map((s) => (
                  <Command.Item
                    key={s.id}
                    value={s.title}
                    onSelect={() => go(`/topics/${s.id}`)}
                    className="cursor-pointer rounded-md px-3 py-2 text-sm aria-selected:bg-surface-2"
                  >
                    {s.title}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Paths" className="text-[11px] text-muted">
                {PATHS.map((p) => (
                  <Command.Item
                    key={p.id}
                    value={p.title}
                    onSelect={() => go(`/paths/${p.id}`)}
                    className="cursor-pointer rounded-md px-3 py-2 text-sm aria-selected:bg-surface-2"
                  >
                    {p.title}
                  </Command.Item>
                ))}
              </Command.Group>
            </>
          ) : null}
        </Command.List>
      </Command>
    </div>
  );
}
