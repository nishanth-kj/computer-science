import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-linux-page",
  imports: [SectionView],
  templateUrl: "./linux.html",
  styleUrl: "./linux.css",
})
export class LinuxPage {
  readonly id = "linux";
}
