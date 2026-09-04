import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  visited: string[];
  bookmarks: string[];
  markVisited: (slug: string) => void;
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      visited: [],
      bookmarks: [],
      markVisited: (slug) =>
        set((s) => (s.visited.includes(slug) ? s : { visited: [...s.visited, slug] })),
      toggleBookmark: (slug) =>
        set((s) =>
          s.bookmarks.includes(slug)
            ? { bookmarks: s.bookmarks.filter((x) => x !== slug) }
            : { bookmarks: [...s.bookmarks, slug] },
        ),
      isBookmarked: (slug) => get().bookmarks.includes(slug),
    }),
    { name: "cs-atlas-progress" },
  ),
);
