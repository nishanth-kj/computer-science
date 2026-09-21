import { Component, input } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-programming-section-page",
  imports: [SectionView],
  templateUrl: "./section.html",
  styleUrl: "./section.css",
})
export class ProgrammingSectionPage {
  readonly id = input.required<string>();
}
