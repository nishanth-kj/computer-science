import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-inverted-index",
  imports: [TopicView],
  templateUrl: "./inverted-index.html",
  styleUrl: "./inverted-index.css",
})
export class IrInvertedIndexPage {}
