import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-ml-page",
  imports: [SectionView],
  templateUrl: "./ml.html",
  styleUrl: "./ml.css",
})
export class MlPage {
  readonly id = "ml";
}
