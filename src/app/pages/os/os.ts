import { Component } from "@angular/core";
import { SectionView } from "@/app/components/section-view/section-view";

@Component({
  selector: "cs-os-page",
  imports: [SectionView],
  templateUrl: "./os.html",
  styleUrl: "./os.css",
})
export class OsPage {
  readonly id = "os";
}
