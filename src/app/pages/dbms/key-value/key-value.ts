import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-key-value",
  imports: [TopicView],
  templateUrl: "./key-value.html",
  styleUrl: "./key-value.css",
})
export class DbmsKeyValuePage {}
