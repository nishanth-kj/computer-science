import { Routes } from "@angular/router";
import { ALL_NAV, LABS, PATHS, SECTIONS } from "@/content";
import { HomePage } from "./pages/home.page";
import { LibraryPage } from "./pages/library.page";
import { TopicPage } from "./pages/topic.page";
import { LabsPage } from "./pages/labs.page";
import { LabPage } from "./pages/lab.page";
import { PathsPage } from "./pages/paths.page";
import { PathPage } from "./pages/path.page";
import { InterviewPage } from "./pages/interview.page";
import { GraphPage } from "./pages/graph.page";
import { NotFoundPage } from "./pages/not-found.page";

const topicRoutes: Routes = [
  ...SECTIONS.map((s) => ({
    path: `topics/${s.id}`,
    component: TopicPage,
    data: { slug: s.id },
    title: `${s.title} · CS`,
  })),
  ...ALL_NAV.map((t) => ({
    path: `topics/${t.slug}`,
    component: TopicPage,
    data: { slug: t.slug },
    title: `${t.title} · CS`,
  })),
];

const labRoutes: Routes = LABS.map((l) => ({
  path: `labs/${l.id}`,
  component: LabPage,
  data: { id: l.id },
  title: `${l.title} · CS`,
}));

const pathRoutes: Routes = PATHS.map((p) => ({
  path: `paths/${p.id}`,
  component: PathPage,
  data: { id: p.id },
  title: `${p.title} · CS`,
}));

export const routes: Routes = [
  { path: "", component: HomePage, title: "CS — Computer science topics" },
  { path: "topics", component: LibraryPage, title: "Library · CS" },
  ...topicRoutes,
  { path: "labs", component: LabsPage, title: "Interactive labs · CS" },
  ...labRoutes,
  { path: "paths", component: PathsPage, title: "Learning paths · CS" },
  ...pathRoutes,
  { path: "interview", component: InterviewPage, title: "Interview · CS" },
  { path: "graph", component: GraphPage, title: "Knowledge graph · CS" },
  { path: "**", component: NotFoundPage, title: "Not found · CS" },
];
