import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-supervised",
  imports: [TopicView],
  templateUrl: "./supervised.html",
  styleUrl: "./supervised.css",
})
export class MlSupervisedPage {}
