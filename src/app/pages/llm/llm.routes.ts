import { Routes } from "@angular/router";
import { LlmPage } from "./llm";

export const LLM_ROUTES: Routes = [
  { path: "topics/llm", component: LlmPage, title: "LLMs / Generative AI · CS" },
];
