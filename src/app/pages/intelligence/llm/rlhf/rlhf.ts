import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-rlhf",
  imports: [TopicView],
  templateUrl: "./rlhf.html",
  styleUrl: "./rlhf.css",
})
export class LlmRlhfPage {}
