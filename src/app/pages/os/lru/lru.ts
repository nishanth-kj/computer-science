import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-lru",
  imports: [TopicView],
  templateUrl: "./lru.html",
  styleUrl: "./lru.css",
})
export class OsLruPage {}
