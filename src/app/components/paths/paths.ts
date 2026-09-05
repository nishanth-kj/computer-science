import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PATHS } from "@/app/lib/content";

@Component({
  selector: "cs-paths",
  imports: [RouterLink],
  templateUrl: "./paths.html",
})
export class Paths {
  readonly paths = PATHS;
}
