import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LABS, SECTION_BY_ID, SECTION_GROUPS } from "@/app/lib/content";

@Component({
  selector: "cs-labs",
  imports: [RouterLink],
  templateUrl: "./labs.html",
  styleUrl: "./labs.css",
})
export class Labs {
  readonly groups = SECTION_GROUPS;
  readonly SECTION_BY_ID = SECTION_BY_ID;
  labsFor(sections: string[]) {
    return LABS.filter((l) => sections.includes(l.section));
  }
}
