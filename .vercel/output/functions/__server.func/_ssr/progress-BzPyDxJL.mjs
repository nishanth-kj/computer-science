import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-BzPyDxJL.js
var useProgress = create()(persist((set, get) => ({
	visited: [],
	bookmarks: [],
	markVisited: (slug) => set((s) => s.visited.includes(slug) ? s : { visited: [...s.visited, slug] }),
	toggleBookmark: (slug) => set((s) => s.bookmarks.includes(slug) ? { bookmarks: s.bookmarks.filter((x) => x !== slug) } : { bookmarks: [...s.bookmarks, slug] }),
	isBookmarked: (slug) => get().bookmarks.includes(slug)
}), { name: "cs-atlas-progress" }));
//#endregion
export { useProgress as t };
