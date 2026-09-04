import { LabsPage } from "@/components/topics/labs-page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Interactive labs",
  description:
    "Play, pause, and step through computer science simulations — networks, operating systems, databases, and algorithms.",
  path: "/labs",
  keywords: ["interactive labs", "computer science simulations"],
});

export default function Page() {
  return <LabsPage />;
}
