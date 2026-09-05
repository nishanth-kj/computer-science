import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-lstm",
  imports: [TopicView],
  templateUrl: "./lstm.html",
  styleUrl: "./lstm.css",
})
export class DeepLearningLstmPage {}
