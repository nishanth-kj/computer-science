import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-rnn",
  imports: [TopicView],
  templateUrl: "./rnn.html",
  styleUrl: "./rnn.css",
})
export class DeepLearningRnnPage {}
