import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-circuit-breakers",
  imports: [TopicView],
  templateUrl: "./circuit-breakers.html",
  styleUrl: "./circuit-breakers.css",
})
export class SystemDesignCircuitBreakersPage {}
