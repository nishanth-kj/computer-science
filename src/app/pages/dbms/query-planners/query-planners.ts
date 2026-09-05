import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-query-planners",
  imports: [TopicView],
  templateUrl: "./query-planners.html",
  styleUrl: "./query-planners.css",
})
export class DbmsQueryPlannersPage {}
