import { Component, OnInit, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PrivacyPreferences } from "@/app/services/privacy-preferences";

@Component({
  selector: "cs-cookie-banner",
  imports: [RouterLink],
  templateUrl: "./cookie-banner.html",
  styleUrl: "./cookie-banner.css",
})
export class CookieBanner implements OnInit {
  readonly visible = signal(false);
  private readonly privacy = inject(PrivacyPreferences);

  ngOnInit() {
    if (this.privacy.optionalServicesConfigured && !this.privacy.consent()) {
      // Small delay so it smoothly slides in without blocking initial paint.
      setTimeout(() => this.visible.set(true), 800);
    }
  }

  accept() {
    this.privacy.choose("accepted");
    this.visible.set(false);
  }

  decline() {
    this.privacy.choose("declined");
    this.visible.set(false);
  }
}
