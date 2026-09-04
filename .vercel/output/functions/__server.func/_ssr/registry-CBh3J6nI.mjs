import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Pause, i as SkipForward, o as RotateCcw, s as Play } from "../_libs/lucide-react.mjs";
import { C as cn, l as Button } from "./router-H1IRWEi3.mjs";
import { t as Input } from "./input-vFo9GZaa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registry-CBh3J6nI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Pipeline({ steps, active, vertical = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: cn("my-4 flex", vertical ? "flex-col" : "flex-row flex-wrap items-center gap-2"),
		children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: cn("flex", vertical ? "flex-col" : "items-center gap-2"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("rounded-md border px-3 py-2 text-sm", active === i ? "border-primary bg-primary text-primary-fg" : "border-border bg-surface text-fg"),
				children: step
			}), i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("bg-border-strong", vertical ? "mx-4 my-0.5 h-4 w-px" : "h-px w-4"),
				"aria-hidden": true
			}) : null]
		}, step + i))
	});
}
function SimShell({ title, playing, onPlay, onPause, onStep, onReset, speed, onSpeed, extra, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-surface", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 border-b border-border px-3 py-2",
			children: [
				title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mr-auto text-sm font-medium",
					children: title
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-auto" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon-sm",
							variant: "ghost",
							onClick: playing ? onPause : onPlay,
							"aria-label": playing ? "Pause" : "Play",
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 ml-px" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon-sm",
							variant: "ghost",
							onClick: onStep,
							"aria-label": "Step",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon-sm",
							variant: "ghost",
							onClick: onReset,
							"aria-label": "Reset",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-[11px] text-muted",
					children: ["Speed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 1,
						max: 5,
						value: speed,
						onChange: (e) => onSpeed(Number(e.target.value)),
						className: "w-20 accent-primary"
					})]
				}),
				extra
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-3",
			children
		})]
	});
}
function useSim(max, initialSpeed = 3) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [speed, setSpeed] = (0, import_react.useState)(initialSpeed);
	const reset = (0, import_react.useCallback)(() => {
		setPlaying(false);
		setStep(0);
	}, []);
	const next = (0, import_react.useCallback)(() => {
		setStep((s) => {
			if (s >= max) {
				setPlaying(false);
				return s;
			}
			return s + 1;
		});
	}, [max]);
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		const ms = [
			900,
			650,
			450,
			280,
			140
		][speed - 1] ?? 450;
		const id = window.setInterval(next, ms);
		return () => window.clearInterval(id);
	}, [
		playing,
		speed,
		next
	]);
	return {
		step,
		setStep,
		playing,
		play: () => setPlaying(true),
		pause: () => setPlaying(false),
		next,
		reset,
		speed,
		setSpeed
	};
}
function framesFor(algo, src) {
	const a = src.slice();
	const frames = [{
		arr: a.slice(),
		hi: []
	}];
	if (algo === "bubble") for (let i = 0; i < a.length; i++) for (let j = 0; j < a.length - 1 - i; j++) {
		frames.push({
			arr: a.slice(),
			hi: [j, j + 1]
		});
		if (a[j] > a[j + 1]) {
			[a[j], a[j + 1]] = [a[j + 1], a[j]];
			frames.push({
				arr: a.slice(),
				hi: [j, j + 1]
			});
		}
	}
	else if (algo === "insertion") for (let i = 1; i < a.length; i++) {
		let k = a[i];
		let j = i - 1;
		frames.push({
			arr: a.slice(),
			hi: [i]
		});
		while (j >= 0 && a[j] > k) {
			a[j + 1] = a[j];
			frames.push({
				arr: a.slice(),
				hi: [j, j + 1]
			});
			j--;
		}
		a[j + 1] = k;
		frames.push({
			arr: a.slice(),
			hi: [j + 1]
		});
	}
	else if (algo === "quick") {
		const qs = (lo, hi) => {
			if (lo >= hi) return;
			const p = a[hi];
			let i = lo;
			for (let j = lo; j < hi; j++) {
				frames.push({
					arr: a.slice(),
					hi: [j, hi]
				});
				if (a[j] < p) {
					[a[i], a[j]] = [a[j], a[i]];
					frames.push({
						arr: a.slice(),
						hi: [i, j]
					});
					i++;
				}
			}
			[a[i], a[hi]] = [a[hi], a[i]];
			frames.push({
				arr: a.slice(),
				hi: [i]
			});
			qs(lo, i - 1);
			qs(i + 1, hi);
		};
		qs(0, a.length - 1);
	} else {
		const sorted = src.slice().sort((x, y) => x - y);
		const target = sorted[Math.floor(sorted.length * .7)];
		let lo = 0;
		let hi = sorted.length - 1;
		frames.length = 0;
		frames.push({
			arr: sorted.slice(),
			hi: [],
			lo,
			mid: -1
		});
		while (lo <= hi) {
			const mid = lo + hi >> 1;
			frames.push({
				arr: sorted.slice(),
				hi: [mid],
				lo,
				mid
			});
			if (sorted[mid] === target) break;
			if (sorted[mid] < target) lo = mid + 1;
			else hi = mid - 1;
		}
	}
	frames.push({
		arr: (algo === "binsearch" ? src.slice().sort((x, y) => x - y) : a).slice(),
		hi: []
	});
	return frames;
}
var START = [
	7,
	2,
	9,
	4,
	1,
	8,
	5,
	3
];
function AlgorithmVisualizer() {
	const [algo, setAlgo] = (0, import_react.useState)("bubble");
	const frames = (0, import_react.useMemo)(() => framesFor(algo, START), [algo]);
	const sim = useSim(Math.max(0, frames.length - 1), 4);
	const f = frames[Math.min(sim.step, frames.length - 1)] ?? frames[0];
	const max = Math.max(...START);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimShell, {
		title: "Array algorithms",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
			value: algo,
			onChange: (e) => {
				setAlgo(e.target.value);
				sim.reset();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "bubble",
					children: "Bubble sort"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "insertion",
					children: "Insertion sort"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "quick",
					children: "Quicksort"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "binsearch",
					children: "Binary search"
				})
			]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-40 items-end gap-1",
			children: f.arr.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("w-full rounded-sm", f.hi.includes(i) ? "bg-primary" : "bg-surface-2"),
					style: { height: `${v / max * 100}%` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] tabular-nums text-muted",
					children: v
				})]
			}, i))
		})
	});
}
var NODES = [
	"Browser",
	"Stub / OS",
	"Resolver",
	"Root",
	"TLD (.com)",
	"Auth (example.com)"
];
var STEPS$2 = [
	{
		from: 0,
		to: 1,
		label: "What's the A for www.example.com?"
	},
	{
		from: 1,
		to: 2,
		label: "Recursive query"
	},
	{
		from: 2,
		to: 3,
		label: "Where is .com?"
	},
	{
		from: 3,
		to: 2,
		label: "NS for .com"
	},
	{
		from: 2,
		to: 4,
		label: "Where is example.com?"
	},
	{
		from: 4,
		to: 2,
		label: "NS for example.com"
	},
	{
		from: 2,
		to: 5,
		label: "A www.example.com?"
	},
	{
		from: 5,
		to: 2,
		label: "93.184.216.34  TTL=3600"
	},
	{
		from: 2,
		to: 1,
		label: "Answer + cache"
	},
	{
		from: 1,
		to: 0,
		label: "Use 93.184.216.34"
	}
];
function DnsSimulator() {
	const sim = useSim(STEPS$2.length - 1);
	const s = STEPS$2[sim.step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Recursive DNS lookup",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: NODES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("min-h-11 rounded-md border px-3 py-2 text-sm", i === s.from || i === s.to ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg text-fg"),
				children: n
			}, n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				NODES[s.from],
				" → ",
				NODES[s.to],
				": ",
				s.label
			]
		})]
	});
}
var STEPS$1 = [
	"URL bar: https://example.com/",
	"DNS: name → 93.184.216.34",
	"TCP handshake (1 RTT)",
	"TLS handshake (1–2 RTT)",
	"HTTP GET /  Host: example.com",
	"Server: 200 OK  text/html",
	"Parse HTML, discover CSS/JS",
	"Render: style → layout → paint"
];
function HttpSimulator() {
	const sim = useSim(STEPS$1.length - 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "A page load",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, {
			steps: STEPS$1,
			active: sim.step
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: STEPS$1[sim.step]
		})]
	});
}
function StackQueue() {
	const [stack, setStack] = (0, import_react.useState)([
		3,
		1,
		4
	]);
	const [queue, setQueue] = (0, import_react.useState)([
		1,
		2,
		3
	]);
	const [n, setN] = (0, import_react.useState)(7);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm font-medium",
						children: "Stack — LIFO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex min-h-32 flex-col-reverse gap-1",
						children: stack.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm bg-surface-2 px-3 py-1 text-center font-mono text-sm",
							children: x
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => setStack((s) => [...s, n]),
							children: ["Push ", n]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setStack((s) => s.slice(0, -1)),
							children: "Pop"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm font-medium",
						children: "Queue — FIFO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex min-h-32 items-center gap-1 overflow-x-auto",
						children: queue.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm bg-surface-2 px-3 py-1 font-mono text-sm",
							children: x
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => setQueue((q) => [...q, n]),
							children: ["Enqueue ", n]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setQueue((q) => q.slice(1)),
							children: "Dequeue"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "sm:col-span-2 flex items-center gap-2 text-sm text-muted",
				children: ["Next value", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "h-8 w-20",
					type: "number",
					value: n,
					onChange: (e) => setN(Number(e.target.value))
				})]
			})
		]
	});
}
function HashCollisions() {
	const [mode, setMode] = (0, import_react.useState)("chain");
	const [keys, setKeys] = (0, import_react.useState)([
		"cat",
		"car",
		"dog",
		"cab"
	]);
	const [input, setInput] = (0, import_react.useState)("arc");
	const m = 5;
	const hash = (k) => k.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % m;
	const buckets = Array.from({ length: m }, () => []);
	if (mode === "chain") for (const k of keys) buckets[hash(k)].push(k);
	else {
		const table = Array(m).fill(null);
		for (const k of keys) {
			let i = hash(k);
			for (let t = 0; t < m; t++) {
				if (!table[i]) {
					table[i] = k;
					break;
				}
				i = (i + 1) % m;
			}
		}
		table.forEach((k, i) => {
			if (k) buckets[i].push(k);
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
					value: mode,
					onChange: (e) => setMode(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "chain",
						children: "Chaining"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "probe",
						children: "Linear probing"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "h-8 w-28",
					value: input,
					onChange: (e) => setInput(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => input && setKeys((k) => [...k, input]),
					children: "Insert"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => setKeys([
						"cat",
						"car",
						"dog",
						"cab"
					]),
					children: "Reset"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-2",
			children: buckets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-24 rounded-md border border-border bg-bg p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] text-muted",
					children: ["#", i]
				}), b.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-fg",
					children: k
				}, k))]
			}, i))
		})]
	});
}
var G = [
	{
		id: "A",
		x: 40,
		y: 70
	},
	{
		id: "B",
		x: 140,
		y: 30
	},
	{
		id: "C",
		x: 140,
		y: 110
	},
	{
		id: "D",
		x: 240,
		y: 30
	},
	{
		id: "E",
		x: 240,
		y: 110
	},
	{
		id: "F",
		x: 340,
		y: 70
	}
];
var E = [
	["A", "B"],
	["A", "C"],
	["B", "D"],
	["C", "E"],
	["D", "F"],
	["E", "F"],
	["B", "C"]
];
function adj() {
	const m = {};
	for (const n of G) m[n.id] = [];
	for (const [a, b] of E) {
		m[a].push(b);
		m[b].push(a);
	}
	return m;
}
function walk(kind) {
	const g = adj();
	const order = [];
	const seen = /* @__PURE__ */ new Set();
	if (kind === "bfs") {
		const q = ["A"];
		seen.add("A");
		while (q.length) {
			const u = q.shift();
			order.push(u);
			for (const v of g[u]) if (!seen.has(v)) {
				seen.add(v);
				q.push(v);
			}
		}
	} else {
		const rec = (u) => {
			seen.add(u);
			order.push(u);
			for (const v of g[u]) if (!seen.has(v)) rec(v);
		};
		rec("A");
	}
	return order;
}
function GraphSearch() {
	const [kind, setKind] = (0, import_react.useState)("bfs");
	const order = (0, import_react.useMemo)(() => walk(kind), [kind]);
	const sim = useSim(order.length - 1);
	const active = new Set(order.slice(0, sim.step + 1));
	const current = order[sim.step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Graph search",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
			value: kind,
			onChange: (e) => {
				setKind(e.target.value);
				sim.reset();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "bfs",
				children: "BFS"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "dfs",
				children: "DFS"
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 380 150",
			className: "h-40 w-full",
			children: [E.map(([a, b]) => {
				const na = G.find((n) => n.id === a);
				const nb = G.find((n) => n.id === b);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: na.x,
					y1: na.y,
					x2: nb.x,
					y2: nb.y,
					className: "stroke-border-strong",
					strokeWidth: "2"
				}, a + b);
			}), G.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: n.x,
				cy: n.y,
				r: "16",
				className: cn(n.id === current ? "fill-primary" : active.has(n.id) ? "fill-ok" : "fill-surface-2")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: n.x,
				y: n.y + 4,
				textAnchor: "middle",
				className: n.id === current ? "fill-primary-fg" : "fill-fg",
				fontSize: "12",
				children: n.id
			})] }, n.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-muted",
			children: ["order: ", order.slice(0, sim.step + 1).join(" → ")]
		})]
	});
}
function DijkstraViz() {
	const distFrames = [
		{
			A: 0,
			B: 4,
			C: 2,
			D: Infinity,
			E: Infinity,
			F: Infinity,
			at: "A"
		},
		{
			A: 0,
			B: 4,
			C: 2,
			D: Infinity,
			E: 5,
			F: Infinity,
			at: "C"
		},
		{
			A: 0,
			B: 4,
			C: 2,
			D: 7,
			E: 5,
			F: Infinity,
			at: "B"
		},
		{
			A: 0,
			B: 4,
			C: 2,
			D: 7,
			E: 5,
			F: 9,
			at: "E"
		},
		{
			A: 0,
			B: 4,
			C: 2,
			D: 7,
			E: 5,
			F: 9,
			at: "D"
		},
		{
			A: 0,
			B: 4,
			C: 2,
			D: 7,
			E: 5,
			F: 9,
			at: "F"
		}
	];
	const sim = useSim(distFrames.length - 1);
	const f = distFrames[sim.step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Dijkstra from A",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: Object.entries(f).filter(([k]) => k !== "at").map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-md border px-3 py-2 font-mono text-sm", f.at === k ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg"),
				children: [
					k,
					": ",
					v === Infinity ? "∞" : v
				]
			}, k))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm text-muted",
			children: [
				"Settling ",
				f.at,
				". Nonnegative edges, greedy frontier."
			]
		})]
	});
}
function insert(n, k) {
	if (!n) return { k };
	if (k < n.k) return {
		...n,
		l: insert(n.l, k)
	};
	if (k > n.k) return {
		...n,
		r: insert(n.r, k)
	};
	return n;
}
function layout(n, x, y, dx, acc = []) {
	if (!n) return acc;
	acc.push({
		k: n.k,
		x,
		y
	});
	if (n.l) {
		acc.push({
			k: n.l.k,
			x: x - dx,
			y: y + 56,
			p: n.k
		});
		layout(n.l, x - dx, y + 56, dx / 1.7, acc);
	}
	if (n.r) {
		acc.push({
			k: n.r.k,
			x: x + dx,
			y: y + 56,
			p: n.k
		});
		layout(n.r, x + dx, y + 56, dx / 1.7, acc);
	}
	return acc;
}
function BstExplorer() {
	const [root, setRoot] = (0, import_react.useState)(() => [
		8,
		3,
		10,
		1,
		6,
		14,
		4,
		7
	].reduce((n, k) => insert(n, k), void 0));
	const [val, setVal] = (0, import_react.useState)(13);
	const nodes = (0, import_react.useMemo)(() => {
		const raw = layout(root, 200, 28, 90);
		const uniq = /* @__PURE__ */ new Map();
		for (const n of raw) uniq.set(n.k, n);
		return [...uniq.values()];
	}, [root]);
	const byK = new Map(nodes.map((n) => [n.k, n]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "h-8 w-20",
					type: "number",
					value: val,
					onChange: (e) => setVal(Number(e.target.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setRoot((r) => insert(r, val)),
					children: "Insert"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => setRoot([
						8,
						3,
						10,
						1,
						6,
						14,
						4,
						7
					].reduce((n, k) => insert(n, k), void 0)),
					children: "Reset"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 240",
			className: "h-56 w-full",
			children: [nodes.map((n) => n.p != null && byK.get(n.p) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: byK.get(n.p).x,
				y1: byK.get(n.p).y,
				x2: n.x,
				y2: n.y,
				className: "stroke-border-strong",
				strokeWidth: "1.5"
			}, "e" + n.k) : null), nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: n.x,
				cy: n.y,
				r: "14",
				className: "fill-surface-2 stroke-border"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: n.x,
				y: n.y + 4,
				textAnchor: "middle",
				className: "fill-fg",
				fontSize: "11",
				children: n.k
			})] }, n.k))]
		})]
	});
}
var JOBS = [
	{
		id: "P1",
		burst: 5,
		arrival: 0,
		color: "bg-layer-app"
	},
	{
		id: "P2",
		burst: 3,
		arrival: 1,
		color: "bg-layer-trans"
	},
	{
		id: "P3",
		burst: 8,
		arrival: 2,
		color: "bg-layer-net"
	},
	{
		id: "P4",
		burst: 2,
		arrival: 3,
		color: "bg-layer-dl"
	}
];
function schedule(kind, quantum) {
	const slots = [];
	if (kind === "fcfs") {
		let t = 0;
		for (const j of JOBS) {
			t = Math.max(t, j.arrival);
			for (let k = 0; k < j.burst; k++) slots.push({
				id: j.id,
				t: t++
			});
		}
	} else if (kind === "sjf") {
		const left = JOBS.map((j) => ({
			...j,
			rem: j.burst
		}));
		let t = 0;
		while (left.some((j) => j.rem > 0)) {
			const ready = left.filter((j) => j.arrival <= t && j.rem > 0).sort((a, b) => a.rem - b.rem);
			if (!ready.length) {
				t++;
				continue;
			}
			const j = ready[0];
			slots.push({
				id: j.id,
				t: t++
			});
			j.rem--;
		}
	} else {
		const left = JOBS.map((j) => ({
			...j,
			rem: j.burst
		}));
		let t = 0;
		const q = [];
		const inq = /* @__PURE__ */ new Set();
		while (left.some((j) => j.rem > 0)) {
			for (const j of left) if (j.arrival === t && !inq.has(j.id) && j.rem > 0) {
				q.push(j);
				inq.add(j.id);
			}
			if (!q.length) {
				t++;
				continue;
			}
			const j = q.shift();
			inq.delete(j.id);
			const run = Math.min(quantum, j.rem);
			for (let k = 0; k < run; k++) {
				slots.push({
					id: j.id,
					t: t++
				});
				j.rem--;
				for (const o of left) if (o.arrival === t && !inq.has(o.id) && o.rem > 0 && o.id !== j.id) {
					q.push(o);
					inq.add(o.id);
				}
			}
			if (j.rem > 0) {
				q.push(j);
				inq.add(j.id);
			}
		}
	}
	return slots;
}
function CpuScheduler() {
	const [kind, setKind] = (0, import_react.useState)("rr");
	const [q, setQ] = (0, import_react.useState)(2);
	const slots = (0, import_react.useMemo)(() => schedule(kind, q), [kind, q]);
	const sim = useSim(slots.length - 1, 4);
	const shown = slots.slice(0, sim.step + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "CPU scheduler",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
			value: kind,
			onChange: (e) => {
				setKind(e.target.value);
				sim.reset();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "fcfs",
					children: "FCFS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "sjf",
					children: "SJF (preemptive)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "rr",
					children: "Round robin"
				})
			]
		}), kind === "rr" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex items-center gap-1 text-[11px] text-muted",
			children: ["q", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "number",
				min: 1,
				max: 5,
				value: q,
				onChange: (e) => setQ(Number(e.target.value)),
				className: "h-8 w-12 rounded-sm border border-border bg-bg px-1"
			})]
		}) : null] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-12 overflow-hidden rounded-md border border-border",
			children: shown.map((s, i) => {
				const job = JOBS.find((j) => j.id === s.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex flex-1 items-center justify-center font-mono text-[10px] text-[#0c0e11]", job.color),
					title: `${s.id} @ t=${s.t}`,
					children: s.id
				}, i);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 font-mono text-xs text-muted",
			children: ["t = ", sim.step]
		})]
	});
}
function ProcessStates() {
	const states = [
		"new",
		"ready",
		"running",
		"waiting",
		"terminated"
	];
	const events = [
		{
			to: 1,
			label: "admitted"
		},
		{
			to: 2,
			label: "scheduler dispatch"
		},
		{
			to: 3,
			label: "I/O or wait"
		},
		{
			to: 1,
			label: "I/O done"
		},
		{
			to: 2,
			label: "dispatch again"
		},
		{
			to: 4,
			label: "exit"
		}
	];
	const sim = useSim(events.length - 1);
	const at = events[sim.step].to;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Process state machine",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: states.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("min-h-11 rounded-md border px-3 py-2 text-sm capitalize", i === at ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg"),
				children: s
			}, s))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: events[sim.step].label
		})]
	});
}
function PagingSim() {
	const refs = [
		0,
		2,
		1,
		3,
		0,
		4,
		2
	];
	const sim = useSim(refs.length - 1);
	const frames = 3;
	const mem = [];
	const faults = [];
	for (let i = 0; i <= sim.step; i++) {
		const p = refs[i];
		if (mem.includes(p)) faults.push(false);
		else {
			faults.push(true);
			if (mem.length < frames) mem.push(p);
			else mem[i % frames] = p;
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Paging (3 frames, FIFO-ish fill)",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2 font-mono text-xs text-muted",
				children: [
					"refs: ",
					refs.join(" "),
					" — access ",
					refs[sim.step]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: Array.from({ length: frames }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-md border border-border bg-bg font-mono text-lg",
					children: mem[i] ?? "—"
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: faults[sim.step] ? "page fault" : "hit"
			})
		]
	});
}
function PageReplacement() {
	const refs = [
		7,
		0,
		1,
		2,
		0,
		3,
		0,
		4
	];
	const [algo, setAlgo] = (0, import_react.useState)("lru");
	function run(kind) {
		const frames = [];
		const hist = [];
		const q = [];
		for (const r of refs) {
			let fault = false;
			if (!frames.includes(r)) {
				fault = true;
				if (frames.length < 3) {
					frames.push(r);
					q.push(r);
				} else if (kind === "fifo") {
					const victim = q.shift();
					const i = frames.indexOf(victim);
					frames[i] = r;
					q.push(r);
				} else {
					const victim = q.shift();
					const i = frames.indexOf(victim);
					frames[i] = r;
					q.push(r);
				}
			} else if (kind === "lru") {
				q.splice(q.indexOf(r), 1);
				q.push(r);
			}
			hist.push({
				frames: frames.slice(),
				fault,
				ref: r
			});
		}
		return hist;
	}
	const hist = (0, import_react.useMemo)(() => run(algo), [algo]);
	const sim = useSim(hist.length - 1);
	const h = hist[sim.step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Page replacement",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
			value: algo,
			onChange: (e) => {
				setAlgo(e.target.value);
				sim.reset();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "fifo",
				children: "FIFO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "lru",
				children: "LRU"
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-muted",
			children: [
				"access ",
				h.ref,
				" — ",
				h.fault ? "fault" : "hit"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex gap-2",
			children: h.frames.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-14 w-14 items-center justify-center rounded-md border border-border bg-bg font-mono",
				children: f
			}, i))
		})]
	});
}
function DeadlockSim() {
	const steps = [
		"P1 holds R1",
		"P2 holds R2",
		"P1 requests R2 — waits",
		"P2 requests R1 — cycle",
		"Deadlock detected",
		"Abort P2, R2 freed",
		"P1 acquires R2, finishes"
	];
	const sim = useSim(steps.length - 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Deadlock",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-lg border p-3", sim.step >= 4 && sim.step < 6 ? "border-danger" : "border-border"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "P1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						sim.step >= 0 ? "has R1" : "",
						" ",
						sim.step >= 2 && sim.step < 6 ? "wants R2" : ""
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-lg border p-3", sim.step >= 4 && sim.step < 6 ? "border-danger" : "border-border"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "P2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						sim.step >= 1 && sim.step < 6 ? "has R2" : "",
						" ",
						sim.step >= 3 && sim.step < 6 ? "wants R1" : ""
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: steps[sim.step]
		})]
	});
}
var PIPE = [
	"Fetch",
	"Decode",
	"Execute",
	"Memory",
	"Writeback"
];
function CpuPipelineViz() {
	const instr = [
		"ld r1",
		"add r2",
		"st r1",
		"bne",
		"nop"
	];
	const sim = useSim(8, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimShell, {
		title: "5-stage pipeline",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-1",
			children: PIPE.map((p, i) => {
				const idx = sim.step - i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-bg p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] text-muted",
						children: p
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: idx >= 0 && idx < instr.length ? instr[idx] : "—"
					})]
				}, p);
			})
		})
	});
}
function LoadBalancerViz() {
	const [alive, setAlive] = (0, import_react.useState)([
		true,
		true,
		true
	]);
	const [counts, setCounts] = (0, import_react.useState)([
		0,
		0,
		0
	]);
	const send = () => {
		const pool = alive.map((a, i) => a ? i : -1).filter((i) => i >= 0);
		if (!pool.length) return;
		const i = pool.reduce((best, i) => counts[i] < counts[best] ? i : best, pool[0]);
		setCounts((c) => c.map((n, k) => k === i ? n + 1 : n));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: send,
					children: "Send request"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => {
						setCounts([
							0,
							0,
							0
						]);
						setAlive([
							true,
							true,
							true
						]);
					},
					children: "Reset"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: counts.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setAlive((a) => a.map((x, k) => k === i ? !x : x)),
					className: cn("min-h-20 rounded-lg border p-3 text-left", alive[i] ? "border-border bg-bg" : "border-danger bg-danger/10"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: ["backend ", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: alive[i] ? `${n} req` : "down"
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Least-connections. Click a backend to kill or revive it."
			})
		]
	});
}
function ConsistentHashViz() {
	const [nodes, setNodes] = (0, import_react.useState)([
		2,
		7,
		14
	]);
	const ring = 18;
	const keys = [
		1,
		4,
		8,
		11,
		16
	];
	const owner = (k) => {
		const sorted = [...nodes].sort((a, b) => a - b);
		return sorted.find((n) => n >= k) ?? sorted[0];
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => setNodes((n) => n.length < 6 ? [...n, (n[n.length - 1] + 3) % ring] : n),
						children: "Add node"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setNodes((n) => n.slice(0, -1)),
						children: "Remove"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => setNodes([
							2,
							7,
							14
						]),
						children: "Reset"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto size-56",
				children: Array.from({ length: ring }, (_, i) => {
					const ang = i / ring * Math.PI * 2 - Math.PI / 2;
					const x = 104 + Math.cos(ang) * 88;
					const y = 104 + Math.sin(ang) * 88;
					const isNode = nodes.includes(i);
					const isKey = keys.includes(i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full", isNode ? "size-5 bg-primary" : isKey ? "bg-ok" : "bg-border"),
						style: {
							left: x,
							top: y
						},
						title: isNode ? `node ${i}` : isKey ? `key ${i} → ${owner(i)}` : String(i)
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 font-mono text-xs text-muted",
				children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"key ",
					k,
					" → node ",
					owner(k)
				] }, k))
			})
		]
	});
}
function LeaderElection() {
	const steps = [
		{
			leader: 0,
			dead: -1,
			note: "A is leader, B and C follow"
		},
		{
			leader: 0,
			dead: 0,
			note: "A crashes. Heartbeats stop."
		},
		{
			leader: 1,
			dead: 0,
			note: "B times out, starts election, wins."
		},
		{
			leader: 1,
			dead: 0,
			note: "Clients now talk to B."
		}
	];
	const sim = useSim(steps.length - 1);
	const s = steps[sim.step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Leader election",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-3",
			children: [
				"A",
				"B",
				"C"
			].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("min-h-20 flex-1 rounded-lg border p-3", s.dead === i ? "border-danger opacity-50" : s.leader === i ? "border-primary bg-primary/10" : "border-border"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: s.dead === i ? "down" : s.leader === i ? "leader" : "follower"
				})]
			}, n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: s.note
		})]
	});
}
function CacheSim() {
	const [assoc, setAssoc] = (0, import_react.useState)(1);
	const addrs = [
		0,
		8,
		16,
		0,
		24,
		8
	];
	const sim = useSim(addrs.length - 1);
	const sets = 4;
	const cache = Array.from({ length: sets }, () => []);
	let hits = 0;
	let lastHit = false;
	for (let i = 0; i <= sim.step; i++) {
		const a = addrs[i];
		const line = cache[a / 8 % sets];
		if (line.includes(a)) {
			hits++;
			lastHit = true;
		} else {
			lastHit = false;
			if (line.length >= assoc) line.shift();
			line.push(a);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Cache",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
			value: assoc,
			onChange: (e) => {
				setAssoc(Number(e.target.value));
				sim.reset();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: 1,
				children: "direct-mapped"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: 2,
				children: "2-way"
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-muted",
			children: [
				"addr ",
				addrs[sim.step],
				" — ",
				lastHit ? "hit" : "miss",
				" (",
				hits,
				" hits)"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 grid grid-cols-4 gap-2",
			children: cache.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-bg p-2 font-mono text-xs",
				children: [
					"set ",
					i,
					": ",
					line.join(", ") || "—"
				]
			}, i))
		})]
	});
}
function RoutingSim() {
	const table = [
		{
			prefix: "10.0.0.0/16",
			nh: "R1"
		},
		{
			prefix: "10.1.0.0/16",
			nh: "R2"
		},
		{
			prefix: "10.1.4.0/24",
			nh: "R3"
		},
		{
			prefix: "0.0.0.0/0",
			nh: "ISP"
		}
	];
	const dests = [
		"10.1.4.22",
		"10.1.9.1",
		"10.0.3.4",
		"8.8.8.8"
	];
	const sim = useSim(dests.length - 1);
	const dest = dests[sim.step];
	const pick = dest.startsWith("10.1.4") ? "R3" : dest.startsWith("10.1") ? "R2" : dest.startsWith("10.0") ? "R1" : "ISP";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Longest-prefix match",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-2 text-sm",
			children: [
				"Packet to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: dest
				}),
				" → ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: pick
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-1",
					children: "prefix"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "next hop" })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: table.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: r.nh === pick ? "bg-surface-2" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-1 font-mono text-xs",
					children: r.prefix
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.nh })]
			}, r.prefix)) })]
		})]
	});
}
function BPlusTreeViz() {
	const [keys, setKeys] = (0, import_react.useState)([
		2,
		5,
		8,
		11,
		14,
		17
	]);
	const [n, setN] = (0, import_react.useState)(19);
	const leaves = [];
	for (let i = 0; i < keys.length; i += 3) leaves.push(keys.slice(i, i + 3));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "h-8 w-20",
						type: "number",
						value: n,
						onChange: (e) => setN(Number(e.target.value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => setKeys((k) => [...k, n].sort((a, b) => a - b)),
						children: "Insert"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setKeys([
							2,
							5,
							8,
							11,
							14,
							17
						]),
						children: "Reset"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-2",
				children: leaves.map((leaf, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-border bg-bg px-3 py-2 font-mono text-xs",
					children: leaf.join(" · ")
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-[11px] text-muted",
				children: "Leaves of a B+ tree (order ~3). Insert and watch splits conceptually group by threes."
			})
		]
	});
}
function TransactionIso() {
	const levels = [
		"read uncommitted",
		"read committed",
		"repeatable read",
		"serializable"
	];
	const [level, setLevel] = (0, import_react.useState)("read committed");
	const sim = useSim(4);
	const dirty = level === "read uncommitted" && sim.step >= 1 && sim.step < 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimShell, {
		title: "Isolation",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "h-8 rounded-sm border border-border bg-bg px-2 text-xs",
			value: level,
			onChange: (e) => setLevel(e.target.value),
			children: levels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: l }, l))
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "T1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: [
						"BEGIN",
						"UPDATE bal=0",
						"… still open",
						"ROLLBACK",
						"done"
					][sim.step]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "T2 reads bal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: dirty ? "text-danger" : "text-muted",
					children: sim.step === 0 ? "—" : dirty ? "0 (dirty read)" : "100 (committed snapshot)"
				})]
			})]
		})
	});
}
function NeuralNetViz() {
	const sim = useSim(4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "Tiny network",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center gap-6 py-4",
			children: [
				1,
				3,
				1
			].map((n, layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: Array.from({ length: n }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("size-8 rounded-full border", sim.step >= layer ? "border-primary bg-primary/30" : "border-border bg-bg") }, i))
			}, layer))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-muted",
			children: [
				"input x",
				"z = Wx+b",
				"a = σ(z)",
				"loss vs y",
				"backprop, W ← W − η∇W"
			][sim.step]
		})]
	});
}
function DfaSim() {
	const [s, setS] = (0, import_react.useState)("010");
	const machine = [
		{
			q: 0,
			"0": 0,
			"1": 1
		},
		{
			q: 1,
			"0": 2,
			"1": 1
		},
		{
			q: 2,
			"0": 0,
			"1": 1
		}
	];
	const accept = /* @__PURE__ */ new Set([2]);
	const path = [0];
	for (const ch of s) {
		const last = path[path.length - 1];
		const row = machine[last];
		path.push(ch === "0" || ch === "1" ? row[ch] : last);
	}
	const sim = useSim(Math.max(0, path.length - 1));
	const q = path[Math.min(sim.step, path.length - 1)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "DFA: strings that end in 01",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			className: "h-8 w-28 font-mono",
			value: s,
			onChange: (e) => {
				setS(e.target.value.replace(/[^01]/g, ""));
				sim.reset();
			}
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2",
			children: [
				0,
				1,
				2
			].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex size-14 items-center justify-center rounded-full border text-sm", q === st ? "border-primary bg-primary text-primary-fg" : "border-border", accept.has(st) && "ring-2 ring-ok ring-offset-2 ring-offset-surface"),
				children: ["q", st]
			}, st))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 font-mono text-xs text-muted",
			children: [
				"input ",
				s,
				" — ",
				accept.has(path[path.length - 1]) ? "ACCEPT" : "REJECT"
			]
		})]
	});
}
function lex(src) {
	const out = [];
	const re = /\s+|([A-Za-z_]\w*)|(\d+)|([=+\-*/()])|./g;
	let m;
	while (m = re.exec(src)) {
		if (m[0].trim() === "") continue;
		if (m[1]) out.push({
			kind: m[1] === "let" || m[1] === "print" ? "kw" : "id",
			value: m[1]
		});
		else if (m[2]) out.push({
			kind: "num",
			value: m[2]
		});
		else if (m[3]) out.push({
			kind: "op",
			value: m[3]
		});
		else out.push({
			kind: "err",
			value: m[0]
		});
	}
	return out;
}
function parseExpr(tokens, i = { n: 0 }) {
	const peek = () => tokens[i.n];
	const eat = () => tokens[i.n++];
	function factor() {
		const t = eat();
		if (!t) return "?";
		if (t.value === "(") {
			const inner = expr();
			if (peek()?.value === ")") eat();
			return inner;
		}
		return t.value;
	}
	function term() {
		let left = factor();
		while (peek()?.value === "*" || peek()?.value === "/") left = `(${eat().value} ${left} ${factor()})`;
		return left;
	}
	function expr() {
		let left = term();
		while (peek()?.value === "+" || peek()?.value === "-") left = `(${eat().value} ${left} ${term()})`;
		return left;
	}
	if (peek()?.value === "let") {
		eat();
		const name = eat()?.value ?? "x";
		if (peek()?.value === "=") eat();
		return `(let ${name} ${expr()})`;
	}
	return expr();
}
function CompilerExplorer() {
	const [src, setSrc] = (0, import_react.useState)("let x = 1 + 2 * 3");
	const tokens = lex(src);
	let ast = "";
	try {
		ast = parseExpr(tokens);
	} catch {
		ast = "(error)";
	}
	const ir = ast.replace(/^\(let (\w+) /, "x = ").replace(/\)$/, "").replace(/\((\W) /g, "$1 ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "mb-3 h-20 w-full rounded-md border border-border bg-bg p-2 font-mono text-sm",
				value: src,
				onChange: (e) => setSrc(e.target.value),
				"aria-label": "Source"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-[11px] text-muted",
				children: "Tokens"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: tokens.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-sm bg-bg px-2 py-0.5 font-mono text-[11px]",
					children: [
						t.kind,
						":",
						t.value
					]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] text-muted",
				children: "AST"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "overflow-x-auto font-mono text-[11px] text-muted",
				children: ast
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] text-muted",
				children: "IR (three-address-ish)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "overflow-x-auto font-mono text-[11px] text-muted",
				children: ir
			})
		]
	});
}
var USERS = [
	{
		id: 1,
		name: "Ada",
		country: "UK"
	},
	{
		id: 2,
		name: "Alan",
		country: "UK"
	},
	{
		id: 3,
		name: "Grace",
		country: "US"
	}
];
var ORDERS = [
	{
		id: 10,
		user_id: 1,
		amount: 40
	},
	{
		id: 11,
		user_id: 1,
		amount: 15
	},
	{
		id: 12,
		user_id: 2,
		amount: 70
	},
	{
		id: 13,
		user_id: 3,
		amount: 20
	}
];
function runSql(q) {
	const m = q.trim().replace(/;+$/, "").match(/^select\s+(.+)\s+from\s+(\w+)(?:\s+join\s+(\w+)\s+on\s+(\w+)\.(\w+)\s*=\s*(\w+)\.(\w+))?(?:\s+where\s+(\w+)\s*=\s*'?([^']+)'?)?$/i);
	if (!m) return { error: "Supported: SELECT cols FROM users|orders [JOIN ... ON a.b = c.d] [WHERE col = value]" };
	const cols = m[1].split(",").map((c) => c.trim());
	const from = m[2].toLowerCase();
	let rows = from === "users" ? USERS.map((u) => ({ ...u })) : from === "orders" ? ORDERS.map((o) => ({ ...o })) : [];
	if (!rows.length) return { error: "Unknown table. Try users or orders." };
	if (m[3]) {
		const right = m[3].toLowerCase() === "users" ? USERS : ORDERS;
		const la = m[5];
		const rb = m[7];
		const joined = [];
		for (const L of rows) for (const R of right) if (String(L[la]) === String(R[rb])) joined.push({
			...L,
			...R,
			id: L.id
		});
		rows = joined;
	}
	if (m[8]) {
		const col = m[8];
		const val = m[9];
		rows = rows.filter((r) => String(r[col]) === val);
	}
	const headers = cols[0] === "*" ? Object.keys(rows[0] ?? {}) : cols;
	return {
		headers,
		rows: rows.map((r) => headers.map((h) => String(r[h] ?? "")))
	};
}
function SqlPlayground() {
	const [q, setQ] = (0, import_react.useState)("SELECT name, country FROM users");
	const [out, setOut] = (0, import_react.useState)(() => runSql("SELECT name, country FROM users"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "h-20 w-full rounded-md border border-border bg-bg p-2 font-mono text-sm",
				value: q,
				onChange: (e) => setQ(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setOut(runSql(q)),
					children: "Run"
				}), [
					["SELECT * FROM users", "All users"],
					["SELECT name FROM users WHERE country = 'UK'", "Filter UK"],
					["SELECT name, amount FROM users JOIN orders ON users.id = orders.user_id", "Join orders"]
				].map(([s, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => {
						setQ(s);
						setOut(runSql(s));
					},
					children: label
				}, s))]
			}),
			"error" in out ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-danger",
				children: out.error
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "mt-3 w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "text-muted",
					children: out.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-1 pr-3 font-mono text-xs",
						children: h
					}, h))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: out.rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-t border-border",
					children: r.map((c, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-1 pr-3",
						children: c
					}, j))
				}, i)) })]
			})
		]
	});
}
var FS0 = {
	home: { user: {
		"readme.txt": "Welcome to the CS terminal.\nTry ls, cd, cat, grep, pwd.",
		notes: { "osi.txt": "Seven layers. Encapsulation going down." }
	} },
	etc: {
		hostname: "csref",
		passwd: "root:x:0:0"
	},
	proc: { version: "Linux csref 6.8.0" }
};
function getPath(fs, parts) {
	let cur = fs;
	for (const p of parts) {
		if (p === "" || p === ".") continue;
		if (typeof cur === "string") return void 0;
		cur = cur[p];
		if (cur === void 0) return void 0;
	}
	return cur;
}
function LinuxTerminal() {
	const [cwd, setCwd] = (0, import_react.useState)(["home", "user"]);
	const [lines, setLines] = (0, import_react.useState)(["CS terminal. Type help."]);
	const [cmd, setCmd] = (0, import_react.useState)("");
	const run = (raw) => {
		const [c, ...args] = raw.trim().split(/\s+/);
		const out = [`$ ${raw}`];
		const loc = () => "/" + cwd.join("/");
		if (!c || c === "help") out.push("help ls cd pwd cat echo mkdir grep whoami uname date ps");
		else if (c === "pwd") out.push(loc());
		else if (c === "whoami") out.push("user");
		else if (c === "uname") out.push("Linux csref 6.8.0");
		else if (c === "date") out.push((/* @__PURE__ */ new Date()).toUTCString());
		else if (c === "ps") out.push("PID TTY CMD\n  1 ?   init\n 42 pts/0 bash");
		else if (c === "ls") {
			const node = getPath(FS0, cwd);
			if (node && typeof node !== "string") out.push(Object.keys(node).join("  "));
			else out.push("not a directory");
		} else if (c === "cd") {
			const t = args[0] ?? "/home/user";
			let next = [...cwd];
			if (t.startsWith("/")) next = t.split("/").filter(Boolean);
			else if (t === "..") next = next.slice(0, -1);
			else next = [...next, ...t.split("/").filter(Boolean)];
			const node = getPath(FS0, next);
			if (node && typeof node !== "string") setCwd(next);
			else out.push("cd: no such directory");
		} else if (c === "cat") {
			const node = getPath(FS0, [...cwd, args[0] ?? ""]);
			if (typeof node === "string") out.push(node);
			else out.push("cat: not a file");
		} else if (c === "echo") out.push(args.join(" "));
		else if (c === "grep") {
			const node = getPath(FS0, [...cwd, args[1] ?? ""]);
			if (typeof node === "string") out.push(...node.split("\n").filter((l) => l.includes(args[0] ?? "")));
			else out.push("grep: not a file");
		} else out.push(`${c}: command not found`);
		setLines((L) => [...L, ...out].slice(-80));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-[#0c0e11] p-3 font-mono text-[13px] text-[#e8eaee]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 max-h-56 overflow-y-auto whitespace-pre-wrap",
			children: lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: l }, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				if (cmd.trim()) run(cmd);
				setCmd("");
			},
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-ok",
				children: "user@csref"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "min-w-0 flex-1 bg-transparent outline-none",
				value: cmd,
				onChange: (e) => setCmd(e.target.value),
				"aria-label": "Terminal input"
			})]
		})]
	});
}
function MemoryMap() {
	const [frames, setFrames] = (0, import_react.useState)([{
		name: "main",
		locals: ["argc", "argv"]
	}]);
	const [heap, setHeap] = (0, import_react.useState)([{
		id: "h0",
		label: "config {}"
	}]);
	const [n, setN] = (0, import_react.useState)(1);
	const call = () => {
		const name = n === 1 ? "parse()" : n === 2 ? "eval()" : `fn${n}()`;
		setFrames((f) => [...f, {
			name,
			locals: ["i", "tmp"]
		}]);
		setN((x) => x + 1);
	};
	const ret = () => setFrames((f) => f.length > 1 ? f.slice(0, -1) : f);
	const alloc = () => setHeap((h) => [...h, {
		id: "h" + h.length,
		label: h.length % 2 ? "buf[64]" : "Node"
	}]);
	const freeLast = () => setHeap((h) => h.slice(0, Math.max(1, h.length - 1)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 border-b border-border px-3 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mr-auto text-sm font-medium",
					children: "Process address space"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: call,
					children: "Call"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: ret,
					children: "Return"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: alloc,
					children: "malloc"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: freeLast,
					children: "free"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => {
						setFrames([{
							name: "main",
							locals: ["argc", "argv"]
						}]);
						setHeap([{
							id: "h0",
							label: "config {}"
						}]);
						setN(1);
					},
					children: "Reset"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 p-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Region, {
					title: "Stack (grows down)",
					hint: "one frame per active call",
					children: [...frames].reverse().map((fr, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("rounded-sm border px-2 py-1 font-mono text-[11px]", i === 0 ? "border-primary bg-primary/10" : "border-border bg-bg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: fr.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [" · ", fr.locals.join(", ")]
						})]
					}, fr.name + i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Region, {
					title: "Heap (grows up)",
					hint: "dynamic objects",
					children: heap.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]",
						children: [
							o.id,
							": ",
							o.label
						]
					}, o.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Region, {
						title: "Data",
						hint: "globals / static",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]",
							children: "errno, FILE *s"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Region, {
						title: "Code (text)",
						hint: "instructions, usually R-X",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm border border-border bg-bg px-2 py-1 font-mono text-[11px]",
							children: "main, parse, eval"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "Call pushes a frame. Return pops it. malloc adds a heap object whose lifetime is not tied to a frame — that is the whole point, and the whole class of bugs."
					})
				]
			})]
		})]
	});
}
function Region({ title, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-bg p-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-[10px] text-subtle",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1",
				children
			})
		]
	});
}
var LAYERS = [
	{
		n: 7,
		name: "Application",
		pdu: "Data",
		addr: "URL / service",
		color: "bg-layer-app",
		protocols: [
			"HTTP",
			"DNS",
			"SMTP",
			"SSH",
			"DHCP"
		],
		job: "Application messages. This is the data the user or program actually meant.",
		devices: "Hosts, L7 gateways"
	},
	{
		n: 6,
		name: "Presentation",
		pdu: "Data",
		addr: "—",
		color: "bg-layer-pres",
		protocols: [
			"TLS",
			"ASCII",
			"JPEG",
			"ASN.1"
		],
		job: "Syntax and encryption: encodings, compression, and (in textbooks) TLS.",
		devices: "Hosts"
	},
	{
		n: 5,
		name: "Session",
		pdu: "Data",
		addr: "Session id",
		color: "bg-layer-sess",
		protocols: [
			"RPC",
			"NetBIOS",
			"TLS session"
		],
		job: "Dialogs: setup, checkpoints, teardown. Thin on the internet.",
		devices: "Hosts"
	},
	{
		n: 4,
		name: "Transport",
		pdu: "Segment",
		addr: "Port",
		color: "bg-layer-trans",
		protocols: [
			"TCP",
			"UDP",
			"QUIC"
		],
		job: "Process-to-process. Ports, reliability, congestion control.",
		devices: "Hosts, L4 load balancers"
	},
	{
		n: 3,
		name: "Network",
		pdu: "Packet",
		addr: "IP",
		color: "bg-layer-net",
		protocols: [
			"IPv4",
			"IPv6",
			"ICMP",
			"OSPF"
		],
		job: "Host-to-host across hops. Logical addresses and routing.",
		devices: "Routers"
	},
	{
		n: 2,
		name: "Data Link",
		pdu: "Frame",
		addr: "MAC",
		color: "bg-layer-dl",
		protocols: [
			"Ethernet",
			"Wi-Fi",
			"PPP",
			"ARP"
		],
		job: "Hop-to-hop frames. MAC learning, switching, CRCs.",
		devices: "Switches, APs, bridges"
	},
	{
		n: 1,
		name: "Physical",
		pdu: "Bits",
		addr: "—",
		color: "bg-layer-phy",
		protocols: [
			"1000BASE-T",
			"Fiber",
			"Radio"
		],
		job: "Bits on a medium. Signaling, connectors, Shannon limits.",
		devices: "Hubs, repeaters, NICs, cables"
	}
];
var WRAP = [
	"Application data",
	"+ TCP segment (ports, seq)",
	"+ IP packet (src/dst IP)",
	"+ Ethernet frame (MACs)",
	"Bits on the wire",
	"Receiver unwraps the frame",
	"IP header stripped",
	"TCP delivers the stream",
	"Application reads the bytes"
];
function OsiExplorer() {
	const [selected, setSelected] = (0, import_react.useState)(0);
	const sim = useSim(WRAP.length - 1, 3);
	const layer = LAYERS[selected];
	const wrapIndex = sim.step;
	const highlightLayer = (0, import_react.useMemo)(() => {
		if (wrapIndex <= 0) return 0;
		if (wrapIndex === 1) return 3;
		if (wrapIndex === 2) return 4;
		if (wrapIndex === 3) return 5;
		if (wrapIndex === 4) return 6;
		if (wrapIndex === 5) return 5;
		if (wrapIndex === 6) return 4;
		if (wrapIndex === 7) return 3;
		return 0;
	}, [wrapIndex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimShell, {
		title: "OSI model — click a layer, then play encapsulation",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1.5",
				children: LAYERS.map((L, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(i),
					className: cn("flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-left transition-opacity duration-150", L.color, "text-[#0c0e11]", selected === i ? "ring-2 ring-fg ring-offset-2 ring-offset-surface" : "opacity-85 hover:opacity-100", highlightLayer === i && sim.step > 0 ? "outline outline-2 outline-fg" : ""),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[11px] tabular-nums opacity-70",
							children: ["L", L.n]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-sm font-medium",
							children: L.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] opacity-70",
							children: L.pdu
						})
					]
				}, L.n))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-bg p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] text-muted",
							children: ["Layer ", layer.n]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-fg",
							children: layer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: layer.job
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "PDU"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium text-fg",
									children: layer.pdu
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "Addressing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium text-fg",
									children: layer.addr
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-subtle",
										children: "Devices"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium text-fg",
										children: layer.devices
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: layer.protocols.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted",
								children: p
							}, p))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-bg p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[11px] font-medium tracking-wide text-muted uppercase",
							children: "Encapsulation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-fg",
							children: WRAP[wrapIndex]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-col items-center gap-1",
							children: [
								"HTTP body",
								"TCP",
								"IP",
								"Ethernet"
							].map((label, i) => {
								const visible = wrapIndex >= [
									0,
									1,
									2,
									3
								][i] && wrapIndex < 5 + i;
								const goingUp = wrapIndex >= 5;
								if (!(!goingUp && wrapIndex >= i || goingUp && wrapIndex < 9 - i) && !visible) return null;
								const width = [
									"w-full",
									"w-[92%]",
									"w-[84%]",
									"w-[76%]"
								][i];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("rounded-sm border border-border px-2 py-1 text-center font-mono text-[11px]", width, i === 0 && "bg-layer-app/30", i === 1 && "bg-layer-trans/30", i === 2 && "bg-layer-net/30", i === 3 && "bg-layer-dl/30"),
									children: label
								}, label);
							})
						})
					]
				})]
			})]
		})
	});
}
var STEPS = [
	{
		who: "C",
		dir: "→",
		flags: "SYN",
		seq: "seq=1000",
		ack: "",
		note: "Client proposes ISN 1000"
	},
	{
		who: "S",
		dir: "←",
		flags: "SYN-ACK",
		seq: "seq=5000",
		ack: "ack=1001",
		note: "Server proposes ISN 5000, acks 1000"
	},
	{
		who: "C",
		dir: "→",
		flags: "ACK",
		seq: "seq=1001",
		ack: "ack=5001",
		note: "Connection established"
	},
	{
		who: "C",
		dir: "→",
		flags: "PSH-ACK",
		seq: "seq=1001",
		ack: "ack=5001",
		note: "First application bytes (e.g. HTTP)"
	},
	{
		who: "S",
		dir: "←",
		flags: "ACK",
		seq: "seq=5001",
		ack: "ack=1020",
		note: "Server acks payload"
	},
	{
		who: "C",
		dir: "→",
		flags: "FIN-ACK",
		seq: "seq=1020",
		ack: "ack=5001",
		note: "Client starts teardown"
	},
	{
		who: "S",
		dir: "←",
		flags: "ACK",
		seq: "seq=5001",
		ack: "ack=1021",
		note: "Server acks FIN"
	},
	{
		who: "S",
		dir: "←",
		flags: "FIN-ACK",
		seq: "seq=5001",
		ack: "ack=1021",
		note: "Server sends its FIN"
	},
	{
		who: "C",
		dir: "→",
		flags: "ACK",
		seq: "seq=1021",
		ack: "ack=5002",
		note: "TIME-WAIT, then closed"
	}
];
function TcpSimulator() {
	const sim = useSim(STEPS.length - 1);
	const s = STEPS[sim.step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SimShell, {
		title: "TCP handshake, data, teardown",
		playing: sim.playing,
		onPlay: sim.play,
		onPause: sim.pause,
		onStep: sim.next,
		onReset: sim.reset,
		speed: sim.speed,
		onSpeed: sim.setSpeed,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_auto_1fr] items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-bg p-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] text-muted",
								children: "CLIENT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "10.0.0.2:52344"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs text-muted",
								children: sim.step >= 2 ? "ESTABLISHED" : sim.step >= 0 ? "SYN-SENT" : "CLOSED"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-24 min-w-28 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("font-mono text-sm", s.dir === "→" ? "text-ok" : "text-link"),
							children: [
								s.dir,
								" ",
								s.flags
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-bg p-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] text-muted",
								children: "SERVER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "10.0.0.8:80"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs text-muted",
								children: sim.step >= 2 ? "ESTABLISHED" : sim.step >= 1 ? "SYN-RECEIVED" : "LISTEN"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-mono text-xs text-fg",
				children: [
					s.seq,
					" ",
					s.ack
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: s.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 grid gap-1",
				children: STEPS.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("grid grid-cols-[4.5rem_1fr] gap-2 rounded-sm px-2 py-1 font-mono text-[11px]", i === sim.step ? "bg-surface-2 text-fg" : "text-subtle"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.flags }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.note })]
				}, i))
			})
		]
	});
}
var MAP = {
	"osi-explorer": OsiExplorer,
	"tcp-simulator": TcpSimulator,
	"dns-simulator": DnsSimulator,
	"http-simulator": HttpSimulator,
	"algorithm-visualizer": AlgorithmVisualizer,
	"bst-explorer": BstExplorer,
	"graph-search": GraphSearch,
	dijkstra: DijkstraViz,
	"hash-collisions": HashCollisions,
	"cpu-scheduler": CpuScheduler,
	"process-states": ProcessStates,
	"paging-simulator": PagingSim,
	"page-replacement": PageReplacement,
	"deadlock-simulator": DeadlockSim,
	"cpu-pipeline": CpuPipelineViz,
	"sql-playground": SqlPlayground,
	"bplus-tree": BPlusTreeViz,
	"transaction-simulator": TransactionIso,
	"cache-simulator": CacheSim,
	"load-balancer": LoadBalancerViz,
	"consistent-hashing": ConsistentHashViz,
	"distributed-simulator": LeaderElection,
	"compiler-explorer": CompilerExplorer,
	"dfa-simulator": DfaSim,
	"neural-net": NeuralNetViz,
	"linux-terminal": LinuxTerminal,
	"stack-queue": StackQueue,
	"routing-simulator": RoutingSim,
	"memory-map": MemoryMap
};
function Viz({ id }) {
	const Comp = MAP[id];
	if (!Comp) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {})
	});
}
function hasViz(id) {
	return Boolean(id && MAP[id]);
}
//#endregion
export { Viz as n, hasViz as r, Pipeline as t };
