import { Component } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-distributed-page",
  imports: [SectionView],
  templateUrl: "./distributed.html",
  styleUrl: "./distributed.css",
})
export class DistributedPage {
  readonly id = "distributed";
}
