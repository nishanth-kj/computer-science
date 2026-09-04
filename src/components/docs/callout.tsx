import type { ReactNode } from "react";
import { CircleAlert, Info, Lightbulb, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const STYLES = {
  note: { icon: Info, label: "Note" },
  tip: { icon: Lightbulb, label: "Tip" },
  warning: { icon: CircleAlert, label: "Watch" },
  interview: { icon: MessageCircleQuestion, label: "Interview" },
} as const;

export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: keyof typeof STYLES;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, label } = STYLES[kind];
  return (
    <aside
      className={cn(
        "my-4 flex gap-3 rounded-lg border border-border bg-surface px-4 py-3",
        kind === "warning" && "border-warn/30",
        kind === "interview" && "border-link/30",
      )}
    >
      <Icon className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
      <div className="min-w-0 text-sm leading-relaxed">
        <p className="mb-1 font-medium text-fg">{title || label}</p>
        <div className="text-muted">{children}</div>
      </div>
    </aside>
  );
}
