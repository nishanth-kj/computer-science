import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-loader",
  imports: [TopicView],
  templateUrl: "./loader.html",
  styleUrl: "./loader.css",
})
export class FundamentalsLoaderPage {}
