import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-congestion-control",
  imports: [TopicView],
  templateUrl: "./congestion-control.html",
  styleUrl: "./congestion-control.css",
})
export class NetworksCongestionControlPage {}
