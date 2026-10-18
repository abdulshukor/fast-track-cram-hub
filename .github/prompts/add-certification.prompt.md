---
description: Research, author and install a new exam package in the existing CertCram Pro app.
argument-hint: "Certification provider, name or exam code; optionally your test date"
---

Read `AGENTS.md`, `docs/CONTENT_STANDARDS.md`, `docs/certification-lifecycle.md`, and `content/packages.ts`.

Add the certification requested in the user message to the CURRENT app; do not scaffold another app.

- Verify the official exam guide, current exam code, version, retirement status, domains and task statements. Cite official source URLs and checked dates in content.
- If the request is ambiguous across exam versions, ask for the exam date.
- Create original lessons, questions, scenarios, drills, numeric facts only where applicable, and source references. Start with a fully validated domain and label the package partial until sufficient coverage exists.
- Avoid repetitive generated distractors, constant answer-index patterns and fabricated technical limits.
- Register the package with a distinct versioned ID, without overwriting existing profiles or local progress.
- Run content validation, typecheck, unit tests, build and appropriate Playwright tests. Report observed results and remaining missing objectives.
