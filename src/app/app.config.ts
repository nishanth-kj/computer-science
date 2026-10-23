import { ApplicationConfig, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter, TitleStrategy, withComponentInputBinding, withInMemoryScrolling, withPreloading } from "@angular/router";
import { routes } from "./app.routes";
import { HubPreload } from "./hub-preload";
import { SeoTitleStrategy } from "./seo";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: "enabled", anchorScrolling: "enabled" }),
      withPreloading(HubPreload),
    ),
    { provide: TitleStrategy, useClass: SeoTitleStrategy },
  ],
};
