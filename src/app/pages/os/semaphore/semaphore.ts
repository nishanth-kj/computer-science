import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-semaphore",
  imports: [TopicView],
  templateUrl: "./semaphore.html",
  styleUrl: "./semaphore.css",
})
export class OsSemaphorePage {}
