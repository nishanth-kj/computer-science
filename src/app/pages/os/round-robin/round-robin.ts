import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-round-robin",
  imports: [TopicView],
  templateUrl: "./round-robin.html",
  styleUrl: "./round-robin.css",
})
export class OsRoundRobinPage {}
