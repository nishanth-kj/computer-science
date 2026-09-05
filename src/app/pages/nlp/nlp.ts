import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-nlp-page",
  imports: [SectionView],
  templateUrl: "./nlp.html",
})
export class NlpPage {
  readonly id = "nlp";
}
