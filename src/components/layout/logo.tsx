import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex items-center text-fg no-underline", className)} aria-label="CS home">
      <span className="inline-flex h-8 items-center rounded-md border border-border px-2 font-mono text-sm font-medium tracking-wide">
        CS
      </span>
    </Link>
  );
}
