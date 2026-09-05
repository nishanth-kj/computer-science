import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-system-calls",
  imports: [TopicView],
  templateUrl: "./system-calls.html",
  styleUrl: "./system-calls.css",
})
export class OsSystemCallsPage {}
