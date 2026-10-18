# Implementation status — public community preview

Updated: 2026-10-15. This describes the state of the uploaded application plus GitHub packaging improvements, **not** a claim of full exam coverage or completion. CI results can change after dependency updates.

## What is present

- Next.js 15.x + React + TypeScript App Router application.
- Desktop/mobile dark-themed dashboard and navigable learning module tabs.
- Source-linked DOP-C02 *starter* profile (six domain headings), and an explicitly partial AZ-104 profile.
- Data-driven Golden Triggers and numeric fact cards; several functioning exercises and short quizzes.
- Local browser persistence for selected certification, sprint checkboxes, XP and high score.
- Browser speech synthesis, with a transcript shown in the UI.
- Structural content validator, Vitest unit tests and Playwright browser tests.
- GitHub CI, Dependabot, public-repository hygiene checks, documentation, and reusable VS Code custom agent/prompt files.
- Public archive intentionally excludes sample website's original images and video.

## Known not complete

- DOP-C02 is **not an exam-complete course**: Fast-Learn and Concept Guide need substantive lessons. The 36 Multi-Select prompts share a templated pattern and fail semantic question-quality review despite structure checks passing.
- AZ-104 has no full study bank; adding a certification still requires a coding agent to research/author/register a package.
- Multi-step decision trees, Head-to-Head navigation, roadmap lesson links, timer/XP hardening, bookmark persistence, question attempt history, and full exam simulation are still open work.
- Per-blueprint-objective coverage, dynamic updates, content freshness review and robust data import/export are not finished.
- The present unit/e2e tests cover a subset of interactions; passing them is not proof of educational accuracy.

## Local test results for this GitHub edition

See the release notes or `docs/TEST_RESULTS.md` when populated by the packager or CI. Never copy prior reports as if they represent a run of this version.

## Next steps

Follow the prioritized [ROADMAP](ROADMAP.md) and the behaviors in [FEATURES](FEATURES.md). Avoid broad UI rewrites; fix one module and its data quality at a time with regression tests.
