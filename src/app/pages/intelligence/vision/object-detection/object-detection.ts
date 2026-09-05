import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-object-detection",
  imports: [TopicView],
  templateUrl: "./object-detection.html",
  styleUrl: "./object-detection.css",
})
export class VisionObjectDetectionPage {}
