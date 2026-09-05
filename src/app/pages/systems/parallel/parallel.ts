import { Component } from "@angular/core";
import { SectionView } from "@/app/pages/section-view/section-view";

@Component({
  selector: "cs-parallel-page",
  imports: [SectionView],
  templateUrl: "./parallel.html",
  styleUrl: "./parallel.css",
})
export class ParallelPage {
  readonly id = "parallel";
}
