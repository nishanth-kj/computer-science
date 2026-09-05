import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-dhcp",
  imports: [TopicView],
  templateUrl: "./dhcp.html",
  styleUrl: "./dhcp.css",
})
export class NetworksDhcpPage {}
