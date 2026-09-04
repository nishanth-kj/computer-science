"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Toc() {
  const [items, setItems] = useState<{ id: string; label: string }[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const hs = [...document.querySelectorAll("article h2[id]")].map((el) => ({
      id: el.id,
      label: el.textContent?.trim() || el.id,
    }));
    setItems(hs);
    if (hs[0]) setActive(hs[0].id);
    const els = hs.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]?.target.id) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  if (!items.length) return null;

  return (
    <nav className="sticky top-20">
      <p className="mb-2 text-[11px] font-medium tracking-wide text-muted uppercase">On this page</p>
      <ul className="space-y-1 border-l border-border">
        {items.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block border-l-2 py-1 pl-3 text-[13px] text-muted hover:text-fg",
                active === h.id ? "border-primary text-fg" : "border-transparent",
              )}
            >
              {h.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}