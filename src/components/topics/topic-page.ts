import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { TopicView } from "./topic-view";

@Component({
  selector: "cs-topic-page",
  imports: [TopicView],
  template: `<cs-topic-view [slug]="slug()" />`,
})
export class TopicPage {
  private readonly route = inject(ActivatedRoute);
  readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get("slug") ?? "")), {
    initialValue: this.route.snapshot.paramMap.get("slug") ?? "",
  });
}
