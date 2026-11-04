"use client";

/**
 * WebMCPProvider
 *
 * Registers BenchClaw tools with the browser's WebMCP API
 * (navigator.modelContext) as soon as the app mounts.
 *
 * Silently no-ops in browsers that don't support WebMCP yet.
 * Unregisters all tools on unmount via AbortController.
 *
 * Chrome support:
 *   • Chrome 146+: available behind #enable-webmcp-testing flag
 *   • Chrome 149+: stable, untrustedContentHint annotation required
 */

/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import { useEffect } from "react";
import { registerWebMCPTools } from "@/lib/webmcp";

export function WebMCPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const controller = registerWebMCPTools();
    return () => {
      controller?.abort();
    };
  }, []);

  return <>{children}</>;
}
