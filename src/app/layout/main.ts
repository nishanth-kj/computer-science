import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppHeader } from "@/app/components/navbar/navbar";
import { TopicFrame } from "@/app/components/topic-frame/topic-frame";

@Component({
  selector: "cs-main-layout",
  imports: [RouterOutlet, AppHeader, TopicFrame],
  templateUrl: "./main.html",
  styleUrl: "./main.css",
})
export class MainLayout {}
