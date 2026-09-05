import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-wifi",
  imports: [TopicView],
  templateUrl: "./wifi.html",
  styleUrl: "./wifi.css",
})
export class NetworksWifiPage {}
