import Link from "next/link";
import { LABS, SECTION_BY_ID, SECTION_GROUPS } from "@/content";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LabsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl tracking-tight">Interactive labs</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Play, pause, step, reset. Labs are grouped the same way as the docs — no topic is featured above the others.
      </p>
      <div className="mt-10 space-y-10">
        {SECTION_GROUPS.map((group) => {
          const labs = LABS.filter((l) => group.sections.includes(l.section));
          if (!labs.length) return null;
          return (
            <section key={group.id}>
              <h2 className="font-display text-2xl tracking-tight">{group.title}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {labs.map((l) => (
                  <Link key={l.id} href={`/labs/${l.id}`} className="block">
                    <Card className="h-full transition-colors hover:bg-surface-2">
                      <CardHeader>
                        <p className="text-xs tracking-wide text-muted uppercase">{SECTION_BY_ID[l.section].short}</p>
                        <CardTitle className="mt-1">{l.title}</CardTitle>
                        <CardDescription>{l.blurb}</CardDescription>
                        <p className="mt-2 font-mono text-xs text-subtle">{l.controls.join(" · ")}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
