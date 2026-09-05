import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-deadlocks",
  imports: [TopicView],
  templateUrl: "./deadlocks.html",
  styleUrl: "./deadlocks.css",
})
export class OsDeadlocksPage {}
