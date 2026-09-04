import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as SECTION_GROUPS, v as LABS, x as SECTION_BY_ID } from "./router-H1IRWEi3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/labs.index-SrMZvXhp.js
var import_jsx_runtime = require_jsx_runtime();
function LabsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Interactive labs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Play, pause, step, reset. Labs are grouped the same way as the docs — no topic is featured above the others."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-10",
				children: SECTION_GROUPS.map((group) => {
					const labs = LABS.filter((l) => group.sections.includes(l.section));
					if (!labs.length) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: labs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/labs/$id",
							params: { id: l.id },
							className: "rounded-xl border border-border bg-surface p-5 hover:bg-surface-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-muted uppercase",
									children: SECTION_BY_ID[l.section].short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl",
									children: l.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: l.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-mono text-xs text-subtle",
									children: l.controls.join(" · ")
								})
							]
						}, l.id))
					})] }, group.id);
				})
			})
		]
	});
}
//#endregion
export { LabsIndex as component };
