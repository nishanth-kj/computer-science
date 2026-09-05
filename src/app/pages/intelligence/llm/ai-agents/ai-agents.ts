import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-ai-agents",
  imports: [TopicView],
  templateUrl: "./ai-agents.html",
  styleUrl: "./ai-agents.css",
})
export class LlmAiAgentsPage {}
