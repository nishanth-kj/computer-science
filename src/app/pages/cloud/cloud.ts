import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-cloud-page",
  imports: [SectionView],
  templateUrl: "./cloud.html",
  styleUrl: "./cloud.css",
})
export class CloudPage {
  readonly id = "cloud";
}
