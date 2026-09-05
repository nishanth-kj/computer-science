import { Component, computed, inject, input, signal } from "@angular/core";
import { Router } from "@angular/router";
import { exists, getTopic, known, topicHref, type Topic } from "@/lib/content";

export type GraphNode = {
  id: string;
  title: string;
  kind?: "here" | "prereq" | "related" | "next" | "node";
};

export type GraphEdge = {
  from: string;
  to: string;
  kind?: "prereq" | "related";
};

export type FlowNode = {
  id: string;
  title: string;
  displayTitle: string;
  sub: string;
  kind: "here" | "prereq" | "related" | "next" | "node";
  level?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  col: number;
  row: number;
};

export type FlowEdge = {
  id: string;
  from: string;
  to: string;
  d: string;
  kind: "prereq" | "related";
};

export type FlowStage = {
  title: string;
  x: number;
  w: number;
};

export type FlowLayout = {
  nodes: FlowNode[];
  edges: FlowEdge[];
  stages: FlowStage[];
  width: number;
  height: number;
};

export function neighborhoodGraph(topic: Topic): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const prereqs = known(topic.prereqs).slice(0, 5);
  const related = known(topic.related.filter((s) => s !== topic.next)).slice(0, 5);
  const next = topic.next && exists(topic.next) ? topic.next : undefined;
  const nodes: GraphNode[] = [{ id: topic.slug, title: topic.title, kind: "here" }];
  const edges: GraphEdge[] = [];

  for (const id of prereqs) {
    nodes.push({ id, title: getTopic(id)?.title ?? id, kind: "prereq" });
    edges.push({ from: id, to: topic.slug, kind: "prereq" });
  }

  const right = [...related];
  if (next && !right.includes(next)) right.push(next);
  for (const id of right) {
    nodes.push({
      id,
      title: getTopic(id)?.title ?? id,
      kind: id === next ? "next" : "related",
    });
    edges.push({ from: topic.slug, to: id, kind: "related" });
  }

  return { nodes, edges };
}

@Component({
  selector: "cs-graph",
  templateUrl: "./graph.html",
  styleUrl: "./graph.css",
})
export class GraphView {
  readonly nodes = input.required<GraphNode[]>();
  readonly edges = input.required<GraphEdge[]>();
  readonly layout = input<"radial" | "split">("radial");
  readonly focus = input<string>();
  readonly legend = input<string[]>([]);
  readonly label = input("Page flowchart");

  readonly hoveredNode = signal<string | null>(null);

  private readonly router = inject(Router);

  readonly layoutData = computed<FlowLayout>(() => {
    const rawNodes = this.nodes();
    const rawEdges = this.edges();
    if (!rawNodes.length) {
      return { nodes: [], edges: [], stages: [], width: 400, height: 200 };
    }

    if (this.layout() === "split" || rawNodes.some((n) => n.kind === "here") || this.focus()) {
      return this.layoutSplit(rawNodes, rawEdges);
    }
    return this.layoutFlow(rawNodes, rawEdges);
  });

  readonly connectedIds = computed(() => {
    const target = this.hoveredNode();
    if (!target) return null;

    const nodes = new Set<string>([target]);
    const edges = new Set<string>();

    for (const e of this.layoutData().edges) {
      if (e.from === target || e.to === target) {
        nodes.add(e.from);
        nodes.add(e.to);
        edges.add(e.id);
      }
    }

    return { nodes, edges };
  });

  private layoutSplit(nodes: GraphNode[], edges: GraphEdge[]): FlowLayout {
    const focusId = this.focus() || nodes.find((n) => n.kind === "here")?.id || nodes[0]?.id;
    const prereqNodes = nodes.filter(
      (n) => n.kind === "prereq" || (n.id !== focusId && edges.some((e) => e.from === n.id && e.to === focusId))
    );
    const focusNode = nodes.find((n) => n.id === focusId);
    const nextNodes = nodes.filter(
      (n) => n.id !== focusId && !prereqNodes.some((p) => p.id === n.id)
    );

    const columns: { title: string; nodes: GraphNode[] }[] = [];
    if (prereqNodes.length > 0) {
      columns.push({ title: "PREREQUISITES", nodes: prereqNodes });
    }
    if (focusNode) {
      columns.push({ title: "CURRENT TOPIC", nodes: [focusNode] });
    }
    if (nextNodes.length > 0) {
      columns.push({ title: "NEXT & RELATED", nodes: nextNodes });
    }

    if (columns.length === 0) {
      columns.push({ title: "TOPIC", nodes });
    }

    return this.buildFlowLayout(columns, edges, focusId);
  }

  private layoutFlow(nodes: GraphNode[], edges: GraphEdge[]): FlowLayout {
    const focusId = this.focus();
    let activeNodes = nodes;

    // For very large graphs (e.g. 80 nodes), select the 24 most prominent connected nodes
    if (activeNodes.length > 24) {
      const edgeCounts = new Map<string, number>();
      for (const e of edges) {
        edgeCounts.set(e.from, (edgeCounts.get(e.from) || 0) + 1);
        edgeCounts.set(e.to, (edgeCounts.get(e.to) || 0) + 1);
      }
      activeNodes = [...nodes]
        .sort((a, b) => (edgeCounts.get(b.id) || 0) - (edgeCounts.get(a.id) || 0))
        .slice(0, 24);
    }

    const activeIds = new Set(activeNodes.map((n) => n.id));
    const activeEdges = edges.filter((e) => activeIds.has(e.from) && activeIds.has(e.to));

    // Determine initial stage ranks by topic level
    const rankMap = new Map<string, number>();
    for (const n of activeNodes) {
      const topic = getTopic(n.id);
      let baseRank = 0;
      if (topic?.level === "intermediate") baseRank = 1;
      else if (topic?.level === "advanced") baseRank = 2;
      else if (topic?.level === "research") baseRank = 3;
      rankMap.set(n.id, baseRank);
    }

    // Topologically push ranks forward along prerequisite / forward edges
    for (let iter = 0; iter < 3; iter++) {
      for (const e of activeEdges) {
        const fromRank = rankMap.get(e.from) || 0;
        const toRank = rankMap.get(e.to) || 0;
        if (toRank <= fromRank) {
          rankMap.set(e.to, Math.min(3, fromRank + 1));
        }
      }
    }

    const maxRank = Math.max(...Array.from(rankMap.values()), 1);
    const numCols = Math.min(Math.max(maxRank + 1, 3), 4);

    const titles3 = ["FOUNDATIONS", "CORE CONCEPTS", "ADVANCED & APPLIED"];
    const titles4 = ["FOUNDATIONS", "CORE CONCEPTS", "ADVANCED SYSTEMS", "APPLICATIONS"];
    const titles = numCols === 4 ? titles4 : titles3;

    const colGroups: GraphNode[][] = Array.from({ length: numCols }, () => []);
    for (const n of activeNodes) {
      let r = rankMap.get(n.id) || 0;
      if (r >= numCols) r = numCols - 1;
      colGroups[r].push(n);
    }

    // Balance columns so no column is overly crowded
    for (let c = 0; c < numCols - 1; c++) {
      while (colGroups[c].length > 6 && colGroups[c + 1].length < 6) {
        colGroups[c + 1].unshift(colGroups[c].pop()!);
      }
    }

    const columns = colGroups
      .map((groupNodes, idx) => ({
        title: titles[idx] || `STAGE ${idx + 1}`,
        nodes: groupNodes,
      }))
      .filter((c) => c.nodes.length > 0);

    return this.buildFlowLayout(columns, activeEdges, focusId);
  }

  private buildFlowLayout(
    columns: { title: string; nodes: GraphNode[] }[],
    edges: GraphEdge[],
    focusId?: string
  ): FlowLayout {
    const CARD_W = 184;
    const CARD_H = 48;
    const GAP_X = 64;
    const GAP_Y = 16;
    const PAD_X = 32;
    const PAD_TOP = 56;
    const PAD_BOTTOM = 36;

    const numCols = Math.max(columns.length, 1);
    const totalW = PAD_X * 2 + numCols * CARD_W + (numCols - 1) * GAP_X;

    const maxNodesInCol = Math.max(...columns.map((c) => c.nodes.length), 1);
    const maxColH = maxNodesInCol * CARD_H + (maxNodesInCol - 1) * GAP_Y;
    const totalH = PAD_TOP + maxColH + PAD_BOTTOM;

    const stages: FlowStage[] = [];
    const laidNodes: FlowNode[] = [];
    const nodeMap = new Map<string, FlowNode>();

    columns.forEach((col, colIdx) => {
      const colX = PAD_X + colIdx * (CARD_W + GAP_X);
      stages.push({
        title: col.title,
        x: colX,
        w: CARD_W,
      });

      const colH = col.nodes.length * CARD_H + (col.nodes.length - 1) * GAP_Y;
      const startY = PAD_TOP + (maxColH - colH) / 2;

      col.nodes.forEach((node, rowIdx) => {
        const nodeY = startY + rowIdx * (CARD_H + GAP_Y);
        const topic = getTopic(node.id);
        const isHere = node.id === focusId || node.kind === "here";
        const kind = isHere ? "here" : (node.kind || "node");

        let sub = topic?.level || "topic";
        if (isHere) sub = "Current Page";
        else if (kind === "prereq") sub = "Prerequisite";
        else if (kind === "next") sub = "Next Step";
        else if (topic?.section) sub = topic.section;

        const title = node.title || topic?.title || node.id;
        const displayTitle = title.length > 20 ? `${title.slice(0, 18)}…` : title;

        const flowNode: FlowNode = {
          id: node.id,
          title,
          displayTitle,
          sub,
          kind,
          level: topic?.level,
          x: colX,
          y: nodeY,
          w: CARD_W,
          h: CARD_H,
          col: colIdx,
          row: rowIdx,
        };

        laidNodes.push(flowNode);
        nodeMap.set(node.id, flowNode);
      });
    });

    const laidEdges: FlowEdge[] = [];
    edges.forEach((e, idx) => {
      const a = nodeMap.get(e.from);
      const b = nodeMap.get(e.to);
      if (!a || !b) return;

      const x1 = a.x + a.w;
      const y1 = a.y + a.h / 2;
      const x2 = b.x;
      const y2 = b.y + b.h / 2;

      let d = "";
      if (b.col > a.col) {
        const dx = x2 - x1;
        d = `M ${x1} ${y1} C ${x1 + dx * 0.45} ${y1}, ${x2 - dx * 0.45} ${y2}, ${x2} ${y2}`;
      } else if (b.col === a.col) {
        const loopX = x1 + 24;
        d = `M ${x1} ${y1} C ${loopX} ${y1}, ${loopX} ${y2}, ${x1} ${y2}`;
      } else {
        d = `M ${x1} ${y1} C ${x1 + 24} ${y1 - 24}, ${x2 - 24} ${y2 - 24}, ${x2} ${y2}`;
      }

      laidEdges.push({
        id: `edge-${idx}`,
        from: a.id,
        to: b.id,
        d,
        kind: e.kind || "related",
      });
    });

    return {
      nodes: laidNodes,
      edges: laidEdges,
      stages,
      width: totalW,
      height: Math.max(totalH, 240),
    };
  }

  isNodeActive(n: FlowNode): boolean {
    const conn = this.connectedIds();
    return conn ? conn.nodes.has(n.id) : false;
  }

  isNodeDimmed(n: FlowNode): boolean {
    const conn = this.connectedIds();
    return conn ? !conn.nodes.has(n.id) : false;
  }

  isEdgeActive(e: FlowEdge): boolean {
    const conn = this.connectedIds();
    return conn ? conn.edges.has(e.id) : false;
  }

  isEdgeDimmed(e: FlowEdge): boolean {
    const conn = this.connectedIds();
    return conn ? !conn.edges.has(e.id) : false;
  }

  open(id: string) {
    if (id === this.focus()) return;
    void this.router.navigateByUrl(topicHref(id));
  }
}
