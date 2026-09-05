import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-containers",
  imports: [TopicView],
  templateUrl: "./containers.html",
  styleUrl: "./containers.css",
})
export class CloudContainersPage {}
