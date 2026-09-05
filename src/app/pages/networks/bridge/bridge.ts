import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-bridge",
  imports: [TopicView],
  templateUrl: "./bridge.html",
  styleUrl: "./bridge.css",
})
export class NetworksBridgePage {}
