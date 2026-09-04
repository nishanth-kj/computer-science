import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as SECTION_GROUPS, u as ALL_NAV, x as SECTION_BY_ID } from "./router-H1IRWEi3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs.index-CGZ4lmO7.js
var import_jsx_runtime = require_jsx_runtime();
function DocsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-10 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Library"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: [ALL_NAV.length, " topics. Programming, networks, operating systems, and databases are peers — pick a field in the sidebar, then a page."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-10",
				children: SECTION_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: group.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: group.sections.map((id) => {
						const s = SECTION_BY_ID[id];
						const topics = ALL_NAV.filter((t) => t.section === id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/docs/$slug",
											params: { slug: id },
											className: "hover:underline",
											children: s.title
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-subtle tabular-nums",
										children: topics.length
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: s.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1",
									children: topics.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/docs/$slug",
										params: { slug: t.slug },
										className: "text-sm text-link hover:underline",
										children: t.title
									}) }, t.slug))
								})
							]
						}, id);
					})
				})] }, group.id))
			})
		]
	});
}
//#endregion
export { DocsIndex as component };
