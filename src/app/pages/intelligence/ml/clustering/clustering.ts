import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-clustering",
  imports: [TopicView],
  templateUrl: "./clustering.html",
  styleUrl: "./clustering.css",
})
export class MlClusteringPage {}
