import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-mutex",
  imports: [TopicView],
  templateUrl: "./mutex.html",
  styleUrl: "./mutex.css",
})
export class OsMutexPage {}
