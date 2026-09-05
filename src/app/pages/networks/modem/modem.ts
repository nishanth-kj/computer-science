import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-modem",
  imports: [TopicView],
  templateUrl: "./modem.html",
  styleUrl: "./modem.css",
})
export class NetworksModemPage {}
