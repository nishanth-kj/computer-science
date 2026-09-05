import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppHeader } from "../components/layout/header";
import { TopicFrame } from "../components/layout/topic-frame";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, AppHeader, TopicFrame],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {}
