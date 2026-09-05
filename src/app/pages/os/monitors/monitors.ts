import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-monitors",
  imports: [TopicView],
  templateUrl: "./monitors.html",
  styleUrl: "./monitors.css",
})
export class OsMonitorsPage {}
