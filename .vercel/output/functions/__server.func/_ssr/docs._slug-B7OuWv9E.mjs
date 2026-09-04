import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as CircleAlert, h as Copy, m as Info, p as Lightbulb, u as MessageCircleQuestion, v as Check, y as Bookmark } from "../_libs/lucide-react.mjs";
import { C as cn, f as exists, i as Route$4, l as Button, m as getTopic, p as getSectionTopics, x as SECTION_BY_ID } from "./router-H1IRWEi3.mjs";
import { t as Badge } from "./badge-DVqLeTBl.mjs";
import { n as Viz, r as hasViz, t as Pipeline } from "./registry-CBh3J6nI.mjs";
import { t as useProgress } from "./progress-BzPyDxJL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs._slug-B7OuWv9E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STYLES = {
	note: {
		icon: Info,
		label: "Note"
	},
	tip: {
		icon: Lightbulb,
		label: "Tip"
	},
	warning: {
		icon: CircleAlert,
		label: "Watch"
	},
	interview: {
		icon: MessageCircleQuestion,
		label: "Interview"
	}
};
function Callout({ kind = "note", title, children }) {
	const { icon: Icon, label } = STYLES[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("my-4 flex gap-3 rounded-lg border border-border bg-surface px-4 py-3", kind === "warning" && "border-warn/30", kind === "interview" && "border-link/30"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-0.5 size-4 shrink-0 text-muted",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 text-sm leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 font-medium text-fg",
				children: title || label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted",
				children
			})]
		})]
	});
}
var KEYWORDS = /^(and|as|assert|async|await|break|case|catch|class|const|continue|def|default|elif|else|enum|except|export|finally|fn|for|from|func|function|if|impl|import|in|interface|let|match|mod|new|not|or|package|private|pub|public|return|select|self|static|struct|switch|throw|trait|try|type|typeof|use|var|void|while|with|yield)$/;
var TYPES = /^(int|float|str|bool|string|number|boolean|None|True|False|null|undefined|usize|i32|u32|void)$/;
function highlight(code) {
	return code.split(/(\s+|[()[\]{};,.:]|==|!=|<=|>=|=>|->)/g).map((part, i) => {
		if (!part) return null;
		if (/^\s+$/.test(part)) return part;
		if (KEYWORDS.test(part)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-link",
			children: part
		}, i);
		if (TYPES.test(part)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-ok",
			children: part
		}, i);
		if (/^(['"`]).*\1$/.test(part) || /^\/\/.*/.test(part) || /^#/.test(part)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: part
		}, i);
		if (/^\d+(\.\d+)?$/.test(part)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-warn",
			children: part
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-fg",
			children: part
		}, i);
	});
}
function CodeBlock({ code, lang, title, className }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-lg border border-border bg-code", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 border-b border-border px-3 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] text-muted",
				children: title || lang || "code"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-8 items-center justify-center rounded-sm text-muted hover:bg-surface-2 hover:text-fg",
				onClick: async () => {
					await navigator.clipboard.writeText(code);
					setCopied(true);
					setTimeout(() => setCopied(false), 1200);
				},
				"aria-label": "Copy code",
				children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto p-3 font-mono text-[13px] leading-relaxed",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: highlight(code) })
		})]
	});
}
var LEVEL_VARIANT = {
	beginner: "beginner",
	intermediate: "intermediate",
	advanced: "advanced",
	research: "research"
};
function TopicLink({ slug }) {
	const t = getTopic(slug);
	if (t) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/docs/$slug",
		params: { slug },
		className: "text-link underline-offset-2 hover:underline",
		children: t.title
	});
	const section = SECTION_BY_ID[slug];
	if (section) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/docs/$slug",
		params: { slug },
		className: "text-link underline-offset-2 hover:underline",
		children: section.title
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slug });
}
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: blocks.map((b, i) => {
		if (b.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: b.text }, i);
		if (b.type === "h3") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			id: b.id,
			className: "mt-8 mb-2 font-display text-xl",
			children: b.text
		}, i);
		if (b.type === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "my-3 list-disc space-y-1 pl-5",
			children: b.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, it))
		}, i);
		if (b.type === "ol") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "my-3 list-decimal space-y-1 pl-5",
			children: b.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, it))
		}, i);
		if (b.type === "table") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-4 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-xl text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-b border-border text-muted",
					children: b.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-4 font-medium",
						children: h
					}, h))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: b.rows.map((r, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-b border-border/60",
					children: r.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2 pr-4 align-top",
						children: c
					}, ci))
				}, ri)) })]
			})
		}, i);
		if (b.type === "code") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			code: b.code,
			lang: b.lang,
			title: b.title
		}, i);
		if (b.type === "callout") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			kind: b.kind,
			title: b.title,
			children: b.text
		}, i);
		if (b.type === "viz") return hasViz(b.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viz, { id: b.id }, i) : null;
		if (b.type === "flow") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, { steps: b.steps }, i);
		return null;
	}) });
}
function Section({ id, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "scroll-mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id,
			className: "mt-10 mb-3 font-display text-2xl tracking-tight",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3 text-[15px] leading-relaxed text-fg/90",
			children
		})]
	});
}
function DocArticle({ topic }) {
	const section = SECTION_BY_ID[topic.section];
	const vizId = topic.viz && hasViz(topic.viz) ? topic.viz : void 0;
	const extra = topic.extra?.filter((b) => b.type !== "viz");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs tracking-wide text-muted uppercase",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/docs/$slug",
					params: { slug: topic.section },
					className: "hover:text-fg",
					children: section.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl leading-tight tracking-tight text-balance",
					children: topic.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: LEVEL_VARIANT[topic.level],
					children: topic.level
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: topic.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "what-is-it",
				title: "What is it?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: topic.what })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "why-it-matters",
				title: "Why does it matter?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: topic.why })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "prerequisites",
				title: "Prerequisites",
				children: topic.prereqs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "list-disc space-y-1 pl-5",
					children: topic.prereqs.filter(exists).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicLink, { slug: s }) }, s))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "None — you can start here." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "mental-model",
				title: "Mental model",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: topic.mental })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "visual-explanation",
				title: "Visual explanation",
				children: topic.steps?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, { steps: topic.steps }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: topic.mental })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "how-it-works",
				title: "How it works",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "list-decimal space-y-2 pl-5",
					children: topic.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
				}), extra?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: extra }) : null]
			}),
			topic.steps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "step-by-step",
				title: "Step-by-step example",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Walk this path with a small instance in your head, then use the lab if there is one."
				})
			}) : null,
			vizId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "interactive",
				title: "Interactive simulation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viz, { id: vizId }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [
						"Use play, step, and reset. Open the same lab full-page in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/labs/$id",
							params: { id: vizId },
							className: "text-link hover:underline",
							children: "Interactive Labs"
						}),
						"."
					]
				})]
			}) : null,
			topic.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "code-example",
				title: "Code example",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					code: topic.code.code,
					lang: topic.code.lang,
					title: topic.code.title
				})
			}) : null,
			topic.implementation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "internal-implementation",
				title: "Internal implementation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: topic.implementation })
			}) : null,
			topic.complexity ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "complexity",
				title: "Complexity / trade-offs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-2 sm:grid-cols-2",
					children: [topic.complexity.time ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted",
							children: "Time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono text-sm",
							children: topic.complexity.time
						})]
					}) : null, topic.complexity.space ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted",
							children: "Space"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono text-sm",
							children: topic.complexity.space
						})]
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5",
					children: topic.complexity.tradeoffs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "real-world",
				title: "Real-world usage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "list-disc space-y-1 pl-5",
					children: topic.usage.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: u }, u))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "common-mistakes",
				title: "Common mistakes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "list-disc space-y-1 pl-5",
					children: topic.mistakes.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: u }, u))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "interview-questions",
				title: "Interview questions",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: topic.interview.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "rounded-lg border border-border bg-surface px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: cn("cursor-pointer text-sm font-medium"),
								children: q.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: q.a
							}),
							q.followUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-subtle",
								children: ["Follow-up: ", q.followUp]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "mt-2",
								variant: LEVEL_VARIANT[q.level],
								children: q.level
							})
						]
					}, q.q))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "related",
				title: "Related concepts",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: topic.related.filter(exists).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/docs/$slug",
						params: { slug: s },
						className: "rounded-full border border-border px-3 py-1 text-sm hover:bg-surface-2",
						children: getTopic(s)?.title ?? SECTION_BY_ID[s]?.title ?? s
					}, s))
				})
			}),
			topic.next && exists(topic.next) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "next-topic",
				title: "Next topic",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/docs/$slug",
					params: { slug: topic.next },
					className: "text-link hover:underline",
					children: getTopic(topic.next)?.title ?? SECTION_BY_ID[topic.next]?.title
				})
			}) : null
		]
	});
}
function Toc() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const hs = [...document.querySelectorAll("article h2[id]")].map((el) => ({
			id: el.id,
			label: el.textContent?.trim() || el.id
		}));
		setItems(hs);
		if (hs[0]) setActive(hs[0].id);
		const els = hs.map((h) => document.getElementById(h.id)).filter(Boolean);
		if (!els.length) return;
		const obs = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (vis[0]?.target.id) setActive(vis[0].target.id);
		}, {
			rootMargin: "-20% 0px -60% 0px",
			threshold: [0, 1]
		});
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "sticky top-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-[11px] font-medium tracking-wide text-muted uppercase",
			children: "On this page"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1 border-l border-border",
			children: items.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${h.id}`,
				className: cn("block border-l-2 py-1 pl-3 text-[13px] text-muted hover:text-fg", active === h.id ? "border-primary text-fg" : "border-transparent"),
				children: h.label
			}) }, h.id))
		})]
	});
}
function SectionOverview({ id }) {
	const section = SECTION_BY_ID[id];
	const topics = getSectionTopics(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-muted uppercase",
				children: "Section"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: section.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: section.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 divide-y divide-border border-y border-border",
				children: topics.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/docs/$slug",
					params: { slug: t.slug },
					className: "flex gap-4 py-3 hover:bg-surface-2/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-8 font-mono text-xs text-subtle tabular-nums",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: t.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: t.summary
						})]
					})]
				}) }, t.slug))
			})
		]
	});
}
function DocPage() {
	const { slug } = Route$4.useParams();
	const mark = useProgress((s) => s.markVisited);
	const toggle = useProgress((s) => s.toggleBookmark);
	const bookmarked = useProgress((s) => s.bookmarks.includes(slug));
	(0, import_react.useEffect)(() => {
		if (!SECTION_BY_ID[slug]) mark(slug);
	}, [slug, mark]);
	if (slug in SECTION_BY_ID) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, { id: slug });
	const topic = getTopic(slug);
	if (!topic) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 px-4 py-10 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: bookmarked ? "subtle" : "ghost",
					onClick: () => toggle(slug),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), bookmarked ? "Saved" : "Save"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocArticle, { topic })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "hidden w-52 shrink-0 px-3 py-10 xl:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toc, {})
		})]
	});
}
//#endregion
export { DocPage as component };
