import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-vision-page",
  imports: [SectionView],
  templateUrl: "./vision.html",
  styleUrl: "./vision.css",
})
export class VisionPage {
  readonly id = "vision";
}
