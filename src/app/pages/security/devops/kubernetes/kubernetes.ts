import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-kubernetes",
  imports: [TopicView],
  templateUrl: "./kubernetes.html",
  styleUrl: "./kubernetes.css",
})
export class DevopsKubernetesPage {}
