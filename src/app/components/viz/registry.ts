import { Component, input } from "@angular/core";
import { HashCollisions } from "./dsa-labs";
import { DnsSimulator, HttpSimulator, NetworkTopologyExplorer, OsiExplorer, PacketHeaderInspector, RoutingSim, TcpSimulator } from "./network-labs";
import { CpuScheduler, DeadlockSim, MemoryMap, PageReplacement, PagingSim, ProcessStates, SyncRaceDemo } from "./os-labs";
import { BPlusTreeViz, ConsistentHashViz, NormalizationStepper, SqlPlayground, TransactionIso } from "./systems-labs";

@Component({
  selector: "cs-viz",
  imports: [
    OsiExplorer,
    TcpSimulator,
    DnsSimulator,
    HttpSimulator,
    RoutingSim,
    HashCollisions,
    CpuScheduler,
    ProcessStates,
    PagingSim,
    PageReplacement,
    DeadlockSim,
    MemoryMap,
    SqlPlayground,
    BPlusTreeViz,
    TransactionIso,
    ConsistentHashViz,
    NetworkTopologyExplorer,
    PacketHeaderInspector,
    SyncRaceDemo,
    NormalizationStepper,
  ],
  template: `
    <div class="my-4">
      @switch (id()) {
        @case ("osi-explorer") {
          <cs-osi />
        }
        @case ("tcp-simulator") {
          <cs-tcp />
        }
        @case ("dns-simulator") {
          <cs-dns />
        }
        @case ("http-simulator") {
          <cs-http />
        }
        @case ("routing-simulator") {
          <cs-routing />
        }
        @case ("hash-collisions") {
          <cs-hash />
        }
        @case ("cpu-scheduler") {
          <cs-cpu-sched />
        }
        @case ("process-states") {
          <cs-process />
        }
        @case ("paging-simulator") {
          <cs-paging />
        }
        @case ("page-replacement") {
          <cs-page-rep />
        }
        @case ("deadlock-simulator") {
          <cs-deadlock />
        }
        @case ("memory-map") {
          <cs-memory />
        }
        @case ("sql-playground") {
          <cs-sql />
        }
        @case ("bplus-tree") {
          <cs-bplus />
        }
        @case ("transaction-simulator") {
          <cs-tx />
        }
        @case ("consistent-hashing") {
          <cs-hash-ring />
        }
        @case ("network-topology-explorer") {
          <cs-net-topology />
        }
        @case ("packet-header-inspector") {
          <cs-packet-header />
        }
        @case ("sync-race-demo") {
          <cs-sync-race />
        }
        @case ("normalization-stepper") {
          <cs-normalize />
        }
      }
    </div>
  `,
})
export class Viz {
  readonly id = input.required<string>();
}
