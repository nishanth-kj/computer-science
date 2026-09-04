import { GraphPage } from "@/components/topics/graph-page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Knowledge graph",
  description: "Prerequisites and related links across computer science topics, as a navigable graph.",
  path: "/graph",
  keywords: ["knowledge graph", "computer science"],
});

export default function Page() {
  return <GraphPage />;
}
