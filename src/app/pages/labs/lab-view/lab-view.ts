import { Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LAB_BY_ID, getTopic, SECTION_BY_ID, topicHref } from "@/lib/content";
import { hasViz } from "@/lib/viz-ids";
import { Viz } from "@/app/pages/labs/viz/registry";

@Component({
  selector: "cs-lab-view",
  imports: [RouterLink, Viz],
  templateUrl: "./lab-view.html",
  styleUrl: "./lab-view.css",
})
export class LabView {
  readonly topicHref = topicHref;
  readonly id = input.required<string>();
  readonly SECTION_BY_ID = SECTION_BY_ID;
  readonly getTopic = getTopic;
  readonly hasViz = hasViz;
  readonly lab = computed(() => LAB_BY_ID[this.id()]);
}
