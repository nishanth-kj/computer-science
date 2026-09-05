import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-distributed-page",
  imports: [SectionView],
  templateUrl: "./distributed.html",
})
export class DistributedPage {
  readonly id = "distributed";
}
