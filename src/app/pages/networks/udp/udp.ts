import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-udp",
  imports: [TopicView],
  templateUrl: "./udp.html",
  styleUrl: "./udp.css",
})
export class NetworksUdpPage {}
