import type { Phase } from "./types";
import phasesData from "@/data/content/phases.json";

export const PHASES: Phase[] = phasesData as Phase[];

export const PHASE_BY_ID = Object.fromEntries(PHASES.map((p) => [p.id, p]));
