"use client";

import { SimShell } from "./sim-shell";
import { useSim } from "./use-sim";
import { cn } from "@/lib/utils";

const STEPS = [
  { who: "C", dir: "→", flags: "SYN", seq: "seq=1000", ack: "", note: "Client proposes ISN 1000" },
  { who: "S", dir: "←", flags: "SYN-ACK", seq: "seq=5000", ack: "ack=1001", note: "Server proposes ISN 5000, acks 1000" },
  { who: "C", dir: "→", flags: "ACK", seq: "seq=1001", ack: "ack=5001", note: "Connection established" },
  { who: "C", dir: "→", flags: "PSH-ACK", seq: "seq=1001", ack: "ack=5001", note: "First application bytes (e.g. HTTP)" },
  { who: "S", dir: "←", flags: "ACK", seq: "seq=5001", ack: "ack=1020", note: "Server acks payload" },
  { who: "C", dir: "→", flags: "FIN-ACK", seq: "seq=1020", ack: "ack=5001", note: "Client starts teardown" },
  { who: "S", dir: "←", flags: "ACK", seq: "seq=5001", ack: "ack=1021", note: "Server acks FIN" },
  { who: "S", dir: "←", flags: "FIN-ACK", seq: "seq=5001", ack: "ack=1021", note: "Server sends its FIN" },
  { who: "C", dir: "→", flags: "ACK", seq: "seq=1021", ack: "ack=5002", note: "TIME-WAIT, then closed" },
];

export function TcpSimulator() {
  const sim = useSim(STEPS.length - 1);
  const s = STEPS[sim.step];
  return (
    <SimShell
      title="TCP handshake, data, teardown"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
        <div className="rounded-lg border border-border bg-bg p-3 text-center">
          <p className="font-mono text-[11px] text-muted">CLIENT</p>
          <p className="text-sm font-medium">10.0.0.2:52344</p>
          <p className="mt-2 font-mono text-xs text-muted">
            {sim.step >= 2 ? "ESTABLISHED" : sim.step >= 0 ? "SYN-SENT" : "CLOSED"}
          </p>
        </div>
        <div className="flex min-h-24 min-w-28 items-center justify-center">
          <span className={cn("font-mono text-sm", s.dir === "→" ? "text-ok" : "text-link")}>
            {s.dir} {s.flags}
          </span>
        </div>
        <div className="rounded-lg border border-border bg-bg p-3 text-center">
          <p className="font-mono text-[11px] text-muted">SERVER</p>
          <p className="text-sm font-medium">10.0.0.8:80</p>
          <p className="mt-2 font-mono text-xs text-muted">
            {sim.step >= 2 ? "ESTABLISHED" : sim.step >= 1 ? "SYN-RECEIVED" : "LISTEN"}
          </p>
        </div>
      </div>
      <p className="mt-3 font-mono text-xs text-fg">
        {s.seq} {s.ack}
      </p>
      <p className="mt-1 text-sm text-muted">{s.note}</p>
      <ol className="mt-3 grid gap-1">
        {STEPS.map((row, i) => (
          <li
            key={i}
            className={cn(
              "grid grid-cols-[4.5rem_1fr] gap-2 rounded-sm px-2 py-1 font-mono text-[11px]",
              i === sim.step ? "bg-surface-2 text-fg" : "text-subtle",
            )}
          >
            <span>{row.flags}</span>
            <span>{row.note}</span>
          </li>
        ))}
      </ol>
    </SimShell>
  );
}
