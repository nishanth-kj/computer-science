"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { Logo } from "./logo";
import { SearchDialog } from "./search-dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/docs", label: "Docs" },
  { href: "/labs", label: "Labs" },
  { href: "/graph", label: "Graph" },
  { href: "/paths", label: "Paths" },
  { href: "/interview", label: "Interview" },
] as const;

function navActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppHeader() {
  const theme = useTheme((s) => s.theme);
  const toggle = useTheme((s) => s.toggle);
  const pathname = usePathname();
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      } else if (!typing && e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearch(true);
      } else if (e.key === "Escape") setSearch(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-[88rem] items-center gap-3 px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon-sm" variant="ghost" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <SheetTitle className="mb-4">
                <Logo />
              </SheetTitle>
              <nav className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm hover:bg-surface-2",
                      navActive(pathname, n.href) && "bg-surface-2 text-fg",
                    )}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Logo />
          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-fg",
                  navActive(pathname, n.href) && "text-fg bg-surface-2",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-1">
            <Button
              variant="outline"
              className="hidden h-9 w-56 justify-between px-3 text-muted sm:inline-flex"
              onClick={() => setSearch(true)}
            >
              <span className="flex items-center gap-2">
                <Search className="size-3.5" />
                Search
              </span>
              <kbd className="font-mono text-[10px] text-subtle">⌘K</kbd>
            </Button>
            <Button size="icon-sm" variant="ghost" className="sm:hidden" onClick={() => setSearch(true)} aria-label="Search">
              <Search className="size-4" />
            </Button>
            <Button size="icon-sm" variant="ghost" onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          </div>
        </div>
      </header>
      <SearchDialog open={search} onOpenChange={setSearch} />
    </>
  );
}
