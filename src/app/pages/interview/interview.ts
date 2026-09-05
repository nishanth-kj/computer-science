import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-interview-page",
  imports: [SectionView],
  templateUrl: "./interview.html",
})
export class InterviewPage {
  readonly id = "interview";
}
