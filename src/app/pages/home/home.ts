import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ALL_NAV, SECTION_BY_ID, SECTION_GROUPS } from "@/app/lib/content";

@Component({
  selector: "cs-home",
  imports: [RouterLink],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  readonly count = ALL_NAV.length;
  readonly sections = SECTION_GROUPS.flatMap((g) => g.sections);
  readonly SECTION_BY_ID = SECTION_BY_ID;
  countIn(id: string) {
    return ALL_NAV.filter((t) => t.section === id).length;
  }
}
