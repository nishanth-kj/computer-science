import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-locks-par",
  imports: [TopicView],
  templateUrl: "./locks-par.html",
  styleUrl: "./locks-par.css",
})
export class ParallelLocksParPage {}
