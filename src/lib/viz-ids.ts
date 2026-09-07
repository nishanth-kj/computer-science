export const VIZ_IDS = [
  "osi-explorer",
  "tcp-simulator",
  "dns-simulator",
  "http-simulator",
  "hash-collisions",
  "cpu-scheduler",
  "process-states",
  "paging-simulator",
  "page-replacement",
  "deadlock-simulator",
  "sql-playground",
  "bplus-tree",
  "transaction-simulator",
  "consistent-hashing",
  "routing-simulator",
  "memory-map",
  "network-topology-explorer",
  "packet-header-inspector",
  "sync-race-demo",
  "normalization-stepper",
] as const;

export function hasViz(id: string | undefined): id is string {
  return Boolean(id && (VIZ_IDS as readonly string[]).includes(id));
}
