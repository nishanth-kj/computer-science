import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-queue",
  imports: [TopicView],
  templateUrl: "./queue.html",
  styleUrl: "./queue.css",
})
export class DsaQueuePage {}
