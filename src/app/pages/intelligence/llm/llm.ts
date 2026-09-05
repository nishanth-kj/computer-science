import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-llm-page",
  imports: [SectionView],
  templateUrl: "./llm.html",
  styleUrl: "./llm.css",
})
export class LlmPage {
  readonly id = "llm";
}
