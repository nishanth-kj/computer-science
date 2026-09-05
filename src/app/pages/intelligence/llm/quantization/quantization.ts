import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-quantization",
  imports: [TopicView],
  templateUrl: "./quantization.html",
  styleUrl: "./quantization.css",
})
export class LlmQuantizationPage {}
