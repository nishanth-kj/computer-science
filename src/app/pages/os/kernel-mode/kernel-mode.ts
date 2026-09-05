import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-kernel-mode",
  imports: [TopicView],
  templateUrl: "./kernel-mode.html",
  styleUrl: "./kernel-mode.css",
})
export class OsKernelModePage {}
