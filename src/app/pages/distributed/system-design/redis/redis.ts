import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-redis",
  imports: [TopicView],
  templateUrl: "./redis.html",
  styleUrl: "./redis.css",
})
export class SystemDesignRedisPage {}
