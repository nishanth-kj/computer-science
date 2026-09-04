import Link from "next/link";
import { PATHS } from "@/content";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PathsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl tracking-tight">Learning paths</h1>
      <p className="mt-2 text-muted">A sequence, not a syllabus. Each step is a documentation page with a next link.</p>
      <div className="mt-8 grid gap-3">
        {PATHS.map((p) => (
          <Link key={p.id} href={`/paths/${p.id}`} className="block">
            <Card className="transition-colors hover:bg-surface-2">
              <CardHeader>
                <p className="text-xs text-muted">{p.audience}</p>
                <CardTitle className="mt-1 font-display text-2xl">{p.title}</CardTitle>
                <CardDescription>{p.blurb}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
