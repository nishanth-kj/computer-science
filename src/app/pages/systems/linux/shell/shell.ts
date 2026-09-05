import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-shell",
  imports: [TopicView],
  templateUrl: "./shell.html",
  styleUrl: "./shell.css",
})
export class LinuxShellPage {}
