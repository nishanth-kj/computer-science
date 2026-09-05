import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-robotics-page",
  imports: [SectionView],
  templateUrl: "./robotics.html",
  styleUrl: "./robotics.css",
})
export class RoboticsPage {
  readonly id = "robotics";
}
