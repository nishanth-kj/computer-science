import { Component, AfterViewInit, input, signal } from "@angular/core";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

@Component({
  selector: "cs-ad-slot",
  templateUrl: "./ad-slot.html",
  styleUrl: "./ad-slot.css",
})
export class AdSlot implements AfterViewInit {
  readonly slot = input<string>("default");
  readonly format = input<"auto" | "horizontal" | "rectangle">("auto");
  readonly enabled = signal(false);

  ngAfterViewInit() {
    // If window.adsbygoogle is loaded by index.html verification script, push the ad unit
    if (typeof window !== "undefined" && typeof window.adsbygoogle !== "undefined") {
      try {
        window.adsbygoogle.push({});
        this.enabled.set(true);
      } catch {
        // Safe fallback if blocked by adblockers or in dev
      }
    }
  }
}
