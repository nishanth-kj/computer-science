import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-authentication",
  imports: [TopicView],
  templateUrl: "./authentication.html",
  styleUrl: "./authentication.css",
})
export class WebAuthenticationPage {}
