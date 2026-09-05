import { Component, signal } from "@angular/core";
import { Sidebar, DocsSidebar } from "@/components/sidebar/sidebar";
import { Icon } from "@/components/ui/icon";

@Component({
  selector: "cs-topic-frame",
  imports: [Sidebar, Icon],
  templateUrl: "./topic-frame.html",
  styleUrl: "./topic-frame.css",
})
export class TopicFrame {
  readonly open = signal(false);
}
