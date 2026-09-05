import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-code-generation",
  imports: [TopicView],
  templateUrl: "./code-generation.html",
  styleUrl: "./code-generation.css",
})
export class CompilersCodeGenerationPage {}
