import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-ir-page",
  imports: [SectionView],
  templateUrl: "./ir.html",
  styleUrl: "./ir.css",
})
export class IrPage {
  readonly id = "ir";
}
