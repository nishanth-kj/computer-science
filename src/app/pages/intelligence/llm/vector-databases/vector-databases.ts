import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-vector-databases",
  imports: [TopicView],
  templateUrl: "./vector-databases.html",
  styleUrl: "./vector-databases.css",
})
export class LlmVectorDatabasesPage {}
