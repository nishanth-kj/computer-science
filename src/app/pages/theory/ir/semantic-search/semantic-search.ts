import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-semantic-search",
  imports: [TopicView],
  templateUrl: "./semantic-search.html",
  styleUrl: "./semantic-search.css",
})
export class IrSemanticSearchPage {}
