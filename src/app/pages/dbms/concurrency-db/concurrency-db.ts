import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-concurrency-db",
  imports: [TopicView],
  templateUrl: "./concurrency-db.html",
  styleUrl: "./concurrency-db.css",
})
export class DbmsConcurrencyDbPage {}
