import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-message-passing",
  imports: [TopicView],
  templateUrl: "./message-passing.html",
  styleUrl: "./message-passing.css",
})
export class DistributedMessagePassingPage {}
