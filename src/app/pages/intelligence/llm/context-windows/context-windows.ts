import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-context-windows",
  imports: [TopicView],
  templateUrl: "./context-windows.html",
  styleUrl: "./context-windows.css",
})
export class LlmContextWindowsPage {}
