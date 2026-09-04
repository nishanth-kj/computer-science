import { _ as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as cn, _ as PATH_BY_ID, m as getTopic, n as Route } from "./router-H1IRWEi3.mjs";
import { t as useProgress } from "./progress-BzPyDxJL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paths._id-Th2pv9P_.js
var import_jsx_runtime = require_jsx_runtime();
function PathPage() {
	const { id } = Route.useParams();
	const path = PATH_BY_ID[id];
	if (!path) throw notFound();
	const visited = useProgress((s) => s.visited);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/paths",
					className: "hover:underline",
					children: "Paths"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: path.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: path.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-2",
				children: path.slugs.map((slug, i) => {
					const t = getTopic(slug);
					const done = visited.includes(slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/docs/$slug",
						params: { slug },
						className: cn("flex items-start gap-4 rounded-lg border border-border px-4 py-3 hover:bg-surface-2", done && "border-ok/40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-8 font-mono text-xs text-subtle tabular-nums",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: t?.title ?? slug
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: t?.summary
						})] })]
					}) }, slug);
				})
			})
		]
	});
}
//#endregion
export { PathPage as component };
