import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-threads",
  imports: [TopicView],
  templateUrl: "./threads.html",
  styleUrl: "./threads.css",
})
export class OsThreadsPage {}
