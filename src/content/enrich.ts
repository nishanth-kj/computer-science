import type { NavTopic } from "./nav";
import { SECTION_BY_ID } from "./sections";
import type { CodeSample, ContentBlock, Topic } from "./types";
import { iq } from "./helpers";

const FLOWS: Record<string, string[]> = {
  fundamentals: ["Source code", "Compiler / interpreter", "Machine code", "Loader", "Memory", "CPU"],
  languages: ["Syntax", "Types", "Runtime", "Memory model", "Concurrency", "Stdlib"],
  dsa: ["Data shape", "Walk / update", "Invariants", "Cost as n grows", "Edge cases"],
  "discrete-math": ["Statement", "Definitions", "Proof or count", "Small example", "What it buys algorithms"],
  architecture: ["Program", "Compiler", "Machine code", "Fetch", "Decode", "Execute", "Memory", "Write-back"],
  os: ["New", "Ready", "Running", "Waiting", "Terminated"],
  networks: ["Application data", "Transport segment", "Network packet", "Data-link frame", "Physical bits"],
  dbms: ["SQL text", "Parser", "Binder", "Planner", "Executor", "Storage / WAL"],
  oop: ["Domain noun", "Interface", "Implementation", "Composition", "Tests around the seam"],
  "software-engineering": ["Change", "Review", "CI", "Deploy", "Observe", "Learn"],
  web: ["URL", "DNS", "TCP / TLS", "HTTP", "Render", "JS"],
  cybersecurity: ["Asset", "Threat", "Control", "Failure mode", "Detection"],
  compilers: ["Source", "Lexer", "Tokens", "Parser", "AST", "IR", "Optimize", "Machine code"],
  theory: ["Alphabet", "Language", "Machine", "Accept / reject", "Limitations"],
  distributed: ["Request", "Replicas", "Quorum / leader", "Failure", "Repair"],
  "system-design": ["Requirements", "Capacity", "API", "Data", "Architecture", "Scale", "Failure"],
  linux: ["Shell", "Process", "File descriptors", "Kernel", "Hardware"],
  cloud: ["API call", "Control plane", "Hypervisor / runtime", "Hardware", "Bill"],
  devops: ["Commit", "Build", "Test", "Deploy", "SLI", "Incident"],
  ai: ["State", "Search / knowledge", "Action", "Evaluate"],
  ml: ["Data", "Features", "Model", "Loss", "Evaluate", "Deploy"],
  "deep-learning": ["Input", "Layers", "Activations", "Loss", "Backprop", "Updated weights"],
  llm: ["Tokens", "Embeddings", "Attention", "Next token", "Tools / RAG"],
  graphics: ["Vertices", "Transforms", "Rasterize", "Shade", "Framebuffer"],
  vision: ["Pixels", "Filters", "Features", "Heads (class / box / mask)"],
  nlp: ["Text", "Tokens", "Embeddings", "Sequence model", "Label or generation"],
  ir: ["Crawl", "Index", "Query", "Retrieve", "Rank"],
  parallel: ["Work", "Split across cores", "Synchronize", "Join"],
  robotics: ["Sense", "Localize", "Plan", "Act"],
  mobile: ["Launch", "Foreground", "Background", "Killed", "Restore"],
  research: ["Question", "Related work", "Method", "Evidence", "Threats"],
  interview: ["Clarify", "Approach", "Code / diagram", "Complexity", "Follow-ups"],
};

const DSA_COST: Record<string, NonNullable<Topic["complexity"]>> = {
  arrays: { time: "Index O(1); scan O(n)", space: "O(n)", tradeoffs: ["Best locality", "Insert/delete in the middle is O(n)"] },
  "linked-lists": { time: "Access O(n); insert at known node O(1)", space: "O(n)", tradeoffs: ["Flexible size", "Pointer chasing, no binary search"] },
  "stack-ds": { time: "Push/pop O(1)", space: "O(n)", tradeoffs: ["Simple", "No random access"] },
  queue: { time: "Enqueue/dequeue O(1)", space: "O(n)", tradeoffs: ["Fair order", "No interior deletes"] },
  "hash-tables": { time: "Average O(1); worst O(n)", space: "O(n)", tradeoffs: ["Fast exact lookup", "No order; hash quality matters"] },
  bst: { time: "O(h); O(log n) if balanced", space: "O(n)", tradeoffs: ["Ordered ops", "Must stay balanced"] },
  heaps: { time: "Insert/extract O(log n); peek O(1)", space: "O(n)", tradeoffs: ["Priority ops", "No arbitrary find"] },
  graphs: { time: "Typically O(V+E) to walk", space: "O(V+E)", tradeoffs: ["Adj list for sparse; matrix for dense"] },
  bfs: { time: "O(V+E)", space: "O(V)", tradeoffs: ["Unweighted shortest path", "Not for positive weights"] },
  dfs: { time: "O(V+E)", space: "O(V) stack", tradeoffs: ["Cycle / topology / components", "Not shortest path"] },
  dijkstra: { time: "O((V+E) log V)", space: "O(V)", tradeoffs: ["Nonnegative weights", "No negatives"] },
  sorting: { time: "O(n log n) comparison", space: "O(1)–O(n)", tradeoffs: ["Stability vs in-place vs worst-case"] },
  "binary-search": { time: "O(log n)", space: "O(1)", tradeoffs: ["Needs sorted / monotonic input"] },
  "dynamic-programming": { time: "States × transitions", space: "Often O(states); sometimes rolling", tradeoffs: ["Polynomial vs exponential naive", "Must prove substructure"] },
  tries: { time: "O(length)", space: "O(alphabet × nodes)", tradeoffs: ["Prefix ops", "Memory vs hash maps"] },
};

const CODE: Record<string, CodeSample> = {
  variables: {
    lang: "python",
    title: "Binding a name",
    code: `n = 3          # name n points at int 3
n = n + 1      # new object 4; name rebound
nums = [1, 2]  # mutable: the list object changes in place`,
  },
  loops: {
    lang: "python",
    title: "for and while",
    code: `for x in [1, 2, 3]:
    print(x)
i = 0
while i < 3:
    i += 1`,
  },
  functions: {
    lang: "python",
    title: "A function is a named computation",
    code: `def area(w: float, h: float) -> float:
    return w * h

print(area(3, 4))`,
  },
  recursion: {
    lang: "python",
    title: "Base case, then a smaller call",
    code: `def fact(n: int) -> int:
    if n <= 1:
        return 1
    return n * fact(n - 1)`,
  },
  pointers: {
    lang: "c",
    title: "An address is a value",
    code: `int x = 7;
int *p = &x;   /* p holds the address of x */
*p = 8;        /* x is now 8 */`,
  },
  arrays: {
    lang: "python",
    title: "Contiguous, indexable",
    code: `a = [4, 1, 9]
a[1] = 2          # O(1)
a.append(5)       # amortized O(1) at the end
# insert at 0 is O(n): everything slides`,
  },
  "linked-lists": {
    lang: "python",
    title: "A node and a next",
    code: `class Node:
    def __init__(self, v, nxt=None):
        self.v, self.next = v, nxt

def prepend(head, v):
    return Node(v, head)`,
  },
  "stack-ds": {
    lang: "python",
    title: "LIFO with a list",
    code: `stack = []
stack.append(1)   # push
stack.append(2)
x = stack.pop()   # 2`,
  },
  queue: {
    lang: "python",
    title: "FIFO",
    code: `from collections import deque
q = deque()
q.append(1)     # enqueue
q.append(2)
x = q.popleft() # 1`,
  },
  "dynamic-programming": {
    lang: "python",
    title: "Fibonacci with a table",
    code: `def fib(n: int) -> int:
    if n < 2:
        return n
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])
    return dp[n]`,
  },
  mutex: {
    lang: "c",
    title: "Hold the lock, then the data",
    code: `pthread_mutex_lock(&m);
balance -= 10;     /* critical section */
pthread_mutex_unlock(&m);`,
  },
  joins: {
    lang: "sql",
    title: "Inner join",
    code: `SELECT u.name, o.amount
FROM users u
JOIN orders o ON o.user_id = u.id;`,
  },
  rest: {
    lang: "http",
    title: "A resource, a verb, a representation",
    code: `GET /v1/orders/42 HTTP/1.1
Host: api.example.com
Accept: application/json`,
  },
  git: {
    lang: "bash",
    title: "Snapshot, then share",
    code: `git switch -c fix/paging
git add src/page.ts
git commit -m "Fix off-by-one in page walk"
git push -u origin HEAD`,
  },
};

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
