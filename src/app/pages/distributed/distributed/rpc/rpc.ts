import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-rpc",
  imports: [TopicView],
  templateUrl: "./rpc.html",
  styleUrl: "./rpc.css",
})
export class DistributedRpcPage {}
