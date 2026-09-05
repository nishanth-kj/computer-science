import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-firewall",
  imports: [TopicView],
  templateUrl: "./firewall.html",
  styleUrl: "./firewall.css",
})
export class NetworksFirewallPage {}
