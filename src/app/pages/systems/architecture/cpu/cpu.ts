import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-cpu",
  imports: [TopicView],
  templateUrl: "./cpu.html",
  styleUrl: "./cpu.css",
})
export class ArchitectureCpuPage {}
