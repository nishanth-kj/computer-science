import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-partitioning",
  imports: [TopicView],
  templateUrl: "./partitioning.html",
  styleUrl: "./partitioning.css",
})
export class DbmsPartitioningPage {}
