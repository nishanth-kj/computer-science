import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ChevronRight, f as List } from "../_libs/lucide-react.mjs";
import { C as cn, S as SECTION_GROUPS, a as Sheet, c as SheetTrigger, l as Button, o as SheetContent, s as SheetTitle, u as ALL_NAV, x as SECTION_BY_ID } from "./router-H1IRWEi3.mjs";
import { t as Input } from "./input-vFo9GZaa.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/topic-frame-CbmBq3mh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		className: cn("relative overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full min-h-0 w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2.5 touch-none select-none border-l border-l-transparent p-px",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border-strong" })
		})]
	});
}
var DEFAULT_OPEN = {
	languages: true,
	networks: true,
	os: true,
	dbms: true
};
function sectionOf(slug) {
	if (!slug) return void 0;
	if (slug in SECTION_BY_ID) return slug;
	return ALL_NAV.find((t) => t.slug === slug)?.section;
}
function matches(title, slug, q) {
	if (!q) return true;
	const n = q.toLowerCase();
	return title.toLowerCase().includes(n) || slug.toLowerCase().includes(n);
}
function DocsSidebar({ onNavigate }) {
	const current = useParams({ strict: false }).slug;
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(() => {
		const section = sectionOf(current);
		return section ? {
			...DEFAULT_OPEN,
			[section]: true
		} : { ...DEFAULT_OPEN };
	});
	(0, import_react.useEffect)(() => {
		const section = sectionOf(current);
		if (section) setOpen((o) => o[section] ? o : {
			...o,
			[section]: true
		});
	}, [current]);
	const toggle = (id) => setOpen((o) => ({
		...o,
		[id]: !o[id]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Filter topics",
				value: q,
				onChange: (e) => setQ(e.target.value),
				className: "h-9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
			className: "min-h-0 flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-2 pb-10",
				children: SECTION_GROUPS.map((group) => {
					const blocks = group.sections.map((id) => {
						const section = SECTION_BY_ID[id];
						const topics = ALL_NAV.filter((t) => t.section === id && matches(t.title, t.slug, q));
						const label = group.sections.length === 1 ? group.title : section.short;
						const groupHit = matches(group.title, group.id, q) || matches(section.title, id, q);
						if (q && !topics.length && !groupHit) return null;
						return {
							id,
							section,
							topics,
							label,
							count: ALL_NAV.filter((t) => t.section === id).length
						};
					}).filter(Boolean);
					if (!blocks.length) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [group.sections.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-2 pt-3 pb-1 font-mono text-xs tracking-wider text-subtle uppercase",
							children: group.title
						}) : null, blocks.map((b) => {
							const isOpen = q ? true : Boolean(open[b.id]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex size-9 shrink-0 items-center justify-center rounded-md text-subtle hover:bg-surface-2 hover:text-fg",
									onClick: () => toggle(b.id),
									"aria-expanded": isOpen,
									"aria-label": `${isOpen ? "Collapse" : "Expand"} ${b.label}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: cn("size-3.5 transition-transform", isOpen && "rotate-90") })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/docs/$slug",
									params: { slug: b.id },
									onClick: onNavigate,
									className: cn("flex min-h-10 min-w-0 flex-1 items-center rounded-md px-1.5 text-sm hover:bg-surface-2", current === b.id && "bg-surface-2 text-fg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: b.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 font-mono text-xs text-subtle tabular-nums",
										children: q ? b.topics.length : b.count
									})]
								})]
							}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mb-1 ml-4 border-l border-border",
								children: b.topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/docs/$slug",
									params: { slug: t.slug },
									onClick: onNavigate,
									className: cn("block min-h-9 px-3 py-1.5 text-sm text-muted hover:bg-surface-2/80 hover:text-fg", current === t.slug && "bg-surface-2 text-fg"),
									children: t.title
								}) }, t.slug))
							}) : null] }, b.id);
						})]
					}, group.id);
				})
			})
		})]
	});
}
function TopicFrame({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-[88rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden w-72 shrink-0 overflow-hidden border-r border-border lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky top-14 h-[calc(100dvh-3.5rem)] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsSidebar, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon-sm",
							variant: "outline",
							className: "fixed bottom-4 left-4 z-30",
							"aria-label": "Topics",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "left",
						className: "w-80 p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "sr-only",
							children: "Topics"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-h-0 flex-1 flex-col",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsSidebar, { onNavigate: () => setOpen(false) })
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1",
				children
			})
		]
	});
}
//#endregion
export { TopicFrame as t };
