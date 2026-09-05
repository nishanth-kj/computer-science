import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-load-balancers",
  imports: [TopicView],
  templateUrl: "./load-balancers.html",
  styleUrl: "./load-balancers.css",
})
export class SystemDesignLoadBalancersPage {}
