import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-dsa-page",
  imports: [SectionView],
  templateUrl: "./dsa.html",
})
export class DsaPage {
  readonly id = "dsa";
}
