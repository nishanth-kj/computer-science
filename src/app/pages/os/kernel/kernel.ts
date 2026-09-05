import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-kernel",
  imports: [TopicView],
  templateUrl: "./kernel.html",
  styleUrl: "./kernel.css",
})
export class OsKernelPage {}
