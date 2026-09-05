import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-buffer-pool",
  imports: [TopicView],
  templateUrl: "./buffer-pool.html",
  styleUrl: "./buffer-pool.css",
})
export class DbmsBufferPoolPage {}
