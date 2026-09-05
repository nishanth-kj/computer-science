import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-inference",
  imports: [TopicView],
  templateUrl: "./inference.html",
  styleUrl: "./inference.css",
})
export class LlmInferencePage {}
