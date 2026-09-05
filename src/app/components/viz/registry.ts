import { Component, input } from "@angular/core";
import { AlgorithmVisualizer, BstExplorer, DijkstraViz, GraphSearch, HashCollisions, StackQueue } from "./dsa-labs";
import { DnsSimulator, HttpSimulator, OsiExplorer, RoutingSim, TcpSimulator } from "./network-labs";
import {
  CpuPipelineViz,
  CpuScheduler,
  DeadlockSim,
  MemoryMap,
  PageReplacement,
  PagingSim,
  ProcessStates,
} from "./os-labs";
import {
  BPlusTreeViz,
  CacheSim,
  CompilerExplorer,
  ConsistentHashViz,
  DfaSim,
  LeaderElection,
  LinuxTerminal,
  LoadBalancerViz,
  NeuralNetViz,
  SqlPlayground,
  TransactionIso,
} from "./systems-labs";

@Component({
  selector: "cs-viz",
  imports: [
    OsiExplorer,
    TcpSimulator,
    DnsSimulator,
    HttpSimulator,
    RoutingSim,
    AlgorithmVisualizer,
    BstExplorer,
    GraphSearch,
    DijkstraViz,
    HashCollisions,
    StackQueue,
    CpuScheduler,
    ProcessStates,
    PagingSim,
    PageReplacement,
    DeadlockSim,
    CpuPipelineViz,
    MemoryMap,
    SqlPlayground,
    BPlusTreeViz,
    TransactionIso,
    CacheSim,
    LoadBalancerViz,
    ConsistentHashViz,
    LeaderElection,
    CompilerExplorer,
    DfaSim,
    NeuralNetViz,
    LinuxTerminal,
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
        @case ("algorithm-visualizer") {
          <cs-algo />
        }
        @case ("bst-explorer") {
          <cs-bst />
        }
        @case ("graph-search") {
          <cs-graph-search />
        }
        @case ("dijkstra") {
          <cs-dijkstra />
        }
        @case ("hash-collisions") {
          <cs-hash />
        }
        @case ("stack-queue") {
          <cs-stack-queue />
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
        @case ("cpu-pipeline") {
          <cs-cpu-pipe />
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
        @case ("cache-simulator") {
          <cs-cache />
        }
        @case ("load-balancer") {
          <cs-lb />
        }
        @case ("consistent-hashing") {
          <cs-hash-ring />
        }
        @case ("distributed-simulator") {
          <cs-leader />
        }
        @case ("compiler-explorer") {
          <cs-compiler />
        }
        @case ("dfa-simulator") {
          <cs-dfa />
        }
        @case ("neural-net") {
          <cs-nn />
        }
        @case ("linux-terminal") {
          <cs-linux />
        }
      }
    </div>
  `,
})
export class Viz {
  readonly id = input.required<string>();
}
