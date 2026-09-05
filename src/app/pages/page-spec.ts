import { provideZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = class {
    readonly root = null;
    readonly rootMargin = "";
    readonly thresholds: number[] = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  } as typeof IntersectionObserver;
}

export function pageProviders() {
  return [provideZonelessChangeDetection(), provideRouter([])];
}
