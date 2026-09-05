import { Component, input } from "@angular/core";
import { LabView } from "@/app/labs/lab-view/lab-view";

@Component({
  selector: "cs-lab",
  imports: [LabView],
  templateUrl: "./lab.html",
  styleUrl: "./lab.css",
})
export class Lab {
  readonly id = input.required<string>();
}
