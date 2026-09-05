import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-sql",
  imports: [TopicView],
  templateUrl: "./sql.html",
  styleUrl: "./sql.css",
})
export class DbmsSqlPage {}
