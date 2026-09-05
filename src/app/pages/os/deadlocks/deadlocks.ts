import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-deadlocks",
  imports: [TopicView],
  templateUrl: "./deadlocks.html",
  styleUrl: "./deadlocks.css",
})
export class OsDeadlocksPage {}
