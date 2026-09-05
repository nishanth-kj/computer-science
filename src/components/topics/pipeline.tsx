import { cn } from "@/lib/utils";

export function Pipeline({
  steps,
  active,
  vertical = true,
}: {
  steps: string[];
  active?: number;
  vertical?: boolean;
}) {
  return (
    <ol
      className={cn(
        "my-4 flex",
        vertical ? "flex-col" : "flex-row flex-wrap items-center gap-2",
      )}
    >
      {steps.map((step, i) => (
        <li key={step + i} className={cn("flex", vertical ? "flex-col" : "items-center gap-2")}>
          <div
            className={cn(
              "rounded-md border px-3 py-2 text-sm",
              active === i
                ? "border-primary bg-primary text-primary-fg"
                : "border-border bg-surface text-fg",
            )}
          >
            {step}
          </div>
          {i < steps.length - 1 ? (
            <div
              className={cn(
                "bg-border-strong",
                vertical ? "mx-4 my-0.5 h-4 w-px" : "h-px w-4",
              )}
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
