import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "cs-footer",
  imports: [RouterLink],
  templateUrl: "./footer.html",
  styleUrl: "./footer.css",
})
export class Footer {
  readonly year = new Date().getFullYear();
}
