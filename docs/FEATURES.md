# Functional specification (public)

This document is independent of any particular third-party screenshot or video. It specifies **observable behavior** the application should have. A screenshot-quality look without working interactions is not sufficient.

## Platform-level requirements

- Same app shell, navigation and reusable learning engines for all certification packages.
- Certification selection changes content and restores independently saved progress, without mixing exam-specific data.
- Each active exam is clearly labeled `partial` or `validated` according to *actual* coverage. Uninstalled exams are not simulated with placeholder content.
- Every action button must do something testable; always show loading, disabled, feedback and empty states when appropriate.
- Mobile and keyboard use: visible focus, minimum target sizes, correct checkbox and keyboard behavior, timer accessibility.
- UI may use a compact dark navy/amber theme by default. Colors can be changed; actual functionality matters more.

## Required learning modules and meaningful acceptance criteria

| Module | Acceptance criteria |
| --- | --- |
| **Cram Master Roadmap** | Six or more certification-specific timed sprints (where relevant). Durations computed from data; each sprint opens a linked lesson/activity **without toggling the checkbox**. Checkbox completion and reset persist per version. |
| **Exam Blitz** | High-yield interactive questions/scenarios; answer, explanation, retry, next, mark-for-review and transparent scoring. |
| **Fast-Learn Engine** | Real objective-linked chapters containing explanation, comparison, real-world example, common trap, source links, and a short knowledge check. |
| **Concept Guide** | Browse/search technology decisions by exam objective; content distinct from Fast-Learn; cross-links to lessons and external official docs. |
| **Full Quiz / Exam Simulator** | Timed/untimed sessions, independent question order, grading after submit, review, progress report and clearly distinguished practice vs official scoring. |
| **Golden Triggers** | Search and category filters; each card identifies the scenario, recognition, distractor, why, objective and sources. |
| **Decision Trees** | At least two decision levels in substantive exercises; Back, Restart, Next, correct explanation and source. Selection of next tree resets stale choice. |
| **5-Second Speed Game** | Five-second timer, 4 answer choices, XP/streak/high score, correct/wrong/timeout feedback, Retry, Next, No-timer. Stop timer immediately after a decision; no repeated XP farming for same item. |
| **Spot the Trap** | Learn mode can show rationales; challenge mode hides them until Submit. Selection/Retry/Next and right/wrong feedback always work. |
| **Real vs. Fake** | Binary real/fake fact challenges with R/F shortcuts, Space Next, XP and explanation; no accidentally marking repeated answers as new mastery. |
| **Head-to-Head Battles** | Navigate *every* comparison, two labeled columns, evidence-based memory rule and scenario check. |
| **Multi-Select Lab** | Six exam-group filters where relevant, scenario-aligned questions (not clones), stated answer count, enforce valid selections, exact-set grading, explanations for every option. Where mirroring AWS DOP-C02 exam multiple response, use 5+ options. |
| **Code & CLI Drills** | Choose exercise, reorder steps, Check, Reset, reveal reasoning and source; verify several workflows rather than just displaying code. |
| **Magic Numbers** | Search/filter, service/scope, actual limit vs default, official source and verification date. No unsupported or stale values. |
| **Teacher Rhymes** | Meaningful concise mnemonic with limitations, review later/bookmark that persists beyond tab changes. |
| **Voice Coach** | Choose lesson, play/pause/stop/next/previous, speed control and readable transcript. Fallback if speech synthesis unsupported. Avoid pretending short narration is conversational tutoring. |

## Acceptance tests

1. For each module, complete at least one happy path and one incorrect/error path in a real browser.
2. Reload and switch certifications; verify state isolation.
3. Attempt too few or too many multi-select choices and check response behavior.
4. Verify timed exercise stops when a user submits, and works without a timer.
5. Navigate to first, middle and last cards of each collection (not just `array[0]`).
6. Run `npm run verify`, `npm run test:e2e`, and inspect the browser console for errors.
7. Compare validated question content against official exam objective sources. Passing tests alone does not validate accuracy.

## Reference media

If maintainers have authorized local screenshots/recording, put them under ignored `references/screenshots/` and `references/video/`. The public GitHub repo intentionally does not distribute the original sample site's media.
