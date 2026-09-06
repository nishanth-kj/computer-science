import { Injectable, computed, signal } from "@angular/core";
import { ALL_NAV } from "./content";

const KEY = "cs-atlas-progress";

type Persist = { visited: string[]; bookmarks: string[] };

function load(): Persist {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { state?: Persist };
      return {
        visited: parsed.state?.visited ?? [],
        bookmarks: parsed.state?.bookmarks ?? [],
      };
    }
  } catch {
    /* ignore */
  }
  return { visited: [], bookmarks: [] };
}

@Injectable({ providedIn: "root" })
export class ProgressService {
  private readonly state = signal<Persist>(load());
  readonly visited = computed(() => this.state().visited);
  readonly bookmarks = computed(() => this.state().bookmarks);
  readonly totalTopics = ALL_NAV.length;
  readonly visitedCount = computed(() => this.state().visited.length);
  readonly progressPercent = computed(() => {
    if (!this.totalTopics) return 0;
    return Math.min(100, Math.round((this.state().visited.length / this.totalTopics) * 100));
  });

  private save(next: Persist) {
    this.state.set(next);
    try {
      localStorage.setItem(KEY, JSON.stringify({ state: next, version: 0 }));
    } catch {
      /* ignore */
    }
  }

  markVisited(slug: string) {
    const s = this.state();
    if (s.visited.includes(slug)) return;
    this.save({ ...s, visited: [...s.visited, slug] });
  }

  toggleVisited(slug: string) {
    const s = this.state();
    const visited = s.visited.includes(slug)
      ? s.visited.filter((x) => x !== slug)
      : [...s.visited, slug];
    this.save({ ...s, visited });
  }

  isVisited(slug: string) {
    return this.state().visited.includes(slug);
  }

  toggleBookmark(slug: string) {
    const s = this.state();
    const bookmarks = s.bookmarks.includes(slug)
      ? s.bookmarks.filter((x) => x !== slug)
      : [...s.bookmarks, slug];
    this.save({ ...s, bookmarks });
  }

  isBookmarked(slug: string) {
    return this.state().bookmarks.includes(slug);
  }

  reset() {
    this.save({ visited: [], bookmarks: [] });
  }
}

