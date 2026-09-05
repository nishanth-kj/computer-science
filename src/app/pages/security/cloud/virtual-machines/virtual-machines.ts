import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-virtual-machines",
  imports: [TopicView],
  templateUrl: "./virtual-machines.html",
  styleUrl: "./virtual-machines.css",
})
export class CloudVirtualMachinesPage {}
