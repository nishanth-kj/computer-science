"use client";

import type { ComponentType } from "react";
import { AlgorithmVisualizer } from "./algorithm-visualizer";
import { DnsSimulator } from "./dns-simulator";
import { HttpSimulator } from "./http-simulator";
import {
  BPlusTreeViz,
  BstExplorer,
  CacheSim,
  CompilerExplorer,
  ConsistentHashViz,
  CpuPipelineViz,
  CpuScheduler,
  DeadlockSim,
  DfaSim,
  DijkstraViz,
  GraphSearch,
  HashCollisions,
  LeaderElection,
  LinuxTerminal,
  LoadBalancerViz,
  NeuralNetViz,
  PageReplacement,
  PagingSim,
  ProcessStates,
  RoutingSim,
  SqlPlayground,
  StackQueue,
  TransactionIso,
} from "./labs-kit";
import { MemoryMap } from "./memory-map";
import { OsiExplorer } from "./osi-explorer";
import { TcpSimulator } from "./tcp-simulator";

const MAP: Record<string, ComponentType> = {
  "osi-explorer": OsiExplorer,
  "tcp-simulator": TcpSimulator,
  "dns-simulator": DnsSimulator,
  "http-simulator": HttpSimulator,
  "algorithm-visualizer": AlgorithmVisualizer,
  "bst-explorer": BstExplorer,
  "graph-search": GraphSearch,
  dijkstra: DijkstraViz,
  "hash-collisions": HashCollisions,
  "cpu-scheduler": CpuScheduler,
  "process-states": ProcessStates,
  "paging-simulator": PagingSim,
  "page-replacement": PageReplacement,
  "deadlock-simulator": DeadlockSim,
  "cpu-pipeline": CpuPipelineViz,
  "sql-playground": SqlPlayground,
  "bplus-tree": BPlusTreeViz,
  "transaction-simulator": TransactionIso,
  "cache-simulator": CacheSim,
  "load-balancer": LoadBalancerViz,
  "consistent-hashing": ConsistentHashViz,
  "distributed-simulator": LeaderElection,
  "compiler-explorer": CompilerExplorer,
  "dfa-simulator": DfaSim,
  "neural-net": NeuralNetViz,
  "linux-terminal": LinuxTerminal,
  "stack-queue": StackQueue,
  "routing-simulator": RoutingSim,
  "memory-map": MemoryMap,
};

export function Viz({ id }: { id: string }) {
  const Comp = MAP[id];
  if (!Comp) return null;
  return (
    <div className="my-4">
      <Comp />
    </div>
  );
}

export { MAP as VIZ_MAP };
