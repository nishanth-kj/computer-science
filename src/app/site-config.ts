export type ConsentChoice = "accepted" | "declined";

type SiteConfig = {
  analyticsMeasurementId: string;
  adsensePublisherId: string;
  adsenseSlots: {
    inArticle: string;
    libraryBanner: string;
  };
  supportUrl: string;
  digitalProductsUrl: string;
  newsletterUrl: string;
};

declare global {
  interface Window {
    __CS_SITE_CONFIG__?: Partial<SiteConfig>;
    adsbygoogle?: unknown[];
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const raw = typeof window === "undefined" ? undefined : window.__CS_SITE_CONFIG__;

export const SITE_CONFIG: SiteConfig = {
  analyticsMeasurementId: validAnalyticsId(raw?.analyticsMeasurementId) ? raw!.analyticsMeasurementId! : "",
  adsensePublisherId: validPublisherId(raw?.adsensePublisherId) ? raw!.adsensePublisherId! : "",
  adsenseSlots: {
    inArticle: validSlotId(raw?.adsenseSlots?.inArticle) ? raw!.adsenseSlots!.inArticle! : "",
    libraryBanner: validSlotId(raw?.adsenseSlots?.libraryBanner) ? raw!.adsenseSlots!.libraryBanner! : "",
  },
  supportUrl: validHttpsUrl(raw?.supportUrl) ? raw!.supportUrl! : "",
  digitalProductsUrl: validHttpsUrl(raw?.digitalProductsUrl) ? raw!.digitalProductsUrl! : "",
  newsletterUrl: validHttpsUrl(raw?.newsletterUrl) ? raw!.newsletterUrl! : "",
};

export const OPTIONAL_SERVICES_CONFIGURED = Boolean(
  SITE_CONFIG.analyticsMeasurementId ||
    (SITE_CONFIG.adsensePublisherId && Object.values(SITE_CONFIG.adsenseSlots).some(Boolean)),
);

function validAnalyticsId(value: unknown): value is string {
  return typeof value === "string" && /^G-[A-Z0-9]+$/.test(value);
}

function validPublisherId(value: unknown): value is string {
  return typeof value === "string" && /^ca-pub-\d{16}$/.test(value);
}

function validSlotId(value: unknown): value is string {
  return typeof value === "string" && /^\d+$/.test(value);
}
