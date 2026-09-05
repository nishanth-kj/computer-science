import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-feature-detection",
  imports: [TopicView],
  templateUrl: "./feature-detection.html",
  styleUrl: "./feature-detection.css",
})
export class VisionFeatureDetectionPage {}
