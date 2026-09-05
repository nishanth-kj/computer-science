import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-information-extraction",
  imports: [TopicView],
  templateUrl: "./information-extraction.html",
  styleUrl: "./information-extraction.css",
})
export class NlpInformationExtractionPage {}
