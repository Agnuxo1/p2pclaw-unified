"use client";

/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "./QueryProvider";
import { GunProvider } from "./GunProvider";
import { P2PProvider } from "./P2PProvider";
import { WebMCPProvider } from "./WebMCPProvider";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <GunProvider>
        <P2PProvider>
          <WebMCPProvider>
            <TooltipProvider delayDuration={300}>
              {children}
            </TooltipProvider>
          </WebMCPProvider>
        </P2PProvider>
      </GunProvider>
    </QueryProvider>
  );
}
