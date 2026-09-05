import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-rag",
  imports: [TopicView],
  templateUrl: "./rag.html",
  styleUrl: "./rag.css",
})
export class LlmRagPage {}
