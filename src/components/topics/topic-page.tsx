import Link from "next/link";
import { notFound } from "next/navigation";
import { DocArticle } from "@/components/topics/article";
import { Toc } from "@/components/topics/toc";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTopic, SECTION_BY_ID } from "@/content";
import { topicJsonLd } from "@/lib/seo";
import type { SectionId } from "@/content/types";
import { JsonLd } from "./json-ld";
import { SectionPage } from "./section-page";
import { TopicToolbar } from "./topic-toolbar";

export function TopicPage({ slug }: { slug: string }) {
  if (slug in SECTION_BY_ID) {
    return <SectionPage id={slug as SectionId} />;
  }

  const topic = getTopic(slug);
  if (!topic) notFound();

  const section = SECTION_BY_ID[topic.section];

  return (
    <div className="flex">
      <JsonLd data={topicJsonLd(topic)} />
      <div className="min-w-0 flex-1 px-4 py-10 sm:px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/topics">Library</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/topics/${topic.section}`}>{section.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <TopicToolbar slug={slug} />
        <DocArticle topic={topic} />
      </div>
      <aside className="hidden w-52 shrink-0 px-3 py-10 xl:block">
        <Toc />
      </aside>
    </div>
  );
}
