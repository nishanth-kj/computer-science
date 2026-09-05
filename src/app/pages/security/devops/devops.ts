import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-devops-page",
  imports: [SectionView],
  templateUrl: "./devops.html",
  styleUrl: "./devops.css",
})
export class DevopsPage {
  readonly id = "devops";
}
