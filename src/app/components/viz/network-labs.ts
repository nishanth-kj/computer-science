import { Component, computed, signal } from "@angular/core";
import { useSim } from "@/lib/sim";
import { Pipeline } from "@/app/components/topic-view/pipeline";
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

type Device = { id: string; label: string; layer: string; color: string; desc: string };
const DEVICES: Device[] = [
  { id: "repeater", label: "Repeater", layer: "L1 Physical", color: "bg-layer-phy", desc: "Amplifies or retimes a signal to extend a physical segment's reach. No addressing — just physics." },
  { id: "hub", label: "Hub", layer: "L1 Physical", color: "bg-layer-phy", desc: "A physical-layer repeater with multiple ports: every bit in is repeated out every other port. The whole hub is one collision domain." },
  { id: "modem", label: "Modem", layer: "L1 Physical", color: "bg-layer-phy", desc: "Modulator-demodulator: converts digital bits to an analog carrier signal (and back) over phone line, cable, or fiber." },
  { id: "bridge", label: "Bridge", layer: "L2 Data Link", color: "bg-layer-dl", desc: "Connects two L2 segments and learns which MAC addresses live on which side, forwarding only when needed. A switch is a multi-port bridge." },
  { id: "switch", label: "Switch", layer: "L2 Data Link", color: "bg-layer-dl", desc: "Learns MAC addresses per port, forwards frames only to the port that needs them, and gives each port its own collision domain." },
  { id: "access-point", label: "Access Point", layer: "L2 Data Link", color: "bg-layer-dl", desc: "Bridges wireless stations to a wired LAN, handling association, authentication, and radio-to-Ethernet framing." },
  { id: "router", label: "Router", layer: "L3 Network", color: "bg-layer-net", desc: "Forwards packets between different subnets using a routing table and IP addresses, not MAC addresses." },
  { id: "gateway", label: "Gateway", layer: "L3 Network", color: "bg-layer-net", desc: "A node that translates between two different networks or protocols — often just another name for 'the router' at a network's edge." },
  { id: "firewall", label: "Firewall", layer: "Policy (L3–L4)", color: "bg-layer-trans", desc: "Filters, blocks, or NATs traffic by rule. Can be a dedicated box, or software running on a host or router." },
];

@Component({
  selector: "cs-net-topology",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <p class="mb-3 text-sm text-muted">Click a device to see what it does and which layer it operates at.</p>
      <div class="flex flex-wrap gap-2">
        @for (d of devices; track d.id) {
          <button
            type="button"
            class="rounded-md px-3 py-2 text-left text-[#0c0e11] transition-opacity"
            [class]="d.color"
            [class.opacity-100]="selected().id === d.id"
            [class.opacity-70]="selected().id !== d.id"
            (click)="select(d)"
          >
            <span class="block text-sm font-medium">{{ d.label }}</span>
            <span class="block font-mono text-[10px] opacity-80">{{ d.layer }}</span>
          </button>
        }
      </div>
      <div class="mt-4 rounded-lg border border-border bg-bg p-4">
        <p class="font-mono text-[11px] text-muted">{{ selected().layer }}</p>
        <h3 class="font-display text-xl text-fg">{{ selected().label }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ selected().desc }}</p>
      </div>
    </div>
  `,
})
export class NetworkTopologyExplorer {
  readonly devices = DEVICES;
  readonly selected = signal<Device>(DEVICES[0]);
  select(d: Device) {
    this.selected.set(d);
  }
}

type HeaderField = { name: string; bytes: number; variable?: boolean; desc: string };
const PROTOCOLS: Record<string, { title: string; fields: HeaderField[] }> = {
  ipv4: {
    title: "IPv4 header (20 bytes)",
    fields: [
      { name: "Version / IHL", bytes: 1, desc: "IP version (4) and header length in 32-bit words — usually 5 (20 bytes) with no options." },
      { name: "DSCP / ECN", bytes: 1, desc: "Differentiated services (QoS marking) and explicit congestion notification." },
      { name: "Total Length", bytes: 2, desc: "Length of the whole packet — header plus data — in bytes." },
      { name: "Identification", bytes: 2, desc: "Identifies which fragments belong to the same original datagram." },
      { name: "Flags / Fragment Offset", bytes: 2, desc: "Fragmentation control (Don't Fragment, More Fragments) and the fragment's offset." },
      { name: "TTL", bytes: 1, desc: "Time to live: decremented at every hop; the datagram is dropped when it hits 0." },
      { name: "Protocol", bytes: 1, desc: "Which transport protocol follows: 6 = TCP, 17 = UDP, 1 = ICMP." },
      { name: "Header Checksum", bytes: 2, desc: "Checksum over the header only — recomputed at every hop since TTL changes." },
      { name: "Source IP", bytes: 4, desc: "32-bit address of the sender." },
      { name: "Destination IP", bytes: 4, desc: "32-bit address of the receiver." },
    ],
  },
  ipv6: {
    title: "IPv6 header (40 bytes, fixed)",
    fields: [
      { name: "Version / Traffic Class / Flow Label", bytes: 4, desc: "Version (6), QoS traffic class, and a flow label for routers to keep packets of one flow together." },
      { name: "Payload Length", bytes: 2, desc: "Length of the payload that follows the header, in bytes." },
      { name: "Next Header", bytes: 1, desc: "Which header or protocol follows — plays the role IPv4's Protocol field does." },
      { name: "Hop Limit", bytes: 1, desc: "IPv6's name for TTL: decremented per hop, packet dropped at 0." },
      { name: "Source Address", bytes: 16, desc: "128-bit address of the sender." },
      { name: "Destination Address", bytes: 16, desc: "128-bit address of the receiver." },
    ],
  },
  ethernet: {
    title: "Ethernet II frame",
    fields: [
      { name: "Preamble", bytes: 7, desc: "Alternating 1010… bits so the receiver's clock can sync. Not counted as frame data." },
      { name: "SFD", bytes: 1, desc: "Start Frame Delimiter: marks where the actual frame begins." },
      { name: "Destination MAC", bytes: 6, desc: "48-bit hardware address of the intended receiver on this link." },
      { name: "Source MAC", bytes: 6, desc: "48-bit hardware address of the sender on this link." },
      { name: "EtherType", bytes: 2, desc: "Identifies the payload's protocol — 0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP." },
      { name: "Payload", bytes: 20, variable: true, desc: "The data being carried — commonly an IP packet. 46–1500 bytes." },
      { name: "FCS", bytes: 4, desc: "Frame Check Sequence: a CRC-32 checksum used to detect corruption." },
    ],
  },
  arp: {
    title: "ARP packet (28 bytes, Ethernet + IPv4)",
    fields: [
      { name: "Hardware Type", bytes: 2, desc: "Link-layer type; 1 = Ethernet." },
      { name: "Protocol Type", bytes: 2, desc: "Network-layer protocol being resolved; 0x0800 = IPv4." },
      { name: "HW Addr Len", bytes: 1, desc: "Length of a hardware address — 6 for MAC." },
      { name: "Proto Addr Len", bytes: 1, desc: "Length of a protocol address — 4 for IPv4." },
      { name: "Operation", bytes: 2, desc: "1 = request ('who has this IP?'), 2 = reply ('here is my MAC')." },
      { name: "Sender MAC", bytes: 6, desc: "MAC address of the machine sending the ARP packet." },
      { name: "Sender IP", bytes: 4, desc: "IP address of the machine sending the ARP packet." },
      { name: "Target MAC", bytes: 6, desc: "MAC address of the target — all zero in a request, since that's what's being asked for." },
      { name: "Target IP", bytes: 4, desc: "IP address being resolved to a MAC address." },
    ],
  },
  icmp: {
    title: "ICMP echo (ping) message",
    fields: [
      { name: "Type", bytes: 1, desc: "8 = echo request, 0 = echo reply, 3 = destination unreachable, 11 = time exceeded." },
      { name: "Code", bytes: 1, desc: "A subtype that refines the Type field's meaning." },
      { name: "Checksum", bytes: 2, desc: "Checksum over the whole ICMP message." },
      { name: "Identifier", bytes: 2, desc: "Matches replies to requests, e.g. per running instance of ping." },
      { name: "Sequence Number", bytes: 2, desc: "Increments with every echo request, so replies can be matched and timed." },
      { name: "Data", bytes: 12, variable: true, desc: "Payload echoed back unchanged — often a timestamp, used to measure round-trip time." },
    ],
  },
  udp: {
    title: "UDP header (8 bytes) + data",
    fields: [
      { name: "Source Port", bytes: 2, desc: "The sending application's port — often ephemeral." },
      { name: "Destination Port", bytes: 2, desc: "The receiving application's well-known or registered port." },
      { name: "Length", bytes: 2, desc: "Length of the UDP header plus data, in bytes." },
      { name: "Checksum", bytes: 2, desc: "Optional in IPv4, mandatory in IPv6 — covers header and data." },
      { name: "Data", bytes: 20, variable: true, desc: "The application payload. No reliability, ordering, or congestion control." },
    ],
  },
};

@Component({
  selector: "cs-packet-header",
  template: `
    <div class="rounded-xl border border-border bg-surface p-3">
      <select class="mb-3 h-8 rounded-sm border border-border bg-bg px-2 text-xs" [value]="protoId()" (change)="setProto($any($event.target).value)">
        @for (id of protoIds; track id) {
          <option [value]="id">{{ protocols[id].title }}</option>
        }
      </select>
      <div class="flex flex-wrap gap-0.5">
        @for (f of proto().fields; track f.name; let i = $index) {
          <button
            type="button"
            class="rounded-sm border px-2 py-2 text-left"
            [style.flex-grow]="f.bytes"
            [style.flex-basis.px]="f.bytes * 10"
            [class.border-primary]="selected() === i"
            [class.bg-primary/15]="selected() === i"
            [class.border-border]="selected() !== i"
            [class.bg-bg]="selected() !== i"
            [class.border-dashed]="f.variable"
            (click)="selected.set(i)"
          >
            <span class="block truncate text-[11px] font-medium">{{ f.name }}</span>
            <span class="block font-mono text-[10px] text-muted">{{ f.variable ? "variable" : f.bytes + " B" }}</span>
          </button>
        }
      </div>
      <div class="mt-3 rounded-lg border border-border bg-bg p-3">
        <p class="text-sm font-medium">{{ field().name }}</p>
        <p class="mt-1 text-sm leading-relaxed text-muted">{{ field().desc }}</p>
      </div>
    </div>
  `,
})
export class PacketHeaderInspector {
  readonly protocols = PROTOCOLS;
  readonly protoIds = Object.keys(PROTOCOLS);
  readonly protoId = signal("ipv4");
  readonly selected = signal(0);
  proto() {
    return this.protocols[this.protoId()];
  }
  field() {
    return this.proto().fields[Math.min(this.selected(), this.proto().fields.length - 1)];
  }
  setProto(id: string) {
    this.protoId.set(id);
    this.selected.set(0);
  }
}
