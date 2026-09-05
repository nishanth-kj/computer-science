import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-compilers-page",
  imports: [SectionView],
  templateUrl: "./compilers.html",
  styleUrl: "./compilers.css",
})
export class CompilersPage {
  readonly id = "compilers";
}
