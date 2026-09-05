import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-react",
  imports: [TopicView],
  templateUrl: "./react.html",
  styleUrl: "./react.css",
})
export class WebReactPage {}
