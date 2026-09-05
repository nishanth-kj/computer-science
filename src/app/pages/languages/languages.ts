import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-languages-page",
  imports: [SectionView],
  templateUrl: "./languages.html",
})
export class LanguagesPage {
  readonly id = "languages";
}
