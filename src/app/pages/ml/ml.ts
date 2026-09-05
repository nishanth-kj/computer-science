import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-ml-page",
  imports: [SectionView],
  templateUrl: "./ml.html",
})
export class MlPage {
  readonly id = "ml";
}
