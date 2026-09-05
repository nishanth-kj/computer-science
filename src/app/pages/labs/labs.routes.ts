import { Routes } from "@angular/router";
import { Lab } from "./lab/lab";
import { Labs } from "./labs";

export const LABS_ROUTES: Routes = [
  { path: "labs", pathMatch: "full", component: Labs, title: "Interactive labs · CS" },
  { path: "labs/:id", component: Lab, title: "Lab · CS" },
];
