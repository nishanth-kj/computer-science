"use client";

import { useMemo, useState } from "react";
import { SimShell } from "./sim-shell";
import { useSim } from "./use-sim";
import { cn } from "@/lib/utils";

const LAYERS = [
  {
    n: 7,
    name: "Application",
    pdu: "Data",
    addr: "URL / service",
    color: "bg-layer-app",
    protocols: ["HTTP", "DNS", "SMTP", "SSH", "DHCP"],
    job: "Application messages. This is the data the user or program actually meant.",
    devices: "Hosts, L7 gateways",
  },
  {
    n: 6,
    name: "Presentation",
    pdu: "Data",
    addr: "—",
    color: "bg-layer-pres",
    protocols: ["TLS", "ASCII", "JPEG", "ASN.1"],
    job: "Syntax and encryption: encodings, compression, and (in textbooks) TLS.",
    devices: "Hosts",
  },
  {
    n: 5,
    name: "Session",
    pdu: "Data",
    addr: "Session id",
    color: "bg-layer-sess",
    protocols: ["RPC", "NetBIOS", "TLS session"],
    job: "Dialogs: setup, checkpoints, teardown. Thin on the internet.",
    devices: "Hosts",
  },
  {
    n: 4,
    name: "Transport",
    pdu: "Segment",
    addr: "Port",
    color: "bg-layer-trans",
    protocols: ["TCP", "UDP", "QUIC"],
    job: "Process-to-process. Ports, reliability, congestion control.",
    devices: "Hosts, L4 load balancers",
  },
  {
    n: 3,
    name: "Network",
    pdu: "Packet",
    addr: "IP",
    color: "bg-layer-net",
    protocols: ["IPv4", "IPv6", "ICMP", "OSPF"],
    job: "Host-to-host across hops. Logical addresses and routing.",
    devices: "Routers",
  },
  {
    n: 2,
    name: "Data Link",
    pdu: "Frame",
    addr: "MAC",
    color: "bg-layer-dl",
    protocols: ["Ethernet", "Wi-Fi", "PPP", "ARP"],
    job: "Hop-to-hop frames. MAC learning, switching, CRCs.",
    devices: "Switches, APs, bridges",
  },
  {
    n: 1,
    name: "Physical",
    pdu: "Bits",
    addr: "—",
    color: "bg-layer-phy",
    protocols: ["1000BASE-T", "Fiber", "Radio"],
    job: "Bits on a medium. Signaling, connectors, Shannon limits.",
    devices: "Hubs, repeaters, NICs, cables",
  },
];

const WRAP = [
  "Application data",
  "+ TCP segment (ports, seq)",
  "+ IP packet (src/dst IP)",
  "+ Ethernet frame (MACs)",
  "Bits on the wire",
  "Receiver unwraps the frame",
  "IP header stripped",
  "TCP delivers the stream",
  "Application reads the bytes",
];

export function OsiExplorer() {
  const [selected, setSelected] = useState(0);
  const sim = useSim(WRAP.length - 1, 3);
  const layer = LAYERS[selected];
  const wrapIndex = sim.step;

  const highlightLayer = useMemo(() => {
    if (wrapIndex <= 0) return 0;
    if (wrapIndex === 1) return 3;
    if (wrapIndex === 2) return 4;
    if (wrapIndex === 3) return 5;
    if (wrapIndex === 4) return 6;
    if (wrapIndex === 5) return 5;
    if (wrapIndex === 6) return 4;
    if (wrapIndex === 7) return 3;
    return 0;
  }, [wrapIndex]);

  return (
    <SimShell
      title="OSI model — click a layer, then play encapsulation"
      playing={sim.playing}
      onPlay={sim.play}
      onPause={sim.pause}
      onStep={sim.next}
      onReset={sim.reset}
      speed={sim.speed}
      onSpeed={sim.setSpeed}
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="flex flex-col gap-1.5">
          {LAYERS.map((L, i) => (
            <button
              key={L.n}
              type="button"
              onClick={() => setSelected(i)}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-left transition-opacity duration-150",
                L.color,
                "text-[#0c0e11]",
                selected === i ? "ring-2 ring-fg ring-offset-2 ring-offset-surface" : "opacity-85 hover:opacity-100",
                highlightLayer === i && sim.step > 0 ? "outline outline-2 outline-fg" : "",
              )}
            >
              <span className="font-mono text-[11px] tabular-nums opacity-70">L{L.n}</span>
              <span className="flex-1 text-sm font-medium">{L.name}</span>
              <span className="font-mono text-[11px] opacity-70">{L.pdu}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-border bg-bg p-4">
            <p className="font-mono text-[11px] text-muted">Layer {layer.n}</p>
            <h3 className="font-display text-xl text-fg">{layer.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{layer.job}</p>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <dt className="text-subtle">PDU</dt>
                <dd className="font-medium text-fg">{layer.pdu}</dd>
              </div>
              <div>
                <dt className="text-subtle">Addressing</dt>
                <dd className="font-medium text-fg">{layer.addr}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-subtle">Devices</dt>
                <dd className="font-medium text-fg">{layer.devices}</dd>
              </div>
            </dl>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {layer.protocols.map((p) => (
                <span key={p} className="rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-bg p-4">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-muted uppercase">Encapsulation</p>
            <p className="font-mono text-sm text-fg">{WRAP[wrapIndex]}</p>
            <div className="mt-3 flex flex-col items-center gap-1">
              {["HTTP body", "TCP", "IP", "Ethernet"].map((label, i) => {
                const visible = wrapIndex >= [0, 1, 2, 3][i] && wrapIndex < 5 + i;
                const goingUp = wrapIndex >= 5;
                const show =
                  (!goingUp && wrapIndex >= i) || (goingUp && wrapIndex < 9 - i);
                if (!show && !visible) return null;
                const width = ["w-full", "w-[92%]", "w-[84%]", "w-[76%]"][i];
                return (
                  <div
                    key={label}
                    className={cn(
                      "rounded-sm border border-border px-2 py-1 text-center font-mono text-[11px]",
                      width,
                      i === 0 && "bg-layer-app/30",
                      i === 1 && "bg-layer-trans/30",
                      i === 2 && "bg-layer-net/30",
                      i === 3 && "bg-layer-dl/30",
                    )}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SimShell>
  );
}
