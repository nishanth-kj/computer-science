import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-ai-page",
  imports: [SectionView],
  templateUrl: "./ai.html",
})
export class AiPage {
  readonly id = "ai";
}
