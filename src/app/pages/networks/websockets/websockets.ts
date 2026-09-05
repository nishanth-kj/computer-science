import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-websockets",
  imports: [TopicView],
  templateUrl: "./websockets.html",
  styleUrl: "./websockets.css",
})
export class NetworksWebsocketsPage {}
