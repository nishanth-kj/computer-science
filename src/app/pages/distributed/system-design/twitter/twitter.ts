import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-twitter",
  imports: [TopicView],
  templateUrl: "./twitter.html",
  styleUrl: "./twitter.css",
})
export class SystemDesignTwitterPage {}
