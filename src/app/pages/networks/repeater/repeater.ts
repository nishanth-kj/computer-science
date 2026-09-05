import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-repeater",
  imports: [TopicView],
  templateUrl: "./repeater.html",
  styleUrl: "./repeater.css",
})
export class NetworksRepeaterPage {}
