import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-failure-detection",
  imports: [TopicView],
  templateUrl: "./failure-detection.html",
  styleUrl: "./failure-detection.css",
})
export class DistributedFailureDetectionPage {}
