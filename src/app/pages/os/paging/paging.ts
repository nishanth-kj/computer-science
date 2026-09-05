import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-paging",
  imports: [TopicView],
  templateUrl: "./paging.html",
  styleUrl: "./paging.css",
})
export class OsPagingPage {}
