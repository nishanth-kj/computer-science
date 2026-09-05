import { provideZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

export function pageProviders() {
  return [provideZonelessChangeDetection(), provideRouter([])];
}
