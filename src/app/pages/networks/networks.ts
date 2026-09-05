import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-networks-page",
  imports: [SectionView],
  templateUrl: "./networks.html",
  styleUrl: "./networks.css",
})
export class NetworksPage {
  readonly id = "networks";
}
