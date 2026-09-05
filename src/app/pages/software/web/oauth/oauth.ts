import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-oauth",
  imports: [TopicView],
  templateUrl: "./oauth.html",
  styleUrl: "./oauth.css",
})
export class WebOauthPage {}
