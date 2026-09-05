import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-actuators",
  imports: [TopicView],
  templateUrl: "./actuators.html",
  styleUrl: "./actuators.css",
})
export class RoboticsActuatorsPage {}
