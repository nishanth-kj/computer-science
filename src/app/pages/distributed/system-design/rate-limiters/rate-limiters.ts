import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-rate-limiters",
  imports: [TopicView],
  templateUrl: "./rate-limiters.html",
  styleUrl: "./rate-limiters.css",
})
export class SystemDesignRateLimitersPage {}
