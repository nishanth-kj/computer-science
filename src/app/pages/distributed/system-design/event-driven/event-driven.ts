import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-event-driven",
  imports: [TopicView],
  templateUrl: "./event-driven.html",
  styleUrl: "./event-driven.css",
})
export class SystemDesignEventDrivenPage {}
