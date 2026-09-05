import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-router",
  imports: [TopicView],
  templateUrl: "./router.html",
  styleUrl: "./router.css",
})
export class NetworksRouterPage {}
