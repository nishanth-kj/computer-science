import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-mobile-page",
  imports: [SectionView],
  templateUrl: "./mobile.html",
  styleUrl: "./mobile.css",
})
export class MobilePage {
  readonly id = "mobile";
}
