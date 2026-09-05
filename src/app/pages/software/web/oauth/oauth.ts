import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-oauth",
  imports: [TopicView],
  templateUrl: "./oauth.html",
  styleUrl: "./oauth.css",
})
export class WebOauthPage {}
