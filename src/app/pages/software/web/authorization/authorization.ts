import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-authorization",
  imports: [TopicView],
  templateUrl: "./authorization.html",
  styleUrl: "./authorization.css",
})
export class WebAuthorizationPage {}
