import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-pca",
  imports: [TopicView],
  templateUrl: "./pca.html",
  styleUrl: "./pca.css",
})
export class MlPcaPage {}
