import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-views",
  imports: [TopicView],
  templateUrl: "./views.html",
  styleUrl: "./views.css",
})
export class DbmsViewsPage {}
