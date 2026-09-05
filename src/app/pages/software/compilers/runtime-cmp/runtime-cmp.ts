import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-runtime-cmp",
  imports: [TopicView],
  templateUrl: "./runtime-cmp.html",
  styleUrl: "./runtime-cmp.css",
})
export class CompilersRuntimeCmpPage {}
