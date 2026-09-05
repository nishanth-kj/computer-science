import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-message-queues",
  imports: [TopicView],
  templateUrl: "./message-queues.html",
  styleUrl: "./message-queues.css",
})
export class SystemDesignMessageQueuesPage {}
