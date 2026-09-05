import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-fundamentals-page",
  imports: [SectionView],
  templateUrl: "./fundamentals.html",
  styleUrl: "./fundamentals.css",
})
export class FundamentalsPage {
  readonly id = "fundamentals";
}
