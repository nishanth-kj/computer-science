import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-column-stores",
  imports: [TopicView],
  templateUrl: "./column-stores.html",
  styleUrl: "./column-stores.css",
})
export class DbmsColumnStoresPage {}
