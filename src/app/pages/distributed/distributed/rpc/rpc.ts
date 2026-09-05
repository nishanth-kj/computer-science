import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-rpc",
  imports: [TopicView],
  templateUrl: "./rpc.html",
  styleUrl: "./rpc.css",
})
export class DistributedRpcPage {}
