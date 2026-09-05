import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-random-forests",
  imports: [TopicView],
  templateUrl: "./random-forests.html",
  styleUrl: "./random-forests.css",
})
export class MlRandomForestsPage {}
