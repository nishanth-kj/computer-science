import type { Level, SectionId } from "./types";
import navData from "@/data/content/nav.json";

export type NavTopic = {
  slug: string;
  section: SectionId;
  title: string;
  summary: string;
  level: Level;
  prereqs: string[];
  related: string[];
  next?: string;
  viz?: string;
  lab?: string;
};

export const NAV: NavTopic[] = navData as NavTopic[];

export const NAV_BY_SLUG: Record<string, NavTopic> = Object.fromEntries(NAV.map((t) => [t.slug, t]));
