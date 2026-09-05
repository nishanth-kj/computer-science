import {
  ALL_NAV,
  PATH_BY_ID,
  SECTION_BY_ID,
  SECTION_GROUPS,
  getTopic,
  topicHref,
} from "./content";
import type { SectionId } from "./content/types";

export const SITE_NAME = "CS";
export const SITE_TAGLINE = "Learn computer science in depth";
export const SITE_DESCRIPTION =
  "The path to learn full computer science in depth — programming, systems, networks, databases, AI, theory, and ordered learning paths.";
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

  if (head === "paths" && rest.length === 0) {
    return page({
      kind: "collection",
      description: "Guided learning paths through computer science — beginner, interview, backend, and AI tracks.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Paths", path: "/paths" },
      ],
    });
  }

  if (head === "paths" && rest.length === 1) {
    const learningPath = PATH_BY_ID[rest[0]];
    if (learningPath) {
      return page({
        kind: "collection",
        description: learningPath.blurb,
        keywords: [learningPath.title, "learning path", "computer science"],
        breadcrumbs: [
          { name: SITE_NAME, path: "/" },
          { name: "Paths", path: "/paths" },
          { name: learningPath.title, path: `/paths/${learningPath.id}` },
        ],
      });
    }
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
      description: "How to report mistakes or propose pages for the computer science handbook.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Contact", path: "/contact" },
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

  if ((head === "programming" || head === "program") && rest.length === 0) {
    return page({
      kind: "collection",
      description: "Languages, fundamentals, object-oriented design, data structures, and discrete mathematics.",
      breadcrumbs: [
        { name: SITE_NAME, path: "/" },
        { name: "Programming", path: "/programming" },
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
