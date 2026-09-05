import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-smtp",
  imports: [TopicView],
  templateUrl: "./smtp.html",
  styleUrl: "./smtp.css",
})
export class NetworksSmtpPage {}
