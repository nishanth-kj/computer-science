import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-kafka",
  imports: [TopicView],
  templateUrl: "./kafka.html",
  styleUrl: "./kafka.css",
})
export class SystemDesignKafkaPage {}
