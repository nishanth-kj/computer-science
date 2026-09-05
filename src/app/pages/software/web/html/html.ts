import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-html",
  imports: [TopicView],
  templateUrl: "./html.html",
  styleUrl: "./html.css",
})
export class WebHtmlPage {}
