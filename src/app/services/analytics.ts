import { DOCUMENT } from "@angular/common";
import { DestroyRef, Injectable, effect, inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { PrivacyPreferences } from "./privacy-preferences";
import { SITE_CONFIG } from "@/app/site-config";

@Injectable({ providedIn: "root" })
export class AnalyticsService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly privacy = inject(PrivacyPreferences);
  private readonly destroyRef = inject(DestroyRef);
  private loaded = false;

  constructor() {
    effect(() => {
      if (this.privacy.consent() === "accepted") this.load();
    });

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => this.pageView(event.urlAfterRedirects));
  }

  private load() {
    const id = SITE_CONFIG.analyticsMeasurementId;
    if (!id || this.loaded) return;
    this.loaded = true;

    const script = this.document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    this.document.head.appendChild(script);

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => window.dataLayer!.push(args);
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true, send_page_view: false });
    this.pageView(this.router.url);
  }

  trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
    if (!this.loaded || !window.gtag) return;
    window.gtag("event", name, params);
  }

  private pageView(path: string) {
    if (!this.loaded || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: this.document.title,
      page_location: this.document.location.href,
    });
  }
}
