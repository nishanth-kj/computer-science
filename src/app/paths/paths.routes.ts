import { Routes } from "@angular/router";
import { Path } from "./path/path";
import { Paths } from "./paths";

export const PATHS_ROUTES: Routes = [
  { path: "paths", pathMatch: "full", component: Paths, title: "Learning paths · CS" },
  { path: "paths/:id", component: Path, title: "Path · CS" },
];
