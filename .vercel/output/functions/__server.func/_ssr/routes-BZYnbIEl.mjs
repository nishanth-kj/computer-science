import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as STATS, u as ALL_NAV, x as SECTION_BY_ID } from "./router-H1IRWEi3.mjs";
import { t as TopicFrame } from "./topic-frame-CbmBq3mh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZYnbIEl.js
var import_jsx_runtime = require_jsx_runtime();
var START = [
	"languages",
	"networks",
	"os",
	"dbms"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-10 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-muted uppercase",
				children: "Computer Science"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight",
				children: "Topics"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: [STATS.topics, " pages. Pick one from the sidebar — languages, networks, operating systems, and databases are already open."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: START.map((id) => {
					const s = SECTION_BY_ID[id];
					const n = ALL_NAV.filter((t) => t.section === id).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/docs/$slug",
						params: { slug: id },
						className: "rounded-xl border border-border bg-surface p-5 hover:bg-surface-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: s.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-mono text-xs text-subtle tabular-nums",
								children: [n, " topics"]
							})
						]
					}, id);
				})
			})
		]
	}) });
}
//#endregion
export { Home as component };
