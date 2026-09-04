import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
};

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
      toggle: () => {
        const next = get().theme === "dark" ? "light" : "dark";
        applyTheme(next);
        set({ theme: next });
      },
    }),
    {
      name: "cs-atlas-theme",
      onRehydrateStorage: () => (state) => {
        applyTheme(state?.theme ?? "dark");
      },
    },
  ),
);

export function initTheme() {
  try {
    const raw = localStorage.getItem("cs-atlas-theme");
    if (raw) {
      const parsed = JSON.parse(raw) as { state?: { theme?: Theme } };
      applyTheme(parsed.state?.theme === "light" ? "light" : "dark");
      return;
    }
  } catch {
    /* ignore */
  }
  applyTheme("dark");
}
