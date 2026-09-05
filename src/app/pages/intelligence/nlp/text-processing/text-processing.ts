import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-text-processing",
  imports: [TopicView],
  templateUrl: "./text-processing.html",
  styleUrl: "./text-processing.css",
})
export class NlpTextProcessingPage {}
