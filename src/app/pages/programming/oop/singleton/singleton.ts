import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-singleton",
  imports: [TopicView],
  templateUrl: "./singleton.html",
  styleUrl: "./singleton.css",
})
export class OopSingletonPage {}
