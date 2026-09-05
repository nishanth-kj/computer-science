import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-two-phase-commit",
  imports: [TopicView],
  templateUrl: "./two-phase-commit.html",
  styleUrl: "./two-phase-commit.css",
})
export class DistributedTwoPhaseCommitPage {}
