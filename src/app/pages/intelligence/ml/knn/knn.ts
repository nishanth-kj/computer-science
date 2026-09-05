import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-knn",
  imports: [TopicView],
  templateUrl: "./knn.html",
  styleUrl: "./knn.css",
})
export class MlKnnPage {}
