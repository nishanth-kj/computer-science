import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-vpc",
  imports: [TopicView],
  templateUrl: "./vpc.html",
  styleUrl: "./vpc.css",
})
export class CloudVpcPage {}
