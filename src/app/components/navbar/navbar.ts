import { Component, HostListener, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeService } from "@/lib/theme";
import { ProgressService } from "@/lib/progress";
import { Icon } from "@/app/components/ui/icon";
import { SearchDialog } from "@/app/components/search/search";
import { SidebarState } from "@/app/components/sidebar/sidebar-state";

const NAV = [
  { href: "/phase-2", label: "Phase 2" },
  { href: "/library", label: "Library" },
  { href: "/paths", label: "Paths" },
] as const;

@Component({
  selector: "cs-navbar, cs-header",
  imports: [RouterLink, RouterLinkActive, Icon, SearchDialog],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  readonly theme = inject(ThemeService);
  readonly sidebar = inject(SidebarState);
  readonly progress = inject(ProgressService);
  readonly nav = NAV;
  readonly search = signal(false);
  readonly menu = signal(false);

  @HostListener("window:keydown", ["$event"])
  onKey(e: KeyboardEvent) {
    const t = e.target as HTMLElement | null;
    const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      this.search.set(true);
    } else if (!typing && e.key === "/" && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      this.search.set(true);
    } else if (!typing && e.key === "[") {
      e.preventDefault();
      this.sidebar.toggle();
    } else if (e.key === "Escape") {
      this.search.set(false);
      this.menu.set(false);
      this.sidebar.hideOverlay();
    }
  }
}

export { Navbar as AppHeader };
