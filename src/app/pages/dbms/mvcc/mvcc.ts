import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-mvcc",
  imports: [TopicView],
  templateUrl: "./mvcc.html",
  styleUrl: "./mvcc.css",
})
export class DbmsMvccPage {}
