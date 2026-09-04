import type { Metadata } from "next";
import { TopicPage } from "@/components/topics/topic-page";
import { ALL_NAV, SECTION_BY_ID } from "@/content";
import { topicMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const sections = Object.keys(SECTION_BY_ID).map((slug) => ({ slug }));
  const topics = ALL_NAV.map((t) => ({ slug: t.slug }));
  return [...sections, ...topics];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return topicMetadata(slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <TopicPage slug={slug} />;
}
