import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-isolation-levels",
  imports: [TopicView],
  templateUrl: "./isolation-levels.html",
  styleUrl: "./isolation-levels.css",
})
export class DbmsIsolationLevelsPage {}
