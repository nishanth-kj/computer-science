import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-system-design-page",
  imports: [SectionView],
  templateUrl: "./system-design.html",
})
export class SystemDesignPage {
  readonly id = "system-design";
}
