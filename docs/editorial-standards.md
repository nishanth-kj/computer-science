# Editorial standards for the Computer Science Handbook

The goal is to teach a concept clearly, not to fill a route with words. A topic marked as editorial should help a reader explain the mechanism, trace a small example, identify failure modes, and connect it to adjacent concepts.

## Required structure

For every full lesson, provide:

- **Definition:** state what the concept is and its boundary. Separate it from nearby ideas.
- **Why it matters:** explain the problem it solves, the cost of not using it, or the failure it prevents.
- **Mental model:** give a useful analogy or invariant, then explain where the analogy stops working.
- **How it works:** at least three distinct, concept-specific facts or mechanism steps—not restatements of the summary.
- **Traceable example:** at least three steps showing an actual request, small dataset, state transition, or calculation.
- **Practical use:** at least two real usage or debugging contexts.
- **Common mistakes:** at least two plausible mistakes, and why they are wrong.
- **Interview questions:** at least two questions with direct, technically precise answers; add follow-up questions for advanced concepts.
- **Related concepts:** links should be valid, useful prerequisites or next steps.

Add code only if it makes the concept more concrete and ensure it is correct for the language/version shown. Tables and diagrams should carry explanatory information rather than decorate a page. Cite primary documentation or standards where the topic needs version-sensitive or normative claims.

## Accuracy and honesty rules

1. Do not mark a page as a full lesson merely because it has generated text. Content generated from navigation metadata is useful for discovery, but it is a summary until it has real, reviewed teaching material.
2. Do not paste the same generic paragraphs into unrelated topics. Learning points, examples, trade-offs and interview answers must be specific to the named concept.
3. State assumptions. For algorithm analysis, identify the input size and relevant operation. For protocol explanations, distinguish standards, common implementations and historical behavior. For databases, call out system-specific semantics when needed.
4. Avoid unsupported claims such as guaranteed performance, complete security, universal best practices, or guaranteed exam/interview outcomes.
5. Keep the core explanations free and accessible. Commercial recommendations and sponsorships must not control technical conclusions.

## Add or improve a lesson

1. Find the topic's slug, exact title, summary, prerequisites, related concepts and next topic in `src/data/content/nav.json` or `src/data/content/nav-rest.json`.
2. Add the full lesson to a JSON file in `src/data/content/topics/`, or add a topic-specific group where it makes maintenance easier. Full lessons are imported through `src/lib/content/index.ts`.
3. Confirm the slug appears once in the catalog and that every related slug resolves.
4. Run `npm test` and `npm run build`. The build audits the prerendered routes, metadata, sitemap and editorial coverage.
5. Review the rendered page on mobile and desktop, including code blocks, tables, the table of contents and related-topic links.

## Coverage quality gate

The editorial audit counts topics with a definition, rationale, mental model, three or more learning points, and two or more interview questions. The production build currently requires at least 50% of catalog topics to meet that structure. The warning list remains an editorial backlog: passing the threshold does not mean every remaining summary page is ready for advertising. Prioritize foundational topics and pages receiving real search demand.

The target is high-quality coverage, not merely passing a percentage threshold.
