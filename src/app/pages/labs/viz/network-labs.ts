import { Component, computed, signal } from "@angular/core";
import { useSim } from "@/lib/sim";
import { Pipeline } from "@/app/pages/topics/view/pipeline";
import { SimShell } from "./sim-shell";

const LAYERS = [
  { n: 7, name: "Application", pdu: "Data", addr: "URL / service", color: "bg-layer-app", protocols: ["HTTP", "DNS", "SMTP", "SSH", "DHCP"], job: "Application messages. This is the data the user or program actually meant.", devices: "Hosts, L7 gateways" },
  { n: 6, name: "Presentation", pdu: "Data", addr: "—", color: "bg-layer-pres", protocols: ["TLS", "ASCII", "JPEG", "ASN.1"], job: "Syntax and encryption: encodings, compression, and (in textbooks) TLS.", devices: "Hosts" },
  { n: 5, name: "Session", pdu: "Data", addr: "Session id", color: "bg-layer-sess", protocols: ["RPC", "NetBIOS", "TLS session"], job: "Dialogs: setup, checkpoints, teardown. Thin on the internet.", devices: "Hosts" },
  { n: 4, name: "Transport", pdu: "Segment", addr: "Port", color: "bg-layer-trans", protocols: ["TCP", "UDP", "QUIC"], job: "Process-to-process. Ports, reliability, congestion control.", devices: "Hosts, L4 load balancers" },
  { n: 3, name: "Network", pdu: "Packet", addr: "IP", color: "bg-layer-net", protocols: ["IPv4", "IPv6", "ICMP", "OSPF"], job: "Host-to-host across hops. Logical addresses and routing.", devices: "Routers" },
  { n: 2, name: "Data Link", pdu: "Frame", addr: "MAC", color: "bg-layer-dl", protocols: ["Ethernet", "Wi-Fi", "PPP", "ARP"], job: "Hop-to-hop frames. MAC learning, switching, CRCs.", devices: "Switches, APs, bridges" },
  { n: 1, name: "Physical", pdu: "Bits", addr: "—", color: "bg-layer-phy", protocols: ["1000BASE-T", "Fiber", "Radio"], job: "Bits on a medium. Signaling, connectors, Shannon limits.", devices: "Hubs, repeaters, NICs, cables" },
];
const WRAP = ["Application data", "+ TCP segment (ports, seq)", "+ IP packet (src/dst IP)", "+ Ethernet frame (MACs)", "Bits on the wire", "Receiver unwraps the frame", "IP header stripped", "TCP delivers the stream", "Application reads the bytes"];

@Component({
  selector: "cs-osi",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="OSI model — click a layer, then play encapsulation" [sim]="sim">
      <div class="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div class="flex flex-col gap-1.5">
          @for (L of layers; track L.n; let i = $index) {
            <button type="button" class="flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-left text-[#0c0e11]" [class]="L.color" [class.opacity-85]="selected() !== i" (click)="selected.set(i)">
              <span class="font-mono text-[11px] tabular-nums opacity-70">L{{ L.n }}</span>
              <span class="flex-1 text-sm font-medium">{{ L.name }}</span>
              <span class="font-mono text-[11px] opacity-70">{{ L.pdu }}</span>
            </button>
          }
        </div>
        <div class="rounded-lg border border-border bg-bg p-4">
          <p class="font-mono text-[11px] text-muted">Layer {{ layer().n }}</p>
          <h3 class="font-display text-xl text-fg">{{ layer().name }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ layer().job }}</p>
          <p class="mt-3 font-mono text-sm text-fg">{{ wrap[sim.step()] }}</p>
        </div>
      </div>
    </cs-sim-shell>
  `,
})
export class OsiExplorer {
  readonly layers = LAYERS;
  readonly wrap = WRAP;
  readonly selected = signal(0);
  readonly sim = useSim(WRAP.length - 1, 3);
  readonly layer = computed(() => LAYERS[this.selected()]);
}

const TCP_STEPS = [
  { flags: "SYN", seq: "seq=1000", ack: "", note: "Client proposes ISN 1000", dir: "→" },
  { flags: "SYN-ACK", seq: "seq=5000", ack: "ack=1001", note: "Server proposes ISN 5000, acks 1000", dir: "←" },
  { flags: "ACK", seq: "seq=1001", ack: "ack=5001", note: "Connection established", dir: "→" },
  { flags: "PSH-ACK", seq: "seq=1001", ack: "ack=5001", note: "First application bytes (e.g. HTTP)", dir: "→" },
  { flags: "ACK", seq: "seq=5001", ack: "ack=1020", note: "Server acks payload", dir: "←" },
  { flags: "FIN-ACK", seq: "seq=1020", ack: "ack=5001", note: "Client starts teardown", dir: "→" },
  { flags: "ACK", seq: "seq=5001", ack: "ack=1021", note: "Server acks FIN", dir: "←" },
  { flags: "FIN-ACK", seq: "seq=5001", ack: "ack=1021", note: "Server sends its FIN", dir: "←" },
  { flags: "ACK", seq: "seq=1021", ack: "ack=5002", note: "TIME-WAIT, then closed", dir: "→" },
];

@Component({
  selector: "cs-tcp",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="TCP handshake, data, teardown" [sim]="sim">
      <div class="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
        <div class="rounded-lg border border-border bg-bg p-3 text-center">
          <p class="font-mono text-[11px] text-muted">CLIENT</p>
          <p class="text-sm font-medium">10.0.0.2:52344</p>
          <p class="mt-2 font-mono text-xs text-muted">{{ sim.step() >= 2 ? "ESTABLISHED" : "SYN-SENT" }}</p>
        </div>
        <div class="flex min-h-24 min-w-28 items-center justify-center">
          <span class="font-mono text-sm" [class.text-ok]="s().dir === '→'" [class.text-link]="s().dir === '←'">{{ s().dir }} {{ s().flags }}</span>
        </div>
        <div class="rounded-lg border border-border bg-bg p-3 text-center">
          <p class="font-mono text-[11px] text-muted">SERVER</p>
          <p class="text-sm font-medium">10.0.0.8:80</p>
          <p class="mt-2 font-mono text-xs text-muted">{{ sim.step() >= 2 ? "ESTABLISHED" : sim.step() >= 1 ? "SYN-RECEIVED" : "LISTEN" }}</p>
        </div>
      </div>
      <p class="mt-3 font-mono text-xs text-fg">{{ s().seq }} {{ s().ack }}</p>
      <p class="mt-1 text-sm text-muted">{{ s().note }}</p>
    </cs-sim-shell>
  `,
})
export class TcpSimulator {
  readonly steps = TCP_STEPS;
  readonly sim = useSim(TCP_STEPS.length - 1);
  readonly s = computed(() => TCP_STEPS[this.sim.step()]);
}

const DNS_NODES = ["Browser", "Stub / OS", "Resolver", "Root", "TLD (.com)", "Auth (example.com)"];
const DNS_STEPS = [
  { from: 0, to: 1, label: "What's the A for www.example.com?" },
  { from: 1, to: 2, label: "Recursive query" },
  { from: 2, to: 3, label: "Where is .com?" },
  { from: 3, to: 2, label: "NS for .com" },
  { from: 2, to: 4, label: "Where is example.com?" },
  { from: 4, to: 2, label: "NS for example.com" },
  { from: 2, to: 5, label: "A www.example.com?" },
  { from: 5, to: 2, label: "93.184.216.34  TTL=3600" },
  { from: 2, to: 1, label: "Answer + cache" },
  { from: 1, to: 0, label: "Use 93.184.216.34" },
];

@Component({
  selector: "cs-dns",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Recursive DNS lookup" [sim]="sim">
      <div class="flex flex-wrap gap-2">
        @for (n of nodes; track n; let i = $index) {
          <div class="min-h-11 rounded-md border px-3 py-2 text-sm" [class.border-primary]="i === s().from || i === s().to" [class.bg-primary]="i === s().from || i === s().to" [class.text-primary-fg]="i === s().from || i === s().to" [class.border-border]="i !== s().from && i !== s().to" [class.bg-bg]="i !== s().from && i !== s().to">{{ n }}</div>
        }
      </div>
      <p class="mt-4 text-sm text-muted">{{ nodes[s().from] }} → {{ nodes[s().to] }}: {{ s().label }}</p>
    </cs-sim-shell>
  `,
})
export class DnsSimulator {
  readonly nodes = DNS_NODES;
  readonly sim = useSim(DNS_STEPS.length - 1);
  readonly s = computed(() => DNS_STEPS[this.sim.step()]);
}

const HTTP_STEPS = ["URL bar: https://example.com/", "DNS: name → 93.184.216.34", "TCP handshake (1 RTT)", "TLS handshake (1–2 RTT)", "HTTP GET /  Host: example.com", "Server: 200 OK  text/html", "Parse HTML, discover CSS/JS", "Render: style → layout → paint"];

@Component({
  selector: "cs-http",
  imports: [SimShell, Pipeline],
  template: `
    <cs-sim-shell title="A page load" [sim]="sim">
      <cs-pipeline [steps]="steps" [active]="sim.step()" />
      <p class="text-sm text-muted">{{ steps[sim.step()] }}</p>
    </cs-sim-shell>
  `,
})
export class HttpSimulator {
  readonly steps = HTTP_STEPS;
  readonly sim = useSim(HTTP_STEPS.length - 1);
}

@Component({
  selector: "cs-routing",
  imports: [SimShell],
  template: `
    <cs-sim-shell title="Longest-prefix match" [sim]="sim">
      <p class="mb-2 text-sm">Packet to <span class="font-mono">{{ dest() }}</span> → <span class="font-medium">{{ pick() }}</span></p>
      <table class="w-full text-left text-sm">
        <thead class="text-muted"><tr><th class="py-1">prefix</th><th>next hop</th></tr></thead>
        <tbody>
          @for (r of table; track r.prefix) {
            <tr [class.bg-surface-2]="r.nh === pick()"><td class="py-1 font-mono text-xs">{{ r.prefix }}</td><td>{{ r.nh }}</td></tr>
          }
        </tbody>
      </table>
    </cs-sim-shell>
  `,
})
export class RoutingSim {
  readonly table = [
    { prefix: "10.0.0.0/16", nh: "R1" },
    { prefix: "10.1.0.0/16", nh: "R2" },
    { prefix: "10.1.4.0/24", nh: "R3" },
    { prefix: "0.0.0.0/0", nh: "ISP" },
  ];
  readonly dests = ["10.1.4.22", "10.1.9.1", "10.0.3.4", "8.8.8.8"];
  readonly sim = useSim(3);
  dest() {
    return this.dests[this.sim.step()];
  }
  pick() {
    const dest = this.dest();
    return dest.startsWith("10.1.4") ? "R3" : dest.startsWith("10.1") ? "R2" : dest.startsWith("10.0") ? "R1" : "ISP";
  }
}
