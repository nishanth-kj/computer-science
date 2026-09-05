import { Component, inject } from "@angular/core";
import { Sidebar } from "@/app/components/sidebar/sidebar";
import { Footer } from "@/app/components/footer/footer";
import { Icon } from "@/app/components/ui/icon";
import { SidebarState } from "@/app/components/sidebar/sidebar-state";

@Component({
  selector: "cs-topic-frame",
  imports: [Sidebar, Footer, Icon],
  templateUrl: "./topic-frame.html",
  styleUrl: "./topic-frame.css",
})
export class TopicFrame {
  readonly sidebar = inject(SidebarState);
}
