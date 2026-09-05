import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-unsupervised",
  imports: [TopicView],
  templateUrl: "./unsupervised.html",
  styleUrl: "./unsupervised.css",
})
export class MlUnsupervisedPage {}
