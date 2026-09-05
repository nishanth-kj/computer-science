import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-serverless",
  imports: [TopicView],
  templateUrl: "./serverless.html",
  styleUrl: "./serverless.css",
})
export class CloudServerlessPage {}
