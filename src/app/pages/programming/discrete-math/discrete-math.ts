import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-discrete-math-page",
  imports: [SectionView],
  templateUrl: "./discrete-math.html",
  styleUrl: "./discrete-math.css",
})
export class DiscreteMathPage {
  readonly id = "discrete-math";
}
