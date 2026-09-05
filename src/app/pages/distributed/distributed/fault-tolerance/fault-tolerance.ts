import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-fault-tolerance",
  imports: [TopicView],
  templateUrl: "./fault-tolerance.html",
  styleUrl: "./fault-tolerance.css",
})
export class DistributedFaultTolerancePage {}
