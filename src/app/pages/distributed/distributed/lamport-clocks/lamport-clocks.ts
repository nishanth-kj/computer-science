import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-lamport-clocks",
  imports: [TopicView],
  templateUrl: "./lamport-clocks.html",
  styleUrl: "./lamport-clocks.css",
})
export class DistributedLamportClocksPage {}
