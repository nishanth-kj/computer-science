"use client";

import { SimShell } from "./sim-shell";
import { useSim } from "./use-sim";
import { Pipeline } from "@/components/docs/pipeline";

const STEPS = [
  "URL bar: https://example.com/",
  "DNS: name → 93.184.216.34",
  "TCP handshake (1 RTT)",
  "TLS handshake (1–2 RTT)",
  "HTTP GET /  Host: example.com",
  "Server: 200 OK  text/html",
  "Parse HTML, discover CSS/JS",
  "Render: style → layout → paint",
];

export function HttpSimulator() {
  const sim = useSim(STEPS.length - 1);
  return (
    <SimShell
      title="A page load"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <Pipeline steps={STEPS} active={sim.step} />
      <p className="text-sm text-muted">{STEPS[sim.step]}</p>
    </SimShell>
  );
}
