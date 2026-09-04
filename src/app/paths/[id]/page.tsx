import type { Metadata } from "next";
import { PathPage } from "@/components/topics/path-page";
import { PATHS } from "@/content";
import { pathMetadata } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return PATHS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return pathMetadata(id);
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <PathPage id={id} />;
}
