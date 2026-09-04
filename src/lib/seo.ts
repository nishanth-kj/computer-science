import type { Metadata } from "next";
import {
  ALL_NAV,
  getTopic,
  LAB_BY_ID,
  PATH_BY_ID,
  SECTION_BY_ID,
  type SectionId,
  type Topic,
} from "@/content";

export const SITE_NAME = "CS";
export const SITE_DESCRIPTION =
  "Computer science topics — programming languages, networks, operating systems, databases, algorithms, and more.";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:8080";
}

export function abs(path: string): string {
  const base = getSiteUrl();
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}

const OG_IMAGE = { url: "/og.jpg", width: 1200, height: 630, alt: SITE_NAME };

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} — Computer science topics`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  keywords: [
    "computer science",
    "programming languages",
    "networks",
    "operating systems",
    "DBMS",
    "algorithms",
    "interview questions",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Computer science topics`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Computer science topics`,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg" },
  category: "education",
  alternates: { canonical: "/" },
};

export function topicMetadata(slug: string): Metadata {
  if (slug in SECTION_BY_ID) {
    const section = SECTION_BY_ID[slug as SectionId];
    const count = ALL_NAV.filter((t) => t.section === slug).length;
    const title = section.title;
    const description = `${section.blurb} ${count} topics.`;
    const path = `/topics/${slug}`;
    return pageMeta({ title, description, path, keywords: [section.title, section.short, "computer science"] });
  }
  const topic = getTopic(slug);
  if (!topic) return { title: "Not found", robots: { index: false, follow: false } };
  const section = SECTION_BY_ID[topic.section];
  const description = topic.summary.slice(0, 160);
  return pageMeta({
    title: topic.title,
    description,
    path: `/topics/${topic.slug}`,
    keywords: [topic.title, section.title, topic.level, ...topic.tags],
    type: "article",
  });
}

export function labMetadata(id: string): Metadata {
  const lab = LAB_BY_ID[id];
  if (!lab) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({
    title: lab.title,
    description: lab.blurb,
    path: `/labs/${id}`,
    keywords: [lab.title, "interactive lab", SECTION_BY_ID[lab.section].title],
  });
}

export function pathMetadata(id: string): Metadata {
  const path = PATH_BY_ID[id];
  if (!path) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({
    title: path.title,
    description: path.blurb,
    path: `/paths/${id}`,
    keywords: [path.title, "learning path", path.audience],
  });
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = abs(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      url,
      title: `${opts.title} · ${SITE_NAME}`,
      description: opts.description,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} · ${SITE_NAME}`,
      description: opts.description,
      images: ["/og.jpg"],
    },
  };
}

export function topicJsonLd(topic: Topic) {
  const section = SECTION_BY_ID[topic.section];
  const url = abs(`/topics/${topic.slug}`);
  const article = {
    "@type": "TechArticle",
    "@id": url,
    headline: topic.title,
    name: topic.title,
    description: topic.summary,
    url,
    inLanguage: "en",
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: abs("/favicon.svg") },
    articleSection: section.title,
    keywords: topic.tags.join(", "),
    educationalLevel: topic.level,
    mainEntityOfPage: url,
  };
  const breadcrumbs = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name: "Library", item: abs("/topics") },
      { "@type": "ListItem", position: 3, name: section.title, item: abs(`/topics/${topic.section}`) },
      { "@type": "ListItem", position: 4, name: topic.title, item: url },
    ],
  };
  const faq =
    topic.interview.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: topic.interview.map((q) => ({
            "@type": "Question",
            name: q.q,
            acceptedAnswer: { "@type": "Answer", text: q.a },
          })),
        }
      : null;
  return { "@context": "https://schema.org", "@graph": [article, breadcrumbs, faq].filter(Boolean) };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: abs("/"),
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${abs("/topics")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
