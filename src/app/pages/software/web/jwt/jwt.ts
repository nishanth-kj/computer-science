import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-jwt",
  imports: [TopicView],
  templateUrl: "./jwt.html",
  styleUrl: "./jwt.css",
})
export class WebJwtPage {}
