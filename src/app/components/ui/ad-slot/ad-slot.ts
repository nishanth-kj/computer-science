import { Component, effect, inject, input, signal } from "@angular/core";
import { AdsenseService } from "@/app/services/adsense";
import { PrivacyPreferences } from "@/app/services/privacy-preferences";

@Component({
  selector: "cs-ad-slot",
  templateUrl: "./ad-slot.html",
  styleUrl: "./ad-slot.css",
  host: { "[class.ad-enabled]": "enabled()" },
})
export class AdSlot {
  readonly placement = input.required<"inArticle" | "libraryBanner">();
  readonly format = input<"auto" | "horizontal" | "rectangle">("auto");
  readonly enabled = signal(false);
  readonly adsense = inject(AdsenseService);
  private readonly privacy = inject(PrivacyPreferences);
  private requested = false;

  constructor() {
    effect(() => {
      const slot = this.adsense.slot(this.placement());
      if (this.privacy.consent() === "accepted" && slot && !this.requested) {
        this.requested = true;
        void this.adsense.load().then(() => {
          this.enabled.set(true);
          setTimeout(() => {
            try {
              window.adsbygoogle = window.adsbygoogle ?? [];
              window.adsbygoogle.push({});
            } catch {
              this.enabled.set(false);
            }
          });
        }).catch(() => this.enabled.set(false));
      }
    });
  }
}
