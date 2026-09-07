import type { Section, SectionId } from "./types";
import sectionsData from "@/data/content/sections.json";
import sectionGroupsData from "@/data/content/section-groups.json";

export const SECTIONS: Section[] = sectionsData as Section[];

export const SECTION_BY_ID = Object.fromEntries(SECTIONS.map((s) => [s.id, s])) as Record<
  Section["id"],
  Section
>;

export type SectionGroup = {
  id: string;
  title: string;
  sections: SectionId[];
};

export const SECTION_GROUPS: SectionGroup[] = sectionGroupsData as SectionGroup[];
