import { Component } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-interview-page",
  imports: [SectionView],
  templateUrl: "./interview.html",
  styleUrl: "./interview.css",
})
export class InterviewPage {
  readonly id = "interview";
}
