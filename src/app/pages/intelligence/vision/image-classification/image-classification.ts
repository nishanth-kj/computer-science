import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-image-classification",
  imports: [TopicView],
  templateUrl: "./image-classification.html",
  styleUrl: "./image-classification.css",
})
export class VisionImageClassificationPage {}
