import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-positional-encoding",
  imports: [TopicView],
  templateUrl: "./positional-encoding.html",
  styleUrl: "./positional-encoding.css",
})
export class LlmPositionalEncodingPage {}
