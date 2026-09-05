import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-http",
  imports: [TopicView],
  templateUrl: "./http.html",
  styleUrl: "./http.css",
})
export class NetworksHttpPage {}
