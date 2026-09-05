import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-foreign-keys",
  imports: [TopicView],
  templateUrl: "./foreign-keys.html",
  styleUrl: "./foreign-keys.css",
})
export class DbmsForeignKeysPage {}
