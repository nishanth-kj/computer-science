import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-xss",
  imports: [TopicView],
  templateUrl: "./xss.html",
  styleUrl: "./xss.css",
})
export class CybersecurityXssPage {}
