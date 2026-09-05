import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-cybersecurity-page",
  imports: [SectionView],
  templateUrl: "./cybersecurity.html",
  styleUrl: "./cybersecurity.css",
})
export class CybersecurityPage {
  readonly id = "cybersecurity";
}
