import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-latency",
  imports: [TopicView],
  templateUrl: "./latency.html",
  styleUrl: "./latency.css",
})
export class NetworksLatencyPage {}
