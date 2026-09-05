import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-leader-election",
  imports: [TopicView],
  templateUrl: "./leader-election.html",
  styleUrl: "./leader-election.css",
})
export class DistributedLeaderElectionPage {}
