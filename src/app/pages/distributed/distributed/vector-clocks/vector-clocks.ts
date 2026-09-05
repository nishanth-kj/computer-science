import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-vector-clocks",
  imports: [TopicView],
  templateUrl: "./vector-clocks.html",
  styleUrl: "./vector-clocks.css",
})
export class DistributedVectorClocksPage {}
