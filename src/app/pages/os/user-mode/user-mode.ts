import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-user-mode",
  imports: [TopicView],
  templateUrl: "./user-mode.html",
  styleUrl: "./user-mode.css",
})
export class OsUserModePage {}
