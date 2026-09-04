import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getSectionTopics, SECTION_BY_ID } from "@/content";
import { abs, SITE_NAME } from "@/lib/seo";
import type { SectionId } from "@/content/types";
import { JsonLd } from "./json-ld";

export function SectionPage({ id }: { id: SectionId }) {
  const section = SECTION_BY_ID[id];
  const topics = getSectionTopics(id);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: section.title,
        description: section.blurb,
        url: abs(`/topics/${id}`),
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: abs("/") },
      },
      {
        "@type": "ItemList",
        itemListElement: topics.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.title,
          url: abs(`/topics/${t.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
          { "@type": "ListItem", position: 2, name: "Library", item: abs("/topics") },
          { "@type": "ListItem", position: 3, name: section.title, item: abs(`/topics/${id}`) },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-8">
      <JsonLd data={jsonLd} />
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/topics">Library</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{section.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="font-mono text-xs text-muted uppercase">Section</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">{section.title}</h1>
      <p className="mt-3 text-lg text-muted">{section.blurb}</p>
      <ol className="mt-8 divide-y divide-border border-y border-border">
        {topics.map((t, i) => (
          <li key={t.slug}>
            <Link href={`/topics/${t.slug}`} className="flex gap-4 py-3 hover:bg-surface-2/60">
              <span className="w-8 font-mono text-xs text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <span className="block text-sm font-medium">{t.title}</span>
                <span className="block text-xs text-muted">{t.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
