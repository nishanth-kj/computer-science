import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-vision-page",
  imports: [SectionView],
  templateUrl: "./vision.html",
})
export class VisionPage {
  readonly id = "vision";
}
