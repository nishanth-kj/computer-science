import type { Metadata } from "next";
import { LabPage } from "@/components/topics/lab-page";
import { LABS } from "@/content";
import { labMetadata } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return LABS.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return labMetadata(id);
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <LabPage id={id} />;
}
