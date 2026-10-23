import {
  ALL_NAV,
  SECTION_BY_ID,
  SECTION_GROUPS,
  getTopic,
  topicHref,
} from "./content";
import type { SectionId } from "./content/types";

export const SITE_NAME = "Computer Science Handbook";
export const SITE_TAGLINE = "Learn computer science in depth";
export const SITE_DESCRIPTION =
  "Free computer science guides with examples and diagrams for programming, algorithms, operating systems, networks, and databases.";
export const SITE_IMAGE = "/og.jpg";
export const SITE_THEME_COLOR = "#0c0e11";
export const SITE_LOCALE = "en_US";

export type SeoKind = "website" | "article" | "collection" | "notfound";

export type SeoPage = {
  description: string;
  kind: SeoKind;
  robots: string;
  keywords: string[];
  breadcrumbs: { name: string; path: string }[];
};

const INDEX = "index, follow, max-image-preview:large";
const NOINDEX = "noindex, nofollow";

const PROGRAMMING = new Set<string>(
  SECTION_GROUPS.find((g) => g.id === "programming")?.sections ?? [],
);

function page(partial: Partial<SeoPage> & Pick<SeoPage, "description">): SeoPage {
  return {
    kind: "website",
    robots: INDEX,
    keywords: ["computer science", "programming", "algorithms", "operating systems", "networks"],
    breadcrumbs: [{ name: SITE_NAME, path: "/" }],
    ...partial,
  };
}

export function describePath(path: string): SeoPage {
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) {
    return page({
      description: SITE_DESCRIPTION,
      breadcrumbs: [{ name: SITE_NAME, path: "/" }],
    });
  }

  const [head, ...rest] = parts;
  const last = parts.at(-1)!;

  if ((head === "library" || head === "topics") && rest.length === 0) {
    return page({
      kind: "collection",
      description: `A library of ${ALL_NAV.length} computer science pages across programming, systems, networks, databases, and more.`,
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Library", path: "/library" },
      ],
    });
  }

  if ((head === "quiz" || head === "interview-mode") && rest.length === 0) {
    return page({
      description: "Interview-style questions drawn from the computer science documentation.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Interview", path: "/quiz" },
      ],
    });
  }

  if (head === "about" && rest.length === 0) {
    return page({
      description: "What this computer science handbook is, and how the pages are organized.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "About", path: "/about" },
      ],
    });
  }

  if (head === "privacy" && rest.length === 0) {
    return page({
      description: "Privacy policy, cookies, and data protection practices for CS.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Privacy", path: "/privacy" },
      ],
    });
  }

  if (head === "terms" && rest.length === 0) {
    return page({
      description: "Terms of service and educational use license for CS.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Terms of Service", path: "/terms" },
      ],
    });
  }

  if (head === "contact" && rest.length === 0) {
    return page({
      description: "Contact the Computer Science Handbook to report errors, suggest topics, or discuss educational partnerships.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Contact", path: "/contact" },
      ],
    });
  }

  if (head === "support" && rest.length === 0) {
    return page({
      description: "Ways to support the free Computer Science Handbook, report corrections, or discuss clearly labeled educational sponsorships.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Support", path: "/support" },
      ],
    });
  }

  if (head === "affiliate-disclosure" && rest.length === 0) {
    return page({
      description: "Disclosure of affiliate relationships and the editorial principles used for any future affiliate recommendations.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Affiliate Disclosure", path: "/affiliate-disclosure" },
      ],
    });
  }

  if ((head === "programming" || head === "program") && rest.length === 0) {
    return page({
      kind: "collection",
      description: "Programming fundamentals, languages, object-oriented design, and data structures and algorithms.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Programming", path: "/programming" },
      ],
    });
  }

  const group = SECTION_GROUPS.find((g) => g.id === head);
  if (group && rest.length === 0 && !(head in SECTION_BY_ID)) {
    return page({
      kind: "collection",
      description: group.sections.map((id) => SECTION_BY_ID[id].title).join(", ") + ".",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: group.title, path: `/${group.id}` },
      ],
    });
  }

  if (last in SECTION_BY_ID && (parts.length === 1 || (head === "programming" && parts.length === 2))) {
    const section = SECTION_BY_ID[last as SectionId];
    const href = PROGRAMMING.has(last) ? `/programming/${last}` : `/${last}`;
    return page({
      kind: "collection",
      description: section.blurb,
      keywords: [section.title, section.short, "computer science"],
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: section.title, path: href },
      ],
    });
  }

  const topic = getTopic(last);
  if (topic) {
    const section = SECTION_BY_ID[topic.section];
    const href = topicHref(topic.slug);
    return page({
      kind: "article",
      description: topic.summary,
      keywords: [topic.title, section.title, topic.level, ...topic.tags].slice(0, 12),
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: section.title, path: PROGRAMMING.has(topic.section) ? `/programming/${topic.section}` : `/${topic.section}` },
        { name: topic.title, path: href },
      ],
    });
  }

  return page({
    kind: "notfound",
    description: "This page was not found.",
    robots: NOINDEX,
    breadcrumbs: [
      { name: SITE_NAME, path: "/" },
      { name: "Not found", path },
    ],
  });
}
