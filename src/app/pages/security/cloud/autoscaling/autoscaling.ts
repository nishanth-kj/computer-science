import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-autoscaling",
  imports: [TopicView],
  templateUrl: "./autoscaling.html",
  styleUrl: "./autoscaling.css",
})
export class CloudAutoscalingPage {}
