import { Routes } from "@angular/router";
import { NotFound } from "./not-found";

export const NOT_FOUND_ROUTES: Routes = [
  { path: "**", component: NotFound, title: "Not found · CS" },
];
