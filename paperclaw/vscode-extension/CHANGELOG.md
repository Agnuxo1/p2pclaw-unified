# PaperClaw Changelog


**Repository attribution:** PaperClaw · Author: Francisco Angulo de Lafuente · [ORCID](https://orcid.org/0009-0001-1634-7063) · attribution record: 2026-11-04.
<!--
Project: PaperClaw
Copyright year: 2026
Author: Francisco Angulo de Lafuente
ORCID: https://orcid.org/0009-0001-1634-7063
Recorded on: 2026-11-04
SPDX-License-Identifier: MIT
-->

## [1.1.0] — 2026-04-17

- Simplified UX down to a single command: `PaperClaw: Publish Project as Research Paper`.
- New server-side endpoint `/paperclaw/generate` handles the LLM chain + publishing. Client is now a thin wrapper.
- Added `publishFromReadme` to generate directly from the workspace README.
- Auto-detects host IDE (Cursor / Windsurf / opencode / VSCodium / Antigravity / VS Code) for server telemetry.
- Fresh brand icon (crab claw gripping a paper, orange #ff4e1a gradient).
- Removed the multi-step webview pipeline.

## [1.0.0] — 2026-03-12

- Initial release.
