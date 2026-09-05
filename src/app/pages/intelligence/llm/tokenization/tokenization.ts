import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-tokenization",
  imports: [TopicView],
  templateUrl: "./tokenization.html",
  styleUrl: "./tokenization.css",
})
export class LlmTokenizationPage {}
