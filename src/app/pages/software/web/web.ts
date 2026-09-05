import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-web-page",
  imports: [SectionView],
  templateUrl: "./web.html",
  styleUrl: "./web.css",
})
export class WebPage {
  readonly id = "web";
}
