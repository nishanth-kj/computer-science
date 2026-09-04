import type { MetadataRoute } from "next";
import { ALL_NAV, LABS, PATHS, SECTION_BY_ID } from "@/content";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = Object.keys(SECTION_BY_ID).map((id) => ({
    url: abs(`/docs/${id}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const topics = ALL_NAV.map((t) => ({
    url: abs(`/docs/${t.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const labs = LABS.map((l) => ({
    url: abs(`/labs/${l.id}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const paths = PATHS.map((p) => ({
    url: abs(`/paths/${p.id}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [
    { url: abs("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: abs("/docs"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: abs("/labs"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/graph"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/paths"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: abs("/interview"), lastModified, changeFrequency: "weekly", priority: 0.6 },
    ...sections,
    ...topics,
    ...labs,
    ...paths,
  ];
}
