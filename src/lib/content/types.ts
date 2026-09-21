export type Level = "beginner" | "intermediate" | "advanced" | "research";

export const SECTION_IDS = [
  "fundamentals",
  "languages",
  "dsa",
  "discrete-math",
  "architecture",
  "os",
  "networks",
  "dbms",
  "oop",
  "software-engineering",
  "web",
  "cybersecurity",
  "compilers",
  "theory",
  "distributed",
  "system-design",
  "linux",
  "cloud",
  "devops",
  "ai",
  "ml",
  "deep-learning",
  "llm",
  "graphics",
  "vision",
  "nlp",
  "ir",
  "parallel",
  "robotics",
  "mobile",
  "research",
  "interview",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type InterviewQ = {
  q: string;
  a: string;
  level: Level;
  followUp?: string;
};

export type CodeSample = {
  lang: string;
  title?: string;
  code: string;
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "code"; lang: string; title?: string; code: string }
  | {
      type: "callout";
      kind: "note" | "tip" | "warning" | "interview";
      title?: string;
      text: string;
    }
  | { type: "viz"; id: string }
  | { type: "flow"; steps: string[] };

export type Topic = {
  slug: string;
  section: SectionId;
  title: string;
  summary: string;
  level: Level;
  prereqs: string[];
  related: string[];
  next?: string;
  tags: string[];
  viz?: string;
  lab?: string;
  what: string;
  why: string;
  mental: string;
  points: string[];
  steps?: string[];
  code?: CodeSample;
  implementation?: string;
  complexity?: {
    time?: string;
    space?: string;
    tradeoffs: string[];
  };
  usage: string[];
  mistakes: string[];
  interview: InterviewQ[];
  extra?: ContentBlock[];
};

export type Section = {
  id: SectionId;
  title: string;
  short: string;
  blurb: string;
  icon: string;
};

export type Lab = {
  id: string;
  title: string;
  blurb: string;
  section: SectionId;
  topics: string[];
  controls: string[];
};

export type LearningPath = {
  id: string;
  title: string;
  blurb: string;
  audience: string;
  slugs: string[];
};

export type Phase = {
  id: string;
  n: number;
  title: string;
  subtitle: string;
  blurb: string;
  groups: string[];
};
