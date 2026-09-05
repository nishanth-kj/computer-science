import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-research-page",
  imports: [SectionView],
  templateUrl: "./research.html",
})
export class ResearchPage {
  readonly id = "research";
}
