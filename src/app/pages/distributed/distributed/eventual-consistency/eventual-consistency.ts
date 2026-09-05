import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-eventual-consistency",
  imports: [TopicView],
  templateUrl: "./eventual-consistency.html",
  styleUrl: "./eventual-consistency.css",
})
export class DistributedEventualConsistencyPage {}
