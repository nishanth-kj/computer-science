import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-ast",
  imports: [TopicView],
  templateUrl: "./ast.html",
  styleUrl: "./ast.css",
})
export class CompilersAstPage {}
