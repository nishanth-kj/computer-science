import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

export type TableCell = string | { text: string; href?: string };

@Component({
  selector: "cs-table",
  imports: [RouterLink],
  templateUrl: "./table.html",
  styleUrl: "./table.css",
})
export class Table {
  readonly headers = input.required<string[]>();
  readonly rows = input.required<TableCell[][]>();
  readonly caption = input<string>();

  textOf(cell: TableCell) {
    return typeof cell === "string" ? cell : cell.text;
  }

  hrefOf(cell: TableCell) {
    return typeof cell === "string" ? undefined : cell.href;
  }
}
