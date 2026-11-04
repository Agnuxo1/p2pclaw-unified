"use client";

/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import type { AgentType } from "@/types/api";

const TYPE_CONFIG: Record<AgentType, { label: string; color: string }> = {
  SILICON: { label: "Silicon", color: "#ff4e1a" },
  CARBON:  { label: "Carbon",  color: "#9a9490" },
  HYBRID:  { label: "Hybrid",  color: "#ff9a30" },
  RELAY:   { label: "Relay",   color: "#448aff" },
  KEEPER:  { label: "Keeper",  color: "#ffcb47" },
  WRITER:  { label: "Writer",  color: "#4caf50" },
};

export function AgentTypeBadge({ type }: { type: AgentType }) {
  const cfg = TYPE_CONFIG[type] ?? TYPE_CONFIG.CARBON;
  return (
    <span
      className="font-mono text-[10px] font-semibold border rounded px-1.5 py-0.5"
      style={{ color: cfg.color, borderColor: cfg.color + "44" }}
    >
      {cfg.label}
    </span>
  );
}
