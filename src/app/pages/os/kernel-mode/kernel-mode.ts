import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-kernel-mode",
  imports: [TopicView],
  templateUrl: "./kernel-mode.html",
  styleUrl: "./kernel-mode.css",
})
export class OsKernelModePage {}
