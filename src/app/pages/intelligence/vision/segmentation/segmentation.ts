import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-segmentation",
  imports: [TopicView],
  templateUrl: "./segmentation.html",
  styleUrl: "./segmentation.css",
})
export class VisionSegmentationPage {}
