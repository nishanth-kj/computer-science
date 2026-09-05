import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-tcp-teardown",
  imports: [TopicView],
  templateUrl: "./tcp-teardown.html",
  styleUrl: "./tcp-teardown.css",
})
export class NetworksTcpTeardownPage {}
