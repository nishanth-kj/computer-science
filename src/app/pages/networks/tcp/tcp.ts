import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-tcp",
  imports: [TopicView],
  templateUrl: "./tcp.html",
  styleUrl: "./tcp.css",
})
export class NetworksTcpPage {}
