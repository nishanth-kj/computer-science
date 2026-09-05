import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppHeader } from "./components/layout/header";
import { TopicFrame } from "./components/layout/topic-frame";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, AppHeader, TopicFrame],
  template: `
    <div class="flex min-h-dvh flex-col">
      <cs-header />
      <div class="flex-1">
        <cs-topic-frame>
          <router-outlet />
        </cs-topic-frame>
      </div>
    </div>
  `,
})
export class App {}
