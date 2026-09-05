import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { LabView } from "./lab-view";

@Component({
  selector: "cs-lab-page",
  imports: [LabView],
  template: `<cs-lab-view [id]="id()" />`,
})
export class LabPage {
  private readonly route = inject(ActivatedRoute);
  readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get("id") ?? "")), {
    initialValue: this.route.snapshot.paramMap.get("id") ?? "",
  });
}
