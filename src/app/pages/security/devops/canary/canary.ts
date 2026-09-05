import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-canary",
  imports: [TopicView],
  templateUrl: "./canary.html",
  styleUrl: "./canary.css",
})
export class DevopsCanaryPage {}
