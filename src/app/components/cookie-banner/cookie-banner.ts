import { Component, OnInit, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

const CONSENT_KEY = "cs-cookie-consent";

@Component({
  selector: "cs-cookie-banner",
  imports: [RouterLink],
  templateUrl: "./cookie-banner.html",
  styleUrl: "./cookie-banner.css",
})
export class CookieBanner implements OnInit {
  readonly visible = signal(false);

  ngOnInit() {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        // Small delay so it smoothly slides in without blocking initial paint
        setTimeout(() => this.visible.set(true), 800);
      }
    } catch {
      // localStorage may be unavailable in private browsing
    }
  }

  accept() {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {}
    this.visible.set(false);
  }

  decline() {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
    } catch {}
    this.visible.set(false);
  }
}
