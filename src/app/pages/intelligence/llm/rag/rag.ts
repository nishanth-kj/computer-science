import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-rag",
  imports: [TopicView],
  templateUrl: "./rag.html",
  styleUrl: "./rag.css",
})
export class LlmRagPage {}
