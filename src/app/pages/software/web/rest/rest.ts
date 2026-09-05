import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-rest",
  imports: [TopicView],
  templateUrl: "./rest.html",
  styleUrl: "./rest.css",
})
export class WebRestPage {}
