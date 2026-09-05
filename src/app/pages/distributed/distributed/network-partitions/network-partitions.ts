import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-network-partitions",
  imports: [TopicView],
  templateUrl: "./network-partitions.html",
  styleUrl: "./network-partitions.css",
})
export class DistributedNetworkPartitionsPage {}
