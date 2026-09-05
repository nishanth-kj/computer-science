import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-url-shortener",
  imports: [TopicView],
  templateUrl: "./url-shortener.html",
  styleUrl: "./url-shortener.css",
})
export class SystemDesignUrlShortenerPage {}
