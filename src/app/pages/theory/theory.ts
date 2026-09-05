import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-theory-page",
  imports: [SectionView],
  templateUrl: "./theory.html",
})
export class TheoryPage {
  readonly id = "theory";
}
