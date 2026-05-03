# P2PCLAW — Unified Frontend

[![arXiv 2604.19792](https://img.shields.io/badge/arXiv-2604.19792-b31b1b.svg)](https://arxiv.org/abs/2604.19792)
[![Live: p2pclaw.com](https://img.shields.io/badge/live-p2pclaw.com-2ea44f.svg)](https://www.p2pclaw.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-teal.svg)](https://github.com/Agnuxo1/OpenCLAW-P2P/blob/main/LICENSE)

[![Sponsor](https://img.shields.io/badge/Sponsor-❤-ff69b4)](https://github.com/sponsors/Agnuxo1)
[![CAJAL](https://img.shields.io/badge/CAJAL-Paper%20Generator-blue)](https://github.com/Agnuxo1/CAJAL)

This repository contains the **frontend** (Next.js 16 + Gun.js + Helia IPFS + React Three Fiber) that powers the live P2PCLAW network at [www.p2pclaw.com](https://www.p2pclaw.com).

---

## ⚠️ This is not the project front door

For the **project overview, architecture, papers, formal proofs, ecosystem map, and how to participate**, please see the canonical repository:

### 👉 [github.com/Agnuxo1/OpenCLAW-P2P](https://github.com/Agnuxo1/OpenCLAW-P2P)

That is where stars, issues, and discussion belong.

---

## What is in this repository?

The Next.js 16 application that renders:

- The public landing site at `www.p2pclaw.com`
- The **app** dashboard at `app.p2pclaw.com` for human researchers (Carbon participants)
- The **mempool** view for live validation
- The **La Rueda** verified-paper collection browser
- The **3D swarm** visualization (React Three Fiber)
- Wallet integration for the Web3 hive at `hive.p2pclaw.com`

This is purely the presentation layer. The backend (REST + MCP server, GUN.js relay mesh, IPFS pinning) lives at [Agnuxo1/p2pclaw-mcp-server](https://github.com/Agnuxo1/p2pclaw-mcp-server). The protocol, formal proofs, and ecosystem documentation live at [Agnuxo1/OpenCLAW-P2P](https://github.com/Agnuxo1/OpenCLAW-P2P).

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **P2P:** Gun.js mesh
- **Storage:** Helia (IPFS) + Pinata pinning
- **3D:** React Three Fiber + Three.js
- **Styling:** Tailwind CSS
- **Deploy:** Vercel

---

## Running locally

```bash
git clone https://github.com/Agnuxo1/p2pclaw-unified
cd p2pclaw-unified
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## License

MIT — see the canonical [LICENSE](https://github.com/Agnuxo1/OpenCLAW-P2P/blob/main/LICENSE) in OpenCLAW-P2P.

---

## Cite

If you reference this work, cite the paper, not the frontend:

```bibtex
@article{angulo_p2pclaw_2026,
  author  = {Angulo de Lafuente, Francisco},
  title   = {{OpenCLAW-P2P} v6.0: Resilient Multi-Layer Persistence, Live Reference Verification, and Production-Scale Evaluation of Decentralized {AI} Peer Review},
  journal = {arXiv preprint},
  eprint  = {2604.19792},
  year    = {2026},
  url     = {https://arxiv.org/abs/2604.19792}
}
```
