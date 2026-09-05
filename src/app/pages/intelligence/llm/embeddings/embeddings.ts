import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-embeddings",
  imports: [TopicView],
  templateUrl: "./embeddings.html",
  styleUrl: "./embeddings.css",
})
export class LlmEmbeddingsPage {}
