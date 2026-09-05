import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-serverless",
  imports: [TopicView],
  templateUrl: "./serverless.html",
  styleUrl: "./serverless.css",
})
export class CloudServerlessPage {}
