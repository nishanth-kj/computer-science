import { Component } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-theory-page",
  imports: [SectionView],
  templateUrl: "./theory.html",
  styleUrl: "./theory.css",
})
export class TheoryPage {
  readonly id = "theory";
}
