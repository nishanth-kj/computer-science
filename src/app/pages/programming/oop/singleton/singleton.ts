import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-singleton",
  imports: [TopicView],
  templateUrl: "./singleton.html",
  styleUrl: "./singleton.css",
})
export class OopSingletonPage {}
