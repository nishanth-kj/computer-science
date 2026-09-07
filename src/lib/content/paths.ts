import type { LearningPath } from "./types";
import pathsData from "@/data/content/paths.json";

export const PATHS: LearningPath[] = pathsData as LearningPath[];

export const PATH_BY_ID = Object.fromEntries(PATHS.map((p) => [p.id, p]));
