import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-oop-page",
  imports: [SectionView],
  templateUrl: "./oop.html",
  styleUrl: "./oop.css",
})
export class OopPage {
  readonly id = "oop";
}
