import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-oop-page",
  imports: [SectionView],
  templateUrl: "./oop.html",
})
export class OopPage {
  readonly id = "oop";
}
