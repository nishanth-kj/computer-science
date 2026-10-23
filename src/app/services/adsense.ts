import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { SITE_CONFIG } from "@/app/site-config";

@Injectable({ providedIn: "root" })
export class AdsenseService {
  private readonly document = inject(DOCUMENT);
  private loading?: Promise<void>;

  readonly publisherId = SITE_CONFIG.adsensePublisherId;

  slot(name: keyof typeof SITE_CONFIG.adsenseSlots) {
    return SITE_CONFIG.adsenseSlots[name];
  }

  load(): Promise<void> {
    if (!this.publisherId) return Promise.reject(new Error("AdSense is not configured"));
    if (this.loading) return this.loading;

    this.loading = new Promise((resolve, reject) => {
      const script = this.document.createElement("script");
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(this.publisherId)}`;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("AdSense script failed to load"));
      this.document.head.appendChild(script);
    });
    return this.loading;
  }
}
