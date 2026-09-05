import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-sharding",
  imports: [TopicView],
  templateUrl: "./sharding.html",
  styleUrl: "./sharding.css",
})
export class DbmsShardingPage {}
