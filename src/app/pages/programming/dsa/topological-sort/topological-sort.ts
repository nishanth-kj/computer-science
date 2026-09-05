import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-topological-sort",
  imports: [TopicView],
  templateUrl: "./topological-sort.html",
  styleUrl: "./topological-sort.css",
})
export class DsaTopologicalSortPage {}
