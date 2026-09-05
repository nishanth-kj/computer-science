import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-locks-db",
  imports: [TopicView],
  templateUrl: "./locks-db.html",
  styleUrl: "./locks-db.css",
})
export class DbmsLocksDbPage {}
