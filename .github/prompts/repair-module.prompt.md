---
description: Diagnose and fix one learning module using regression tests.
argument-hint: "Module or bug description"
---

Read `AGENTS.md`, `docs/FEATURES.md`, and `docs/ROADMAP.md`. Inspect the current module and supporting certification data. Reproduce the reported problem, implement the smallest safe fix, and add Playwright and/or unit coverage to prevent regression. Verify error, loading, keyboard, success and retry states. Preserve existing progress and design. Run `npm run verify` plus focused e2e tests, and report what passed and what is still incomplete. Never replace working content with placeholders.
