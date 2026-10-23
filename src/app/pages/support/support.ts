import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SITE_CONFIG } from "@/app/site-config";
import { AnalyticsService } from "@/app/services/analytics";

@Component({
  selector: "cs-support-page",
  imports: [RouterLink],
  templateUrl: "./support.html",
  styleUrl: "../about/about.css",
})
export class SupportPage {
  private readonly analytics = inject(AnalyticsService);
  readonly supportUrl = SITE_CONFIG.supportUrl;
  readonly digitalProductsUrl = SITE_CONFIG.digitalProductsUrl;
  readonly newsletterUrl = SITE_CONFIG.newsletterUrl;

  trackClick(name: string) {
    this.analytics.trackEvent(name);
  }
}
