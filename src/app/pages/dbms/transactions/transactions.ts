import { Component } from "@angular/core";
import { TopicView } from "@/app/pages/topics/view/topic-view";

@Component({
  selector: "cs-topic-transactions",
  imports: [TopicView],
  templateUrl: "./transactions.html",
  styleUrl: "./transactions.css",
})
export class DbmsTransactionsPage {}
