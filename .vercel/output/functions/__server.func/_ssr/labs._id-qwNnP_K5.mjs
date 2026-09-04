import { _ as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as getTopic, r as Route$2, y as LAB_BY_ID } from "./router-H1IRWEi3.mjs";
import { n as Viz, r as hasViz } from "./registry-CBh3J6nI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/labs._id-qwNnP_K5.js
var import_jsx_runtime = require_jsx_runtime();
function LabPage() {
	const { id } = Route$2.useParams();
	const lab = LAB_BY_ID[id];
	if (!lab || !hasViz(id)) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/labs",
					className: "hover:underline",
					children: "Labs"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: lab.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: lab.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viz, { id })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-xl",
				children: "Related pages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1",
				children: lab.topics.map((slug) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/docs/$slug",
					params: { slug },
					className: "text-sm text-link hover:underline",
					children: getTopic(slug)?.title ?? slug
				}) }, slug))
			})
		]
	});
}
//#endregion
export { LabPage as component };
