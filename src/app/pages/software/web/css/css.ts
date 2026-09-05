import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-css",
  imports: [TopicView],
  templateUrl: "./css.html",
  styleUrl: "./css.css",
})
export class WebCssPage {}
