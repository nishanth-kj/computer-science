import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-client-server",
  imports: [TopicView],
  templateUrl: "./client-server.html",
  styleUrl: "./client-server.css",
})
export class NetworksClientServerPage {}
