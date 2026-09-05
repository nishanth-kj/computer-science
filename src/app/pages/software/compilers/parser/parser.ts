import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-parser",
  imports: [TopicView],
  templateUrl: "./parser.html",
  styleUrl: "./parser.css",
})
export class CompilersParserPage {}
