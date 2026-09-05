import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-dom",
  imports: [TopicView],
  templateUrl: "./dom.html",
  styleUrl: "./dom.css",
})
export class WebDomPage {}
