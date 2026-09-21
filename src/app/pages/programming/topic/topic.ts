import { Component, input } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-programming-topic-page",
  imports: [TopicView],
  templateUrl: "./topic.html",
  styleUrl: "./topic.css",
})
export class ProgrammingTopicPage {
  readonly slug = input.required<string>();
}
