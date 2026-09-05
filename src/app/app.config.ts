import { ApplicationConfig, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter, TitleStrategy, withComponentInputBinding, withInMemoryScrolling } from "@angular/router";
import { routes } from "./app.routes";
import { SeoTitleStrategy } from "./seo";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: "enabled", anchorScrolling: "enabled" }),
    ),
    { provide: TitleStrategy, useClass: SeoTitleStrategy },
  ],
};
