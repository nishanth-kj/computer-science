import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as cn } from "./router-H1IRWEi3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DVqLeTBl.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-surface-2 text-muted",
		primary: "bg-primary text-primary-fg",
		outline: "border border-border text-muted",
		beginner: "bg-ok/15 text-ok",
		intermediate: "bg-warn/15 text-warn",
		advanced: "bg-danger/15 text-danger",
		research: "bg-link/15 text-link"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({
			variant,
			className
		})),
		...props
	});
}
//#endregion
export { Badge as t };
