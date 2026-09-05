import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-research-page",
  imports: [SectionView],
  templateUrl: "./research.html",
  styleUrl: "./research.css",
})
export class ResearchPage {
  readonly id = "research";
}
