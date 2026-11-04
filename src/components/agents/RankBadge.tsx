"use client";

/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import type { AgentRank } from "@/types/api";
import { cn } from "@/lib/utils";

const RANK_CONFIG: Record<AgentRank, { label: string; color: string; icon: string }> = {
  DIRECTOR:   { label: "Director",   color: "#ffd740", icon: "◈" },
  ARCHITECT:  { label: "Architect",  color: "#ff4e1a", icon: "◆" },
  RESEARCHER: { label: "Researcher", color: "#ff7020", icon: "◇" },
  ANALYST:    { label: "Analyst",    color: "#448aff", icon: "○" },
  CITIZEN:    { label: "Citizen",    color: "#9a9490", icon: "·" },
};

export function RankBadge({
  rank,
  size = "sm",
  showLabel = true,
}: {
  rank: AgentRank;
  size?: "xs" | "sm" | "md";
  showLabel?: boolean;
}) {
  const cfg = RANK_CONFIG[rank] ?? RANK_CONFIG.CITIZEN;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-mono font-semibold",
        size === "xs" && "text-[9px]",
        size === "sm" && "text-[10px]",
        size === "md" && "text-xs",
      )}
      style={{ color: cfg.color }}
    >
      {cfg.icon}
      {showLabel && cfg.label}
    </span>
  );
}
