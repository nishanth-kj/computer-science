import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-architecture-page",
  imports: [SectionView],
  templateUrl: "./architecture.html",
})
export class ArchitecturePage {
  readonly id = "architecture";
}
