import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-proxy",
  imports: [TopicView],
  templateUrl: "./proxy.html",
  styleUrl: "./proxy.css",
})
export class OopProxyPage {}
