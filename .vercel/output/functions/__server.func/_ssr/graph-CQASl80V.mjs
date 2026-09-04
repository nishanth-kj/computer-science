import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as cn, S as SECTION_GROUPS, h as graphData, u as ALL_NAV, x as SECTION_BY_ID } from "./router-H1IRWEi3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/graph-CQASl80V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GraphPage() {
	const [section, setSection] = (0, import_react.useState)("all");
	const navigate = useNavigate();
	const { nodes, edges } = (0, import_react.useMemo)(() => graphData(), []);
	const visible = (0, import_react.useMemo)(() => {
		const n = section === "all" ? nodes.slice(0, 80) : nodes.filter((x) => x.section === section);
		const ids = new Set(n.map((x) => x.id));
		return {
			n,
			e: edges.filter((x) => ids.has(x.from) && ids.has(x.to)).slice(0, 120)
		};
	}, [
		section,
		nodes,
		edges
	]);
	const laid = (0, import_react.useMemo)(() => {
		const count = visible.n.length || 1;
		return visible.n.map((node, i) => {
			const ang = i / count * Math.PI * 2 - Math.PI / 2;
			const r = 38 + i % 5 * 8;
			return {
				...node,
				x: 50 + Math.cos(ang) * r,
				y: 50 + Math.sin(ang) * r
			};
		});
	}, [visible]);
	const pos = new Map(laid.map((n) => [n.id, n]));
	const ordered = SECTION_GROUPS.flatMap((g) => g.sections);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Knowledge graph"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: [ALL_NAV.length, " nodes. Edges are prerequisites and related links. Click a node to open its page."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSection("all"),
					className: cn("rounded-full border px-3 py-1 text-xs", section === "all" ? "border-primary bg-primary text-primary-fg" : "border-border"),
					children: "Sample"
				}), ordered.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSection(id),
					className: cn("rounded-full border px-3 py-1 text-xs", section === id ? "border-primary bg-primary text-primary-fg" : "border-border"),
					children: SECTION_BY_ID[id].short
				}, id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 100 100",
				className: "mt-6 h-auto w-full rounded-xl border border-border bg-surface",
				children: [visible.e.map((e, i) => {
					const a = pos.get(e.from);
					const b = pos.get(e.to);
					if (!a || !b) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: a.x,
						y1: a.y,
						x2: b.x,
						y2: b.y,
						className: "stroke-border-strong",
						strokeWidth: "0.15"
					}, i);
				}), laid.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "cursor-pointer",
					onClick: () => navigate({
						to: "/docs/$slug",
						params: { slug: n.id }
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: n.x,
						cy: n.y,
						r: "1.4",
						className: "fill-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: n.x + 1.8,
						y: n.y + .6,
						fontSize: "1.6",
						className: "fill-fg",
						children: n.title.length > 18 ? n.title.slice(0, 16) + "…" : n.title
					})]
				}, n.id))]
			})
		]
	});
}
//#endregion
export { GraphPage as component };
