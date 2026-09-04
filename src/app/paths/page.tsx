import { PathsPage } from "@/components/topics/paths-page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Learning paths",
  description: "Guided sequences of computer science documentation pages — not a syllabus, a next-step chain.",
  path: "/paths",
  keywords: ["learning paths", "computer science"],
});

export default function Page() {
  return <PathsPage />;
}
