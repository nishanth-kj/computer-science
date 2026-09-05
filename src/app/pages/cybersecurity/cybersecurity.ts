import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-cybersecurity-page",
  imports: [SectionView],
  templateUrl: "./cybersecurity.html",
})
export class CybersecurityPage {
  readonly id = "cybersecurity";
}
