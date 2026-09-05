import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-race-conditions",
  imports: [TopicView],
  templateUrl: "./race-conditions.html",
  styleUrl: "./race-conditions.css",
})
export class OsRaceConditionsPage {}
