import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppHeader } from "@/app/components/navbar/navbar";
import { TopicFrame } from "@/app/components/topic-frame/topic-frame";
import { CookieBanner } from "@/app/components/cookie-banner/cookie-banner";

@Component({
  selector: "cs-main-layout",
  imports: [RouterOutlet, AppHeader, TopicFrame, CookieBanner],
  templateUrl: "./main.html",
  styleUrl: "./main.css",
})
export class MainLayout {}
