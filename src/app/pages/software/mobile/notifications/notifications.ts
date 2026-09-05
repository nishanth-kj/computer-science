import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-notifications",
  imports: [TopicView],
  templateUrl: "./notifications.html",
  styleUrl: "./notifications.css",
})
export class MobileNotificationsPage {}
