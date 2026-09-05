import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-icmp",
  imports: [TopicView],
  templateUrl: "./icmp.html",
  styleUrl: "./icmp.css",
})
export class NetworksIcmpPage {}
