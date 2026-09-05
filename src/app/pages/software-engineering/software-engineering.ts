import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-software-engineering-page",
  imports: [SectionView],
  templateUrl: "./software-engineering.html",
})
export class SoftwareEngineeringPage {
  readonly id = "software-engineering";
}
