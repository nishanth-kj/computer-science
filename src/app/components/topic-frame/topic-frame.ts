import { Component, inject } from "@angular/core";
import { Breadcrumb } from "@/app/components/breadcrumb/breadcrumb";
import { Footer } from "@/app/components/footer/footer";
import { Sidebar } from "@/app/components/sidebar/sidebar";
import { Icon } from "@/app/components/ui/icon";
import { SidebarState } from "@/app/components/sidebar/sidebar-state";

@Component({
  selector: "cs-topic-frame",
  imports: [Breadcrumb, Footer, Sidebar, Icon],
  templateUrl: "./topic-frame.html",
  styleUrl: "./topic-frame.css",
})
export class TopicFrame {
  readonly sidebar = inject(SidebarState);
}
