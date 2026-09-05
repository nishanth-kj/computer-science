import { Component } from "@angular/core";
import { SectionView } from "@/app/section-view/section-view";

@Component({
  selector: "cs-dbms-page",
  imports: [SectionView],
  templateUrl: "./dbms.html",
  styleUrl: "./dbms.css",
})
export class DbmsPage {
  readonly id = "dbms";
}
