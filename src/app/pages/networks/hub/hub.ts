import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-hub",
  imports: [TopicView],
  templateUrl: "./hub.html",
  styleUrl: "./hub.css",
})
export class NetworksHubPage {}
