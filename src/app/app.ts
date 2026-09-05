import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Navbar, AppHeader } from "@/components/navbar/navbar";
import { TopicFrame } from "@/components/topic-frame/topic-frame";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, AppHeader, TopicFrame],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {}
