import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-mapreduce",
  imports: [TopicView],
  templateUrl: "./mapreduce.html",
  styleUrl: "./mapreduce.css",
})
export class ParallelMapreducePage {}
