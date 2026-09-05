import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-pretraining",
  imports: [TopicView],
  templateUrl: "./pretraining.html",
  styleUrl: "./pretraining.css",
})
export class LlmPretrainingPage {}
