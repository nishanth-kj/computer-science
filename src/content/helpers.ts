import type { InterviewQ, Level, Topic } from "./types";
import type { SectionId } from "./types";

export function T(p: {
  slug: string;
  section: SectionId;
  title: string;
  summary: string;
  level?: Level;
  prereqs?: string[];
  related?: string[];
  next?: string;
  tags?: string[];
  viz?: string;
  lab?: string;
  what: string;
  why: string;
  mental: string;
  points: string[];
  steps?: string[];
  code?: Topic["code"];
  implementation?: string;
  complexity?: Topic["complexity"];
  usage?: string[];
  mistakes?: string[];
  interview?: InterviewQ[];
  extra?: Topic["extra"];
}): Topic {
  return {
    slug: p.slug,
    section: p.section,
    title: p.title,
    summary: p.summary,
    level: p.level ?? "intermediate",
    prereqs: p.prereqs ?? [],
    related: p.related ?? [],
    next: p.next,
    tags: p.tags ?? [p.section],
    viz: p.viz,
    lab: p.lab,
    what: p.what,
    why: p.why,
    mental: p.mental,
    points: p.points,
    steps: p.steps,
    code: p.code,
    implementation: p.implementation,
    complexity: p.complexity,
    usage: p.usage ?? [],
    mistakes: p.mistakes ?? [],
    interview: p.interview ?? [],
    extra: p.extra,
  };
}

export const iq = (
  q: string,
  a: string,
  level: Level = "intermediate",
  followUp?: string,
): InterviewQ => ({
  q,
  a,
  level,
  followUp,
});
