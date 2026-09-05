import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-llm-page",
  imports: [SectionView],
  templateUrl: "./llm.html",
})
export class LlmPage {
  readonly id = "llm";
}
