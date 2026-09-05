import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-sessions",
  imports: [TopicView],
  templateUrl: "./sessions.html",
  styleUrl: "./sessions.css",
})
export class WebSessionsPage {}
