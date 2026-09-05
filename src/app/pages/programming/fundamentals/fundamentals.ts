import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-fundamentals-page",
  imports: [SectionView],
  templateUrl: "./fundamentals.html",
  styleUrl: "./fundamentals.css",
})
export class FundamentalsPage {
  readonly id = "fundamentals";
}
