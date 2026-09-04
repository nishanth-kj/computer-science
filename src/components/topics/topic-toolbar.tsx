"use client";

import { useEffect } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";

export function TopicToolbar({ slug }: { slug: string }) {
  const mark = useProgress((s) => s.markVisited);
  const toggle = useProgress((s) => s.toggleBookmark);
  const bookmarked = useProgress((s) => s.bookmarks.includes(slug));

  useEffect(() => {
    mark(slug);
  }, [slug, mark]);

  return (
    <div className="mb-4 flex justify-end">
      <Button size="sm" variant={bookmarked ? "subtle" : "ghost"} onClick={() => toggle(slug)}>
        <Bookmark className="size-4" />
        {bookmarked ? "Saved" : "Save"}
      </Button>
    </div>
  );
}
