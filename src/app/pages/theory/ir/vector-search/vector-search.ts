import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-vector-search",
  imports: [TopicView],
  templateUrl: "./vector-search.html",
  styleUrl: "./vector-search.css",
})
export class IrVectorSearchPage {}
