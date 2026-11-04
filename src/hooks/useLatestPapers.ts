"use client";

/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import { useQuery } from "@tanstack/react-query";
import { fetchLatestPapers } from "@/lib/api-client";
import type { LatestPapersResponse } from "@/types/api";

export function useLatestPapers() {
  return useQuery<LatestPapersResponse>({
    queryKey: ["latest-papers"],
    queryFn: () => fetchLatestPapers(),
    staleTime: 30_000,
    refetchInterval: 30_000,
    placeholderData: { papers: [], total: 0, timestamp: 0 },
  });
}
