import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-text-classification",
  imports: [TopicView],
  templateUrl: "./text-classification.html",
  styleUrl: "./text-classification.css",
})
export class NlpTextClassificationPage {}
