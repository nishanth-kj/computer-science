import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-rendering-pipeline",
  imports: [TopicView],
  templateUrl: "./rendering-pipeline.html",
  styleUrl: "./rendering-pipeline.css",
})
export class GraphicsRenderingPipelinePage {}
