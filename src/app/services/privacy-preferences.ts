import { Injectable, signal } from "@angular/core";
import { OPTIONAL_SERVICES_CONFIGURED, type ConsentChoice } from "@/app/site-config";

export const CONSENT_KEY = "cs-cookie-consent";

@Injectable({ providedIn: "root" })
export class PrivacyPreferences {
  readonly optionalServicesConfigured = OPTIONAL_SERVICES_CONFIGURED;
  readonly consent = signal<ConsentChoice | null>(readConsent());

  choose(value: ConsentChoice) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Storage can be unavailable; the in-memory choice still applies for this visit.
    }
    this.consent.set(value);
  }
}

function readConsent(): ConsentChoice | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}
