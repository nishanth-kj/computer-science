import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as SECTIONS, m as getTopic, u as ALL_NAV } from "./router-H1IRWEi3.mjs";
import { t as TopicFrame } from "./topic-frame-CbmBq3mh.mjs";
import { t as Badge } from "./badge-DVqLeTBl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/interview-DOXAydwl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InterviewPage() {
	const [section, setSection] = (0, import_react.useState)("all");
	const [level, setLevel] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => {
		const slugs = section === "all" ? ALL_NAV.map((t) => t.slug) : ALL_NAV.filter((t) => t.section === section).map((t) => t.slug);
		const uniq = [...new Set(slugs)];
		const out = [];
		for (const slug of uniq) {
			const t = getTopic(slug);
			if (!t) continue;
			for (const iq of t.interview) {
				if (level !== "all" && iq.level !== level) continue;
				out.push({
					slug,
					title: t.title,
					q: iq.q,
					a: iq.a,
					level: iq.level
				});
			}
		}
		return out.slice(0, 120);
	}, [section, level]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Interview mode"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Questions pulled from the documentation. Try to answer before you open the fold. Then read the page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-9 rounded-md border border-border bg-surface px-2 text-sm",
					value: section,
					onChange: (e) => setSection(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All sections"
					}), SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s.id,
						children: s.short
					}, s.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-9 rounded-md border border-border bg-surface px-2 text-sm",
					value: level,
					onChange: (e) => setLevel(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All levels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "beginner",
							children: "Beginner"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "intermediate",
							children: "Intermediate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "advanced",
							children: "Advanced"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-surface px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted",
							children: [
								i + 1,
								".",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/docs/$slug",
									params: { slug: it.slug },
									className: "hover:underline",
									children: it.title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer text-sm font-medium",
							children: it.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: it.a
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "mt-2",
							variant: it.level,
							children: it.level
						})
					]
				}, it.slug + it.q))
			})
		]
	}) });
}
//#endregion
export { InterviewPage as component };
