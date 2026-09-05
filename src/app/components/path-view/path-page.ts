import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { PathView } from "./path-view";

@Component({
  selector: "cs-path-page",
  imports: [PathView],
  template: `<cs-path-view [id]="id()" />`,
})
export class PathPage {
  private readonly route = inject(ActivatedRoute);
  readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get("id") ?? "")), {
    initialValue: this.route.snapshot.paramMap.get("id") ?? "",
  });
}
