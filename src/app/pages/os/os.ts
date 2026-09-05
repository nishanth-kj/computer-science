import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-os-page",
  imports: [SectionView],
  templateUrl: "./os.html",
})
export class OsPage {
  readonly id = "os";
}
