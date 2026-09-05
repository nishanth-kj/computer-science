import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-permissions",
  imports: [TopicView],
  templateUrl: "./permissions.html",
  styleUrl: "./permissions.css",
})
export class LinuxPermissionsPage {}
