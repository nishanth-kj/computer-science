import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-context-windows",
  imports: [TopicView],
  templateUrl: "./context-windows.html",
  styleUrl: "./context-windows.css",
})
export class LlmContextWindowsPage {}
