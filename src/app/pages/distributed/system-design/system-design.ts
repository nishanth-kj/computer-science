import { Component } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-system-design-page",
  imports: [SectionView],
  templateUrl: "./system-design.html",
  styleUrl: "./system-design.css",
})
export class SystemDesignPage {
  readonly id = "system-design";
}
