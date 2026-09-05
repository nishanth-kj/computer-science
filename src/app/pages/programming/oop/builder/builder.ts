import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-builder",
  imports: [TopicView],
  templateUrl: "./builder.html",
  styleUrl: "./builder.css",
})
export class OopBuilderPage {}
