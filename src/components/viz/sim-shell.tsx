"use client";

import type { ReactNode } from "react";
import { Pause, Play, RotateCcw, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SimShell({
  title,
  playing,
  onPlay,
  onPause,
  onStep,
  onReset,
  speed,
  onSpeed,
  extra,
  children,
  className,
}: {
  title?: string;
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
  speed: number;
  onSpeed: (n: number) => void;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-surface", className)}>
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {title ? <p className="mr-auto text-sm font-medium">{title}</p> : <span className="mr-auto" />}
        <div className="flex items-center gap-1">
          <Button size="icon-sm" variant="ghost" onClick={playing ? onPause : onPlay} aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause className="size-4" /> : <Play className="size-4 ml-px" />}
          </Button>
          <Button size="icon-sm" variant="ghost" onClick={onStep} aria-label="Step">
            <SkipForward className="size-4" />
          </Button>
          <Button size="icon-sm" variant="ghost" onClick={onReset} aria-label="Reset">
            <RotateCcw className="size-4" />
          </Button>
        </div>
        <label className="flex items-center gap-2 text-[11px] text-muted">
          Speed
          <input
            type="range"
            min={1}
            max={5}
            value={speed}
            onChange={(e) => onSpeed(Number(e.target.value))}
            className="w-20 accent-primary"
          />
        </label>
        {extra}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}
