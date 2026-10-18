# Architecture and data model

## Current implementation

- `app/page.tsx`: client-side UI, routing between four modes and ten activities, state handlers. This is presently a single large component file and needs modularization.
- `app/globals.css`: shared dark-theme and responsive styles.
- `content/packages.ts`: typed certification profiles, DOP-C02 starter content and an empty/partial AZ-104 seed. The registry is static and bundled at build time.
- `scripts/validate-content.ts`: basic structural checks. It **does not** certify technical correctness, content originality, or full exam-blueprint coverage.
- `tests/content.test.ts`: content/roadmap invariants; `tests/parity.spec.ts`: representative browser interaction tests.
- Browser `localStorage`: current active profile and limited progress (sprints, XP, high scores). Do not assume every activity is persisted.
- `VoiceCoach`: `window.speechSynthesis` in supported browsers; no external voice API is used.

## Intended boundaries (future refactor)

```text
Certification registry / versioned profiles
       ↓
Strict content schema + official source metadata
       ↓
Reusable React modules (quiz, sprint, comparison, games, coach)
       ↓
Progress adapter keyed by profile ID + blueprint version
       ↓
Local storage now; optional user-approved export/sync later
```

Adding a certification **should only add validated exam content and registry data**, not a new frontend. But today a developer/agent must edit the code and rebuild the app; there is no autonomous browser-based generator.

### Profile data

Current `CertificationPackage` includes `id`, `provider`, `name`, `code`, `version`, `status`, source links and arrays of objectives, prompts, questions, numbers, drills and sprints. Public contributors should avoid adding AWS-specific conditionals in UI modules; create data-driven adapters instead.

### Independent study progress

Eventually namespace progress by a stable provider+exam code+blueprint version, plus profile/account identifier if user accounts are ever added. Do not merge historical results across version changes automatically. Current persistence is incomplete; see ROADMAP.

### API keys and server functionality

The current project does not need an API key or AWS/Azure account. Do not add client-side secrets. Optional AI generation/research integrations would require explicit configuration, rate limiting, privacy review, user consent, and a server-side trust boundary before they could be described as "generate any certification in one click".

## Testing

- **Vitest** for unit/content invariants.
- **Playwright** for browser interactions with Playwright-managed Chromium; the config is cross-platform.
- **TypeScript** strict checking and Next production build.
- **GitHub Actions** validates code and runs browser tests after each PR.

See `docs/FEATURES.md` for acceptance behaviors and `docs/ROADMAP.md` for known deficiencies.
