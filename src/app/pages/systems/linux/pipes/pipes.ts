import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-pipes",
  imports: [TopicView],
  templateUrl: "./pipes.html",
  styleUrl: "./pipes.css",
})
export class LinuxPipesPage {}
