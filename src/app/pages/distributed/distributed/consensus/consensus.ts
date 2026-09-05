import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-consensus",
  imports: [TopicView],
  templateUrl: "./consensus.html",
  styleUrl: "./consensus.css",
})
export class DistributedConsensusPage {}
