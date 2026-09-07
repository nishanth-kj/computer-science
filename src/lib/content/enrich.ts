import type { NavTopic } from "./nav";
import { SECTION_BY_ID } from "./sections";
import type { CodeSample, ContentBlock, Topic } from "./types";
import { iq } from "./helpers";
import flowsData from "@/data/content/enrich/flows.json";
import dsaCostData from "@/data/content/enrich/dsa-cost.json";
import codeData from "@/data/content/enrich/code.json";

const FLOWS: Record<string, string[]> = flowsData;

const DSA_COST: Record<string, NonNullable<Topic["complexity"]>> = dsaCostData;

const CODE: Record<string, CodeSample> = codeData as Record<string, CodeSample>;

function flowFor(nav: NavTopic): string[] {
  return FLOWS[nav.section] ?? ["Idea", "Mechanism", "Example", "Cost", "Failure"];
}

export function enrich(nav: NavTopic): Partial<Topic> {
  const section = SECTION_BY_ID[nav.section];
  const related = nav.related.slice(0, 3);
  const flow = flowFor(nav);
  const extra: ContentBlock[] = [
    { type: "flow", steps: flow },
    {
      type: "callout",
      kind: "note",
      title: "How to read this page",
      text: `Start with the mental model, walk the ${flow[0]!.toLowerCase()} → ${flow[flow.length - 1]!.toLowerCase()} picture, then the interview fold. ${nav.title} is a mechanism, not a slogan.`,
    },
  ];
  if (nav.section === "networks") {
    extra.push({
      type: "table",
      headers: ["Layer", "PDU", "Question"],
      rows: [
        ["7 Application", "Data", "Which protocol / URL?"],
        ["4 Transport", "Segment", "Which process (port)?"],
        ["3 Network", "Packet", "Which host (IP)?"],
        ["2 Data link", "Frame", "Which next hop (MAC)?"],
        ["1 Physical", "Bits", "Is the medium up?"],
      ],
    });
  }
  if (nav.section === "dsa") {
    extra.push({
      type: "callout",
      kind: "interview",
      title: "What they want",
      text: `Name the operations, the cost, and one input that makes the naive version blow up. For ${nav.title.toLowerCase()}, that is usually the difference between a textbook and a working answer.`,
    });
  }
  if (nav.section === "system-design") {
    extra.push({
      type: "ol",
      items: [
        "Requirements: functional vs non-functional. QPS, latency, consistency.",
        "Capacity: storage, bandwidth, servers — order-of-magnitude, not three decimals.",
        "API and data model before boxes.",
        "Draw the request path. Then kill a box.",
      ],
    });
  }

  const why = `${nav.title} is load-bearing in ${section.title}. ${nav.summary} Skip it and you memorize neighboring pages (${related.join(", ") || "the rest of the section"}). Learn it and you can draw the mechanism, name its cost, and say what breaks.`;

  const points = [
    nav.summary,
    `Place it in ${section.short}: it sits between ${nav.prereqs[0] ?? "the basics"} and ${nav.next ?? related[0] ?? "what you build next"}.`,
    `Interface vs implementation: callers depend on the contract of ${nav.title.toLowerCase()}, not on a vendor or a particular picture.`,
    `Cost: time, memory, extra machines, or operational load — pick the unit that matches ${section.short}.`,
    `Failure: describe the world when this mechanism is missing, misapplied, or only half-implemented.`,
    `Interview shape: define it in one sentence, walk a tiny example, then name a trade-off.`,
  ];

  const steps = [
    `State the problem ${nav.title} exists to solve, in ${section.short} vocabulary.`,
    `List inputs, outputs, and the invariant that means it is working.`,
    `Walk one small example — a handful of keys, packets, processes, or rows.`,
    ...flow.slice(0, 4).map((s, i) => (i === 0 ? `Picture: ${flow.join(" → ")}.` : `Check the '${s}' stage against the example.`)),
    `Name the cost and the failure. That pair is the trade-off.`,
  ].slice(0, 6);

  return {
    why,
    points,
    steps,
    extra,
    code: CODE[nav.slug],
    complexity: DSA_COST[nav.slug],
    implementation:
      nav.section === "os" || nav.section === "networks" || nav.section === "dbms" || nav.section === "compilers"
        ? `In a real system this is not a single function named ${nav.title}. It is a protocol plus state: tables, queues, or a graph the kernel, database, or compiler walks. Read the page, then the lab if there is one — the lab is the implementation you can step.`
        : undefined,
    usage: [
      `Production ${section.short.toLowerCase()} work that needs ${nav.title.toLowerCase()} as a named part, not an afterthought.`,
      `Debugging: when behavior violates the invariant this page describes.`,
      `Interviews: start from a symptom and walk back here.`,
    ],
    mistakes: [
      `Treating ${nav.title} as a brand or a buzzword instead of a mechanism with inputs and outputs.`,
      `Skipping the tiny example. If you cannot walk five elements (or two machines), you do not have it yet.`,
      `Ignoring the failure mode — every idea here is a trade-off.`,
    ],
    interview: [
      iq(`What is ${nav.title}, in one precise sentence?`, nav.summary, "beginner"),
      iq(
        `Walk a small example of ${nav.title}.`,
        `Pick a handful of elements or a two-machine picture. Trace the ${flow.join(" → ")} path until the invariant holds, then say what you would observe if it failed.`,
        "intermediate",
      ),
      iq(
        `What is the main trade-off in ${nav.title}?`,
        `Usually cost versus simplicity, or a guarantee versus availability/latency. State both sides; ${section.short} interviews punish one-sided answers.`,
        "intermediate",
      ),
      iq(
        `How does ${nav.title} relate to ${related[0] ?? nav.prereqs[0] ?? "its neighbors"}?`,
        `${nav.title} and ${related[0] ?? "the neighboring idea"} share a problem but differ in guarantee or cost. Name the guarantee this page keeps that the neighbor does not (or vice versa).`,
        "advanced",
      ),
    ],
  };
}
