"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const KEYWORDS =
  /^(and|as|assert|async|await|break|case|catch|class|const|continue|def|default|elif|else|enum|except|export|finally|fn|for|from|func|function|if|impl|import|in|interface|let|match|mod|new|not|or|package|private|pub|public|return|select|self|static|struct|switch|throw|trait|try|type|typeof|use|var|void|while|with|yield)$/;

const TYPES = /^(int|float|str|bool|string|number|boolean|None|True|False|null|undefined|usize|i32|u32|void)$/;

function highlight(code: string) {
  return code.split(/(\s+|[()[\]{};,.:]|==|!=|<=|>=|=>|->)/g).map((part, i) => {
    if (!part) return null;
    if (/^\s+$/.test(part)) return part;
    if (KEYWORDS.test(part))
      return (
        <span key={i} className="text-link">
          {part}
        </span>
      );
    if (TYPES.test(part))
      return (
        <span key={i} className="text-ok">
          {part}
        </span>
      );
    if (/^(['"`]).*\1$/.test(part) || /^\/\/.*/.test(part) || /^#/.test(part))
      return (
        <span key={i} className="text-muted">
          {part}
        </span>
      );
    if (/^\d+(\.\d+)?$/.test(part))
      return (
        <span key={i} className="text-warn">
          {part}
        </span>
      );
    return (
      <span key={i} className="text-fg">
        {part}
      </span>
    );
  });
}

export function CodeBlock({
  code,
  lang,
  title,
  className,
}: {
  code: string;
  lang?: string;
  title?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-code", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-1.5">
        <span className="font-mono text-[11px] text-muted">{title || lang || "code"}</span>
        <button
          type="button"
          className="inline-flex size-8 items-center justify-center rounded-sm text-muted hover:bg-surface-2 hover:text-fg"
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          aria-label="Copy code"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 font-mono text-[13px] leading-relaxed">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  );
}
