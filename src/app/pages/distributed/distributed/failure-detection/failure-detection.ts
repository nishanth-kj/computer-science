import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-failure-detection",
  imports: [TopicView],
  templateUrl: "./failure-detection.html",
  styleUrl: "./failure-detection.css",
})
export class DistributedFailureDetectionPage {}
