import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-quorum",
  imports: [TopicView],
  templateUrl: "./quorum.html",
  styleUrl: "./quorum.css",
})
export class DistributedQuorumPage {}
