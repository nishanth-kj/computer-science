import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-ir-page",
  imports: [SectionView],
  templateUrl: "./ir.html",
})
export class IrPage {
  readonly id = "ir";
}
