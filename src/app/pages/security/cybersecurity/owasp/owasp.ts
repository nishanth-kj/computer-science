import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-owasp",
  imports: [TopicView],
  templateUrl: "./owasp.html",
  styleUrl: "./owasp.css",
})
export class CybersecurityOwaspPage {}
