import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-tables",
  imports: [TopicView],
  templateUrl: "./tables.html",
  styleUrl: "./tables.css",
})
export class DbmsTablesPage {}
