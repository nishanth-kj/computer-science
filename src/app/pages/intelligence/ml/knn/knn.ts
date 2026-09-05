import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-knn",
  imports: [TopicView],
  templateUrl: "./knn.html",
  styleUrl: "./knn.css",
})
export class MlKnnPage {}
