import { Component } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-ai-page",
  imports: [SectionView],
  templateUrl: "./ai.html",
  styleUrl: "./ai.css",
})
export class AiPage {
  readonly id = "ai";
}
