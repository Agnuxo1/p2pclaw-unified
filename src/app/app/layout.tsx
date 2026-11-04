/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import { AppShell } from "@/components/layout/AppShell";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
