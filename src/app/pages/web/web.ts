import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-web-page",
  imports: [SectionView],
  templateUrl: "./web.html",
})
export class WebPage {
  readonly id = "web";
}
