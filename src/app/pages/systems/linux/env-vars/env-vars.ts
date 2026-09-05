import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-env-vars",
  imports: [TopicView],
  templateUrl: "./env-vars.html",
  styleUrl: "./env-vars.css",
})
export class LinuxEnvVarsPage {}
