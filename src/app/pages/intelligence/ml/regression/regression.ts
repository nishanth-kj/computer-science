import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-regression",
  imports: [TopicView],
  templateUrl: "./regression.html",
  styleUrl: "./regression.css",
})
export class MlRegressionPage {}
