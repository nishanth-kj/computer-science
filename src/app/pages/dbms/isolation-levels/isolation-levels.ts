import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-isolation-levels",
  imports: [TopicView],
  templateUrl: "./isolation-levels.html",
  styleUrl: "./isolation-levels.css",
})
export class DbmsIsolationLevelsPage {}
