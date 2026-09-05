import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-kafka",
  imports: [TopicView],
  templateUrl: "./kafka.html",
  styleUrl: "./kafka.css",
})
export class SystemDesignKafkaPage {}
