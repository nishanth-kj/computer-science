import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { filter, map, startWith } from "rxjs";
import { describePath } from "@/lib/seo";

@Component({
  selector: "cs-breadcrumb",
  imports: [RouterLink],
  templateUrl: "./breadcrumb.html",
  styleUrl: "./breadcrumb.css",
})
export class Breadcrumb {
  private readonly router = inject(Router);
  readonly crumbs = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      startWith(null),
      map(() => {
        const path = this.router.url.split("?")[0].split("#")[0];
        return describePath(path).breadcrumbs;
      }),
    ),
    { initialValue: [] },
  );
}
