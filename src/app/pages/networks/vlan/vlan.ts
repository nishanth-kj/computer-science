import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-vlan",
  imports: [TopicView],
  templateUrl: "./vlan.html",
  styleUrl: "./vlan.css",
})
export class NetworksVlanPage {}
