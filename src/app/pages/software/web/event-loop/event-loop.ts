import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-event-loop",
  imports: [TopicView],
  templateUrl: "./event-loop.html",
  styleUrl: "./event-loop.css",
})
export class WebEventLoopPage {}
