# Known gaps and implementation roadmap

**These are confirmed or plausible limitations in the supplied early-stage code, not promises of completed functionality.** Keep this document up to date when tests prove issues fixed.

## P0: functionality and content integrity

- [ ] **Multi-Select quality:** replace all 36 repetitive generated questions with independent original, source-linked exam-style items. Use 5+ options for AWS DOP-C02 multi-response practice. Distribute answer indices; explain every choice. Avoid chasing artificial counts.
- [ ] **Head-to-Head navigation:** currently the component renders only the first comparison; expose all comparison records and test first/middle/last.
- [ ] **5-Second timer lifecycle:** guarantee the timer stops immediately on answer; timeout must never overwrite a graded answer. Prevent XP farming through retry.
- [ ] **Roadmap navigation:** sprint checkbox is not a lesson link. Add Open Sprint and route to the associated learning mode; fix `"quiz" as ModuleId` misuse.
- [ ] **Decision Trees:** replace shallow one-choice screens with genuine multi-step branching, Back/Restart/Next, and reset selection on scenario change.
- [ ] **Real Full Quiz:** timed session, flagging, submission gating, score report, explanation review, attempt persistence; clearly not official scoring.
- [ ] **Fast-Learn and Concept Guide:** replace generic domain summaries with substantial objective-linked lessons and searchable decision support.

## P1: user progress and experience

- [ ] Persist bookmarks, per-question attempts, weak areas, mastery, study streak, version-scoped progress and review history.
- [ ] Export/import browser progress (clearing localStorage currently destroys progress).
- [ ] Reset module-specific UI state on certification switches. Verify switching DOP↔AZ does not contaminate state.
- [ ] Validate all keyboard shortcuts and accessibility; support reduced motion and no-timer mode.
- [ ] Improve voice lesson depth and fallback availability; clearly differentiate browser TTS from conversational AI.
- [ ] Split `app/page.tsx` into named components and extract cert content from monolithic `content/packages.ts`.

## P2: quality assurance and distribution

- [ ] Add strict schema validation and semantic checks for duplicate questions and answer bias.
- [ ] Add tests for wrong answer/timeouts, all cards, browser reload, malformed stored JSON, cross-cert data isolation and source metadata.
- [ ] Expand actual DOP-C02 task-statement coverage and validate changing service limits.
- [ ] Complete AZ-104 from official study guide or remove its selectable partial preview.
- [ ] Add a supported lint/format toolchain and CI step; no lint script currently exists.
- [ ] Consider static-hosting support only after testing the required Next.js behavior.
- [ ] Introduce per-certification package versioning with migration rules and validated data import/export.

## Current demo inventory (do not confuse with exam coverage)

DOP-C02 starter: 6 Golden Triggers, 6 numerical facts, 10 rhyme cards, 6 short single-answer quiz items, 36 **templated** multi-select questions (six groups), 6 traps, 22 Real/Fake claims, 6 comparison records (not all navigable), 6 sequence drills, 6 speed cards, 6 shallow trees, 6 sprint records. AZ-104: three high-level domain seeds, no study bank.

Before claiming any item complete: implement behavior, run tests in a real browser, inspect content quality, and update the status honestly.
