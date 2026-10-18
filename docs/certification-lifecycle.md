# Certification lifecycle: SELECT, ADD, UPDATE, ARCHIVE

The application has **one reusable UI** and a static registry of versioned exam packages (`content/packages.ts`). New exams are authored through repository changes; a local browser cannot research the web and create new source files on its own.

## SELECT: existing exam

- Choose the installed certification profile in the top-right selector.
- Display that package's actual subject-specific content. Never silently fill AZ/CKA empty states with AWS facts.
- Preserve the selected profile's local progress. Current storage saves only some progress; the rest is on the roadmap.
- Switching back to a previously studied exam should not regenerate it or destroy saved data.

## ADD: certification not yet present

- Example: `Add Microsoft Azure Administrator (AZ-104) to this app; read AGENTS.md and docs/CONTENT_STANDARDS.md first.`
- Check the official guide, current exam code, version and retirement info. If versions overlap, ask the user's intended exam date.
- Register the new profile without re-scaffolding the UI.
- Build original, source-linked, objective-mapped lessons, quizzes, drills, games and sprints in validated batches. Use `partial` until actual coverage supports further claims.
- Create tests proving that the new certification uses different content, persists progress independently, and that existing profiles still work.
- Rebuild or restart after changing the bundled content package.

## UPDATE: changed official blueprint

- Re-check exam sources and timestamps; replace obsolete numeric facts, tasks and answers.
- Create a new versioned profile when the blueprint changes materially; archive old content without silently transferring mastery.
- Keep explicit verified/unverified/retired states as the data model evolves.

## ARCHIVE: retired certification

Preserve existing progress and the retired profile where appropriate, mark it as out of date, and avoid representing it as a current exam. Offer an alternative only when officially confirmed.

## Current limitations

- The registry is a single TypeScript file rather than a content package SDK.
- Progress keys are certification-ID-based, not yet all keyed by a full exam blueprint version.
- Export/import, authenticated users and automatic generation backends are not implemented.

See [ARCHITECTURE](ARCHITECTURE.md) and [ROADMAP](ROADMAP.md).
