import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-dns",
  imports: [TopicView],
  templateUrl: "./dns.html",
  styleUrl: "./dns.css",
})
export class NetworksDnsPage {}
