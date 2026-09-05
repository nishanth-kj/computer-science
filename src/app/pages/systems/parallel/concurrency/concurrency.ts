import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-concurrency",
  imports: [TopicView],
  templateUrl: "./concurrency.html",
  styleUrl: "./concurrency.css",
})
export class ParallelConcurrencyPage {}
