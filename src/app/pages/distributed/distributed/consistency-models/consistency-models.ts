import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-consistency-models",
  imports: [TopicView],
  templateUrl: "./consistency-models.html",
  styleUrl: "./consistency-models.css",
})
export class DistributedConsistencyModelsPage {}
