import Link from "next/link";
import { notFound } from "next/navigation";
import { Viz } from "@/components/viz/registry";
import { hasViz } from "@/components/viz/viz-ids";
import { LAB_BY_ID, getTopic, SECTION_BY_ID } from "@/content";
import { abs, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "./json-ld";

export function LabPage({ id }: { id: string }) {
  const lab = LAB_BY_ID[id];
  if (!lab || !hasViz(id)) notFound();
  const section = SECTION_BY_ID[lab.section];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: lab.title,
          description: lab.blurb,
          url: abs(`/labs/${id}`),
          isAccessibleForFree: true,
          educationalLevel: "beginner",
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: abs("/") },
          about: { "@type": "Thing", name: section.title },
        }}
      />
      <p className="text-xs text-muted">
        <Link href="/labs" className="hover:underline">
          Labs
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{section.short}</span>
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">{lab.title}</h1>
      <p className="mt-2 text-muted">{lab.blurb}</p>
      <div className="mt-6">
        <Viz id={id} />
      </div>
      <h2 className="mt-10 font-display text-xl">Related pages</h2>
      <ul className="mt-3 space-y-1">
        {lab.topics.map((slug) => (
          <li key={slug}>
            <Link href={`/topics/${slug}`} className="text-sm text-link hover:underline">
              {getTopic(slug)?.title ?? slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
