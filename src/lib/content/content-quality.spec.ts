import { FLAGSHIP, ALL_NAV, getTopic } from "./index";

describe("Editorial content quality", () => {
  const coreLessons = FLAGSHIP.filter((topic) => topic.tags.includes("core-concept"));

  it("adds a substantial set of authored core lessons", () => {
    expect(coreLessons.length).toBeGreaterThanOrEqual(35);
  });

  it("gives every authored core lesson a full editorial structure", () => {
    for (const entry of coreLessons) {
      const topic = getTopic(entry.slug);
      expect(topic).withContext(entry.slug).toBeDefined();
      expect(topic?.contentMode).withContext(entry.slug).toBe("editorial");
      expect(topic?.what.trim().length).withContext(`${entry.slug}: definition`).toBeGreaterThan(80);
      expect(topic?.why.trim().length).withContext(`${entry.slug}: rationale`).toBeGreaterThan(60);
      expect(topic?.mental.trim().length).withContext(`${entry.slug}: mental model`).toBeGreaterThan(40);
      expect(topic?.points.length).withContext(`${entry.slug}: learning points`).toBeGreaterThanOrEqual(3);
      expect(topic?.steps?.length ?? 0).withContext(`${entry.slug}: worked steps`).toBeGreaterThanOrEqual(3);
      expect(topic?.interview.length).withContext(`${entry.slug}: interview questions`).toBeGreaterThanOrEqual(2);
      expect(topic?.mistakes.length).withContext(`${entry.slug}: common mistakes`).toBeGreaterThanOrEqual(2);
    }
  });

  it("resolves every catalog entry and keeps catalog slugs unique", () => {
    const slugs = ALL_NAV.map((topic) => topic.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(getTopic(slug)).withContext(slug).toBeDefined();
    }
  });
});
