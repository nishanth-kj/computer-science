import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-architecture-page",
  imports: [SectionView],
  templateUrl: "./architecture.html",
  styleUrl: "./architecture.css",
})
export class ArchitecturePage {
  readonly id = "architecture";
}
