import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-distributed-page",
  imports: [SectionView],
  templateUrl: "./distributed.html",
})
export class DistributedPage {
  readonly id = "distributed";
}
