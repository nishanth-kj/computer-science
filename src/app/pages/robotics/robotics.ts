import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-robotics-page",
  imports: [SectionView],
  templateUrl: "./robotics.html",
})
export class RoboticsPage {
  readonly id = "robotics";
}
