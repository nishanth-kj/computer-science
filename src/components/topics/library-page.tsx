import Link from "next/link";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LibraryPage() {
  return (
    <div className="px-4 py-10 sm:px-8">
      <h1 className="font-display text-4xl tracking-tight">Library</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {ALL_NAV.length} topics. Programming, networks, operating systems, and databases are peers — pick a
        field in the sidebar, then a page.
      </p>
      <div className="mt-10 space-y-10">
        {SECTION_GROUPS.map((group) => (
          <section key={group.id}>
            <h2 className="font-display text-2xl tracking-tight">{group.title}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {group.sections.map((id) => {
                const s = SECTION_BY_ID[id];
                const topics = ALL_NAV.filter((t) => t.section === id);
                return (
                  <Card key={id}>
                    <CardHeader>
                      <div className="flex items-baseline justify-between gap-3">
                        <CardTitle>
                          <Link href={`/topics/${id}`} className="hover:underline">
                            {s.title}
                          </Link>
                        </CardTitle>
                        <span className="font-mono text-xs text-subtle tabular-nums">{topics.length}</span>
                      </div>
                      <CardDescription>{s.blurb}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {topics.slice(0, 4).map((t) => (
                          <li key={t.slug}>
                            <Link href={`/topics/${t.slug}`} className="text-sm text-link hover:underline">
                              {t.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
