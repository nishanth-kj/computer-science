import { Injectable, signal } from "@angular/core";

const KEY = "cs-atlas-sidebar";

function readInitial() {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "1") return true;
    if (stored === "0") return false;
  } catch {
    /* ignore */
  }
  return typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
}

@Injectable({ providedIn: "root" })
export class SidebarState {
  readonly open = signal(readInitial());

  toggle() {
    this.set(!this.open());
  }

  show() {
    this.set(true);
  }

  hide() {
    this.set(false);
  }

  hideOverlay() {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      this.hide();
    }
  }

  private set(next: boolean) {
    this.open.set(next);
    try {
      localStorage.setItem(KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
  }
}
