import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-virtual-memory",
  imports: [TopicView],
  templateUrl: "./virtual-memory.html",
  styleUrl: "./virtual-memory.css",
})
export class OsVirtualMemoryPage {}
