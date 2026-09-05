import { Component, HostListener, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemeService } from "@/lib/theme";
import { Icon } from "@/components/ui/icon";
import { SearchDialog } from "@/components/search/search";

const NAV = [
  { href: "/topics", label: "Topics" },
  { href: "/labs", label: "Labs" },
  { href: "/graph", label: "Graph" },
  { href: "/paths", label: "Paths" },
  { href: "/interview", label: "Interview" },
] as const;

@Component({
  selector: "cs-navbar, cs-header",
  imports: [RouterLink, RouterLinkActive, Icon, SearchDialog],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  readonly theme = inject(ThemeService);
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
    } else if (e.key === "Escape") {
      this.search.set(false);
      this.menu.set(false);
    }
  }
}

export { Navbar as AppHeader };
