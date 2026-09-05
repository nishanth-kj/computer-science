import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-package-management",
  imports: [TopicView],
  templateUrl: "./package-management.html",
  styleUrl: "./package-management.css",
})
export class LinuxPackageManagementPage {}
