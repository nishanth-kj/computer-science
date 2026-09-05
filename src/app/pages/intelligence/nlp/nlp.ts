import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-nlp-page",
  imports: [SectionView],
  templateUrl: "./nlp.html",
  styleUrl: "./nlp.css",
})
export class NlpPage {
  readonly id = "nlp";
}
