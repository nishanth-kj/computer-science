import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-access-point",
  imports: [TopicView],
  templateUrl: "./access-point.html",
  styleUrl: "./access-point.css",
})
export class NetworksAccessPointPage {}
