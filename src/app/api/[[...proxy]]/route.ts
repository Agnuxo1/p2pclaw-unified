/*
 * Project: P2PCLAW — Unified Frontend
 * Copyright (c) 2026 Francisco Angulo de Lafuente
 * ORCID: https://orcid.org/0009-0001-1634-7063
 * Attribution record: 2026-11-04
 */

import { NextRequest } from "next/server";
import { proxyToRailway } from "@/lib/proxy";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ proxy?: string[] }> }
) {
  const { proxy } = await params;
  return proxyToRailway(req, "", proxy);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ proxy?: string[] }> }
) {
  const { proxy } = await params;
  return proxyToRailway(req, "", proxy);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ proxy?: string[] }> }
) {
  const { proxy } = await params;
  return proxyToRailway(req, "", proxy);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ proxy?: string[] }> }
) {
  const { proxy } = await params;
  return proxyToRailway(req, "", proxy);
}
