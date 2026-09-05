import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-compiler",
  imports: [TopicView],
  templateUrl: "./compiler.html",
  styleUrl: "./compiler.css",
})
export class FundamentalsCompilerPage {}
