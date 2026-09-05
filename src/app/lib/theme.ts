import { Injectable, signal } from "@angular/core";

type Theme = "dark" | "light";
const KEY = "cs-atlas-theme";

function readTheme(): Theme {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { state?: { theme?: Theme } };
      if (parsed.state?.theme === "light") return "light";
    }
  } catch {
    /* ignore */
  }
  return "dark";
}

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

@Injectable({ providedIn: "root" })
export class ThemeService {
  readonly theme = signal<Theme>(readTheme());

  constructor() {
    apply(this.theme());
  }

  toggle() {
    const next: Theme = this.theme() === "dark" ? "light" : "dark";
    this.theme.set(next);
    apply(next);
    localStorage.setItem(KEY, JSON.stringify({ state: { theme: next }, version: 0 }));
  }
}
