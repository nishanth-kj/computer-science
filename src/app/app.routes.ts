import { Routes } from "@angular/router";
import { GRAPH_ROUTES } from "./pages/graph/graph.routes";
import { HOME_ROUTES } from "./pages/home/home.routes";
import { INTERVIEW_ROUTES } from "./pages/interview-mode/interview.routes";
import { LABS_ROUTES } from "./pages/labs/labs.routes";
import { LIBRARY_ROUTES } from "./pages/library/library.routes";
import { NOT_FOUND_ROUTES } from "./pages/not-found/not-found.routes";
import { PATHS_ROUTES } from "./pages/paths/paths.routes";
import { TOPICS_ROUTES } from "./pages/topics/topics.routes";

export const routes: Routes = [
  ...HOME_ROUTES,
  ...LIBRARY_ROUTES,
  ...TOPICS_ROUTES,
  ...LABS_ROUTES,
  ...PATHS_ROUTES,
  ...INTERVIEW_ROUTES,
  ...GRAPH_ROUTES,
  ...NOT_FOUND_ROUTES,
];
