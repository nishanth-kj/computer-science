import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-graphql",
  imports: [TopicView],
  templateUrl: "./graphql.html",
  styleUrl: "./graphql.css",
})
export class WebGraphqlPage {}
