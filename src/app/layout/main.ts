import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from "@angular/router";
import { AppHeader } from "@/app/components/navbar/navbar";
import { TopicFrame } from "@/app/components/topic-frame/topic-frame";
import { CookieBanner } from "@/app/components/cookie-banner/cookie-banner";
import { AnalyticsService } from "@/app/services/analytics";
import { filter, map } from "rxjs";

@Component({
  selector: "cs-main-layout",
  imports: [RouterOutlet, AppHeader, TopicFrame, CookieBanner],
  templateUrl: "./main.html",
  styleUrl: "./main.css",
})
export class MainLayout {
  private readonly analytics = inject(AnalyticsService);
  private readonly router = inject(Router);
  readonly loading = toSignal(
    this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError,
      ),
      map((e) => e instanceof NavigationStart),
    ),
    { initialValue: false },
  );
}
