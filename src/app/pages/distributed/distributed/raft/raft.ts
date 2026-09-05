import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-raft",
  imports: [TopicView],
  templateUrl: "./raft.html",
  styleUrl: "./raft.css",
})
export class DistributedRaftPage {}
