import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-system-calls",
  imports: [TopicView],
  templateUrl: "./system-calls.html",
  styleUrl: "./system-calls.css",
})
export class OsSystemCallsPage {}
