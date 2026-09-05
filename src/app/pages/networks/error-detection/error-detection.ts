import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-error-detection",
  imports: [TopicView],
  templateUrl: "./error-detection.html",
  styleUrl: "./error-detection.css",
})
export class NetworksErrorDetectionPage {}
