import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-parallel-page",
  imports: [SectionView],
  templateUrl: "./parallel.html",
})
export class ParallelPage {
  readonly id = "parallel";
}
