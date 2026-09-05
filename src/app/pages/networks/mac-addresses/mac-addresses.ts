import { Component } from "@angular/core";
import { TopicView } from "@/app/components/topic-view/topic-view";

@Component({
  selector: "cs-topic-mac-addresses",
  imports: [TopicView],
  templateUrl: "./mac-addresses.html",
  styleUrl: "./mac-addresses.css",
})
export class NetworksMacAddressesPage {}
