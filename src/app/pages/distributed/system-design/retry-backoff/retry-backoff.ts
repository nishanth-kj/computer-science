import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-retry-backoff",
  imports: [TopicView],
  templateUrl: "./retry-backoff.html",
  styleUrl: "./retry-backoff.css",
})
export class SystemDesignRetryBackoffPage {}
