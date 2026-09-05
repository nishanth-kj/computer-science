import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-search-engine",
  imports: [TopicView],
  templateUrl: "./search-engine.html",
  styleUrl: "./search-engine.css",
})
export class SystemDesignSearchEnginePage {}
