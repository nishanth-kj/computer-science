import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-logical-clocks",
  imports: [TopicView],
  templateUrl: "./logical-clocks.html",
  styleUrl: "./logical-clocks.css",
})
export class DistributedLogicalClocksPage {}
