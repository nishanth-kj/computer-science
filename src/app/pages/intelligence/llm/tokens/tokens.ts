import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-tokens",
  imports: [TopicView],
  templateUrl: "./tokens.html",
  styleUrl: "./tokens.css",
})
export class LlmTokensPage {}
