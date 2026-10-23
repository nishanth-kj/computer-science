import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SITE_CONFIG } from "@/app/site-config";

@Component({
  selector: "cs-support-page",
  imports: [RouterLink],
  templateUrl: "./support.html",
  styleUrl: "../about/about.css",
})
export class SupportPage {
  readonly supportUrl = SITE_CONFIG.supportUrl;
  readonly digitalProductsUrl = SITE_CONFIG.digitalProductsUrl;
  readonly newsletterUrl = SITE_CONFIG.newsletterUrl;
}
