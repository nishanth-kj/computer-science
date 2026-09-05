import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-deep-learning-page",
  imports: [SectionView],
  templateUrl: "./deep-learning.html",
})
export class DeepLearningPage {
  readonly id = "deep-learning";
}
