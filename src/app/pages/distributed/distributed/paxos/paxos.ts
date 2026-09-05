import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-paxos",
  imports: [TopicView],
  templateUrl: "./paxos.html",
  styleUrl: "./paxos.css",
})
export class DistributedPaxosPage {}
