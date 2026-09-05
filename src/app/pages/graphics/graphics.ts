import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-graphics-page",
  imports: [SectionView],
  templateUrl: "./graphics.html",
})
export class GraphicsPage {
  readonly id = "graphics";
}
