import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-networks-page",
  imports: [SectionView],
  templateUrl: "./networks.html",
})
export class NetworksPage {
  readonly id = "networks";
}
