import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-software-engineering-page",
  imports: [SectionView],
  templateUrl: "./software-engineering.html",
  styleUrl: "./software-engineering.css",
})
export class SoftwareEngineeringPage {
  readonly id = "software-engineering";
}
