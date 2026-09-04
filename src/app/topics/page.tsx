import { LibraryPage } from "@/components/topics/library-page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Library",
  description:
    "Browse computer science topics by field — programming languages, networks, operating systems, databases, and more.",
  path: "/topics",
  keywords: ["computer science", "documentation", "programming", "networks", "operating systems", "databases"],
});

export default function Page() {
  return <LibraryPage />;
}
