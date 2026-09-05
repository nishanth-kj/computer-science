import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-tool-calling",
  imports: [TopicView],
  templateUrl: "./tool-calling.html",
  styleUrl: "./tool-calling.css",
})
export class LlmToolCallingPage {}
