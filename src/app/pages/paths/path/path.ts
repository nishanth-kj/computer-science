import { Component, input } from "@angular/core";
import { PathView } from "@/app/pages/paths/path-view/path-view";

@Component({
  selector: "cs-path",
  imports: [PathView],
  templateUrl: "./path.html",
  styleUrl: "./path.css",
})
export class Path {
  readonly id = input.required<string>();
}
