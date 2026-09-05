import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-classification",
  imports: [TopicView],
  templateUrl: "./classification.html",
  styleUrl: "./classification.css",
})
export class MlClassificationPage {}
