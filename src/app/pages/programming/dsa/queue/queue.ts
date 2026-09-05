import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-queue",
  imports: [TopicView],
  templateUrl: "./queue.html",
  styleUrl: "./queue.css",
})
export class DsaQueuePage {}
