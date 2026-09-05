import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-deep-learning-page",
  imports: [SectionView],
  templateUrl: "./deep-learning.html",
  styleUrl: "./deep-learning.css",
})
export class DeepLearningPage {
  readonly id = "deep-learning";
}
