import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-pubsub",
  imports: [TopicView],
  templateUrl: "./pubsub.html",
  styleUrl: "./pubsub.css",
})
export class OopPubsubPage {}
