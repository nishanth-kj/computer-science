import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-bm25",
  imports: [TopicView],
  templateUrl: "./bm25.html",
  styleUrl: "./bm25.css",
})
export class IrBm25Page {}
