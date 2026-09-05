import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-iam",
  imports: [TopicView],
  templateUrl: "./iam.html",
  styleUrl: "./iam.css",
})
export class CloudIamPage {}
