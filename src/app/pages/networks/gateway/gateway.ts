import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-gateway",
  imports: [TopicView],
  templateUrl: "./gateway.html",
  styleUrl: "./gateway.css",
})
export class NetworksGatewayPage {}
