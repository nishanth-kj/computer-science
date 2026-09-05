import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-languages-page",
  imports: [SectionView],
  templateUrl: "./languages.html",
  styleUrl: "./languages.css",
})
export class LanguagesPage {
  readonly id = "languages";
}
