import { Routes } from "@angular/router";
import { Library } from "./library";

export const LIBRARY_ROUTES: Routes = [
  { path: "topics", pathMatch: "full", component: Library, title: "Library · CS" },
];
