import { Component } from "@angular/core";
import { SectionView } from "../../components/section-view/section-view";

@Component({
  selector: "cs-dbms-page",
  imports: [SectionView],
  templateUrl: "./dbms.html",
})
export class DbmsPage {
  readonly id = "dbms";
}
