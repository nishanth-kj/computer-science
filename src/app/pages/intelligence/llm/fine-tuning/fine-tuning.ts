import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-fine-tuning",
  imports: [TopicView],
  templateUrl: "./fine-tuning.html",
  styleUrl: "./fine-tuning.css",
})
export class LlmFineTuningPage {}
