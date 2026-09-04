import { InterviewPage } from "@/components/topics/interview-page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Interview mode",
  description: "Computer science interview questions pulled from the documentation, with answers you can reveal.",
  path: "/interview",
  keywords: ["interview questions", "computer science"],
});

export default function Page() {
  return <InterviewPage />;
}
