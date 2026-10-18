# CertCram Pro

**A reusable, local-first Fast-Track Certification Cram Hub — powered by a Next.js application and optional VS Code AI coding agents.**

> **Project status: EARLY COMMUNITY PREVIEW.** The application runs and several interactive activities are implemented, but the content is **not a complete exam preparation course**. The DOP-C02 bank currently contains repeated template-generated practice questions. AZ-104 is a **partial profile only**. Read [Current status](#current-status--known-limitations) and [Roadmap](docs/ROADMAP.md) before relying on it to study.

CertCram Pro is intended to provide **one learning application for multiple certifications**, with the same interface and interaction engines. You use the in-app selector to switch between **already installed** certification packages. For a **new** certification, a coding agent researches the official exam blueprint and authors a new, independently versioned content package in this repository. The static web app **cannot research or generate a new course on its own**.

**Disclaimer:** This independent, community-built project is not affiliated with or endorsed by Amazon Web Services, Microsoft, CNCF, HashiCorp, or any certification provider. Practice questions are original study aids, **not official exam questions or exam dumps**. Verify exam codes, dates, quotas, and requirements with the provider before booking an exam.

## Table of contents

- [What you get](#what-you-get)
- [Requirements](#requirements)
- [Quick start: run the application](#quick-start-run-the-application)
- [How to use the hub](#how-to-use-the-hub)
- [Use the VS Code AI agent](#use-the-vs-code-ai-agent)
- [Copy-and-paste agent prompts](#copy-and-paste-agent-prompts)
- [How dynamic certification switching works](#how-dynamic-certification-switching-works)
- [Test and validate](#test-and-validate)
- [Repository structure](#repository-structure)
- [What to commit and what to ignore](#what-to-commit-and-what-to-ignore)
- [Publish your own GitHub repository](#publish-your-own-github-repository)
- [Deploy the website](#deploy-the-website)
- [Current status and known limitations](#current-status--known-limitations)
- [Contributing, security, and license](#contributing-security-and-license)

## What you get

The repository includes **real application source**, reusable learning modules, a versioned certification registry, original starter content, browser-based speech synthesis, progress saved in your browser, content checks, automated tests, and a reusable **CertCram Builder** VS Code agent.

| Feature | Current state | Intended experience |
| --- | --- | --- |
| Dark, responsive dashboard and primary navigation | Implemented | Switch between Exam Blitz, Fast-Learn, Concept Guide, Full Quiz |
| Six-sprint cram roadmap | Checkboxes + local saving | Open linked lessons/activities and track actual mastery |
| Golden Triggers and Magic Numbers | Searchable starter cards | Larger, source-linked objective coverage |
| Decision Trees | Six single-level examples | Genuine multi-step branching, back/restart/outcome paths |
| Spot the Trap and Real vs. Fake | Basic interactive practice | Stronger attempt tracking, anti-farming rules and varied scenarios |
| 5-Second Speed Game | Basic timed quiz | Reliable timer lifecycle, streak scoring and accessibility |
| Head-to-Head Battles | Starter comparison UI | Navigate every comparison and test scenario decisions |
| Multi-Select Lab | Six groups / 36 **templated** records | Replace clones with original, well-explained exam-style questions |
| Code & CLI Drills | Six reordering exercises | Reorder, check and reason through real technical workflows |
| Teacher Rhymes | Ten mnemonic cards | Bookmark persistence and richer review scheduling |
| Super Teacher Voice Coach | Browser narration of short notes | Real lessons, accessible transcript and reliable playback states |
| Full Quiz | Six short questions | Timed, scored, reviewable exam simulation with results history |
| Certification selector | DOP-C02 starter; AZ-104 partial | Select fully authored independent exam packages |

**What this is not:** a verified full DOP-C02 question bank, a guaranteed exam pass, a paid exam-dump library, an AWS/Azure account manager, or a one-click autonomous content-generation backend.

## Requirements

| Tool | Requirement |
| --- | --- |
| **Node.js** | 20.9+ (use a current LTS release; Node 22 is used in CI) |
| **npm** | Bundled with Node.js; `npm ci` uses the committed lockfile |
| **Git** | Required for cloning and contributions, not for running a downloaded ZIP |
| **Browser** | Recent Chrome, Edge, Firefox or Safari; speech availability varies by browser/OS |
| **VS Code** | Optional for running; recommended for developing and adding certifications |
| **VS Code coding agent** | Optional. GitHub Copilot Agent Mode, Codex or another capable agent can read `AGENTS.md` and edit files. Access depends on your account and setup. |
| **Cloud account / API key** | **Not required** to run the present application locally |

Official installation links: [Node.js](https://nodejs.org/en/download), [VS Code](https://code.visualstudio.com/), [Git](https://git-scm.com/downloads).

## Quick start: run the application

### Option A: download ZIP

1. Download the source ZIP from the repository's **Code → Download ZIP** menu (or use the provided release ZIP).
2. Extract it and open a Terminal in the extracted folder, **where `package.json` is located**.
3. Install dependencies and start the server:

```bash
node --version
npm --version
npm ci
npm run dev
```

4. Open **http://localhost:3000** or the local URL printed by Next.js.
5. Stop the server with **Control+C** in the terminal.

If port 3000 is busy, run `npm run dev -- --port 3001` and open http://localhost:3001.

### Option B: clone with Git

```bash
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
npm ci
npm run dev
```

Replace `OWNER/REPOSITORY` with the actual GitHub repository path. If there is no published repository yet, use Option A.

### For macOS (including Apple Silicon M1/M2/M3/M4)

The commands above work in VS Code Terminal (Terminal → New Terminal). Install the **Apple Silicon** Node.js build when appropriate. See the [Mac quickstart](docs/quickstart-macos.md).

### For Windows

Use PowerShell, Windows Terminal, or WSL. The scripts are OS-independent; no macOS-only Chrome binary is required for Playwright.

### Production-style local check

```bash
npm run build
npm run start
```

These commands compile and serve a production build locally. The app does not automatically become public when you do this.

## How to use the hub

Open the local URL and select an installed certification from the top-right selector. The AWS DevOps Engineer Professional **DOP-C02 starter** has demonstrations for the learning modules. The AZ-104 profile is clearly labeled **partial** and does not yet have lessons and question banks.

Use the four main modes and horizontal activity tabs to explore the roadmap, quick-recall games, Golden Triggers, comparisons, scenario questions, sequence drills and memory aids. The Voice Coach uses your browser's speech synthesis where available and provides text fallback.

**Progress:** The current app stores selected certification, sprint completion, and some game scores in the browser's `localStorage`. This storage is local to the browser profile and origin (`localhost` vs hosted site). It is **not a synced account**, and clearing site data can delete it. Export/import and full attempt history are future work. Do not store secrets or sensitive personal information in freeform study notes.

## Use the VS Code AI agent

This repository includes three ways to guide a coding agent:

| File | Purpose |
| --- | --- |
| [`AGENTS.md`](AGENTS.md) | Canonical repository development and certification-generation instructions |
| [`.github/agents/certcram-builder.agent.md`](.github/agents/certcram-builder.agent.md) | Optional **CertCram Builder** custom agent for VS Code |
| [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | Copilot repository guidance |
| [`.github/prompts/`](.github/prompts/) | Reusable add-certification, repair-module and verification prompts |

**Steps:** Open the project folder in VS Code → open Chat → select **Agent** mode → choose **CertCram Builder** if it is available → paste one of the prompts below. If the custom agent does not appear, use the default coding agent and explicitly instruct it to read `AGENTS.md`. Give terminal/edit permissions only after reviewing the intended changes.

You don't need to upload the README or paste the entire `AGENTS.md` on every turn; the agent can read the files in the workspace. This repository is **already scaffolded**. Tell the agent to **extend**, not recreate, the Next.js application.

## Copy-and-paste agent prompts

### 1. Improve AWS DevOps Engineer Professional (DOP-C02)

```text
Read AGENTS.md, docs/CONTENT_STANDARDS.md, docs/FEATURES.md and docs/ROADMAP.md.
Repair and expand the EXISTING CertCram Pro app for AWS Certified DevOps Engineer – Professional (DOP-C02).
Verify the latest official AWS exam blueprint. Replace repetitive/template-generated multi-select questions
with individually written, objective-linked scenarios using at least five options where appropriate;
provide correct/incorrect rationales and official sources. Implement actual Fast-Learn lessons and
multi-step Decision Trees. Fix interaction bugs and preserve existing browser progress.
Do not redesign or re-scaffold the application. Add regression tests, run npm run verify,
run Playwright when available, and honestly report coverage and remaining gaps.
```

### 2. Add Microsoft Azure Administrator (AZ-104)

```text
Read AGENTS.md, docs/certification-lifecycle.md and docs/CONTENT_STANDARDS.md.
ADD Microsoft Azure Administrator Associate (AZ-104) to my EXISTING CertCram Pro app.
Verify the current official Microsoft study guide, exam skills, version and exam status.
Build an independently versioned AZ-104 content package with objective-aligned teaching,
original questions, Golden Triggers, comparison exercises and drills. Use the same shared UI.
Keep existing AWS progress and content untouched. Label any incomplete objectives PARTIAL.
Validate and test the installed package and certification switching; do not build a second app.
```

### 3. Switch back to an installed certification

```text
Select the already installed AWS DevOps Engineer – Professional (DOP-C02) package.
Do not regenerate or replace any content; preserve all saved progress.
```

For ordinary use, simply choose the certification **inside the app**; a coding agent isn't needed to switch an installed package.

### 4. Fix a broken game or feature

```text
Read AGENTS.md and docs/FEATURES.md. Inspect the existing 5-Second Speed Game.
Reproduce the bug, fix timer cleanup after answers/timeouts, prevent duplicate XP on retry,
write tests for correct/wrong/timeout/restart, and preserve the UI design.
Do not claim success unless the tests actually pass.
```

### 5. Verify before a GitHub release

```text
Read README.md, SECURITY.md, .gitignore, docs/GITHUB_PUBLISHING.md and docs/ROADMAP.md.
Check for third-party media, secrets, private data, outdated exam facts, generated build files,
and misleading completeness claims. Run npm run verify and npm run test:e2e when possible.
Report failures and do not push to GitHub without my explicit approval.
```

## How dynamic certification switching works

There are **two different actions**:

**SELECT:** Choose an installed exam profile in the UI. The existing application immediately loads that profile's current content; its saved progress is scoped to the profile key. No rebuild needed.

**ADD:** Tell a repository-aware coding agent to find official sources and author/test a new profile in `content/packages.ts` (or a future per-certification package directory) and register it in the selector. This **changes application code**, so rebuild or restart the app afterward. The current app **cannot autonomously fetch and author every certification from a plain dropdown**.

**UPDATE:** Refresh an installed profile against a changed exam blueprint and create an appropriately versioned package, preserving older progress. Exam codes and official requirements can change; do not infer current certification version from an old screenshot.

See [certification lifecycle](docs/certification-lifecycle.md) and [architecture](docs/ARCHITECTURE.md).

## Test and validate

```bash
# Once after cloning
npm ci

# Static type safety
npm run typecheck

# Validate basic structure of installed certification packages
npm run content:validate

# Run unit tests
npm test

# Compile a production build
npm run build

# Run all four checks above
npm run verify

# Install the Playwright-managed Chromium binary (first run)
npx playwright install chromium

# Run browser interaction tests
npm run test:e2e

# Check public-release hygiene
npm run repo:check
```

`npm run content:validate` currently checks **structure and minimum demo counts**, not the truth of all answers, completeness of domain coverage, or the quality of distractors. A passing build/test suite is **not proof of exam readiness**. The [Content Standards](docs/CONTENT_STANDARDS.md) and [Roadmap](docs/ROADMAP.md) describe required improvements. See [local verification notes](docs/TEST_RESULTS.md) for exactly what was checked while preparing this ZIP.

[GitHub Actions](.github/workflows/ci.yml) runs typecheck, content validation, unit tests, build and browser tests for pull requests and `main`. Dependabot checks npm and GitHub Actions dependencies weekly. A CI run can fail if a browser installation, source change or dependency is incompatible; read its logs rather than assuming an untested feature works.

## Repository structure

```text
certcram-pro/
├── app/                    # Next.js App Router application and styles
├── content/packages.ts     # Certification registry and starter content
├── scripts/                # Content validation and GitHub publication check
├── tests/                  # Vitest and Playwright tests
├── docs/                   # Setup, product design, content quality, roadmap
├── references/README.md   # Explains LOCAL-ONLY third-party reference media
├── .github/
│   ├── agents/             # Reusable VS Code custom agent
│   ├── prompts/            # Copyable task templates for coding agents
│   ├── workflows/          # Automated CI
│   └── dependabot.yml      # Dependency updates
├── .env.example            # Safe configuration template (no credentials)
├── .gitignore
├── AGENTS.md
├── README.md
├── CHANGELOG.md
├── .editorconfig / .nvmrc # Consistent development settings
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE
├── package.json
└── package-lock.json
```

**Important:** `content/packages.ts` is an early shared content file, not yet a mature plugin SDK. Moving to per-certification packages and stronger schemas is part of the roadmap.

## What to commit and what to ignore

The included [`.gitignore`](.gitignore) is GitHub-ready for **Next.js, TypeScript, Playwright, npm, VS Code, macOS, and local reference files**.

| Commit to GitHub | Keep out of GitHub |
| --- | --- |
| `app/`, `content/`, `tests/`, `scripts/` | `node_modules/`, `.next/`, build/output folders |
| `package.json` **and** `package-lock.json` | `.env`, `.env.local`, `.env.production` and real credentials |
| `README.md`, `AGENTS.md`, `docs/` | Personal progress exports, local browser data, backups |
| `.github/` agent prompts, workflows and templates | Original third-party screenshots, recorded video and keyframes |
| `.env.example` with placeholders only | `test-results/`, `playwright-report/`, `coverage/`, `*.tsbuildinfo` |
| `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md` | `*.pem`, `*.key`, `.DS_Store`, editor caches |

**Don't ignore `package-lock.json`** for this npm application: CI and collaborators need reproducible dependency resolution. **Don't ignore `AGENTS.md`** or `.github/agents/`: these are the public, shareable project instructions.

**Never commit the sample website's 20 third-party screenshots or recorded video unless you have permission to redistribute them.** In a private workspace you can place authorized images at `references/screenshots/` and video at `references/video/`; those paths are ignored. `docs/FEATURES.md` describes interaction goals without publishing the reference media.

Check before any public push:

```bash
git status --short
git diff --cached --name-only
git check-ignore -v .env.local references/video/example.mp4
npm run repo:check
```

**Note:** `.gitignore` prevents *new untracked* files from being staged. It does not remove files that were already committed. If you have previously tracked a secret or copyrighted image, stop and review [the publishing guide](docs/GITHUB_PUBLISHING.md); removing it from the latest commit does **not** remove it from repository history.

## Publish your own GitHub repository

This ZIP is a **source archive**, not a hosted GitHub repository. You must create the GitHub repository yourself.

1. Create an **empty public repository** on GitHub (don't add a second README, `.gitignore`, or license in its creation form; these files already exist).
2. Open a Terminal in this extracted project.
3. Review the staged files carefully. Then use:

```bash
git init
git branch -M main
git add README.md AGENTS.md .gitignore .env.example LICENSE SECURITY.md CONTRIBUTING.md CODE_OF_CONDUCT.md .github app content docs references/README.md scripts tests package.json package-lock.json playwright.config.ts next.config.ts next-env.d.ts tsconfig.json vitest.config.ts
# Inspect before committing; do not proceed if secret or third-party media is staged:
git status --short
git diff --cached --name-only
git commit -m "Initial public CertCram Pro community preview"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Replace `YOUR-USERNAME/YOUR-REPO`. GitHub may ask you to authenticate with a credential manager or GitHub CLI; do **not** paste tokens into code or shell history. If `git` is already initialized, skip initialization and examine your existing remote and history first.

Follow the [full publishing checklist](docs/GITHUB_PUBLISHING.md), including rights review, license choice, branch protection, and GitHub security settings.

## Deploy the website

**GitHub hosting the source code is different from hosting the live Next.js website.** The fastest deployment path for this project is a Next.js-compatible hosting provider (for example, Vercel) or a server configured to run a Next.js application. Connect your own GitHub repository using the host's approved interface, configure build settings, and review any costs and privacy implications before deploying.

GitHub Pages is **not configured** for this Next.js application. It would require a compatible static export configuration and testing first; do not assume `git push` will publish a working website on GitHub Pages.

For a local preview, `npm run dev` is sufficient. For a self-hosted production process, use `npm run build` and `npm run start` with your own reverse proxy, TLS, monitoring and security controls.

## Current status & known limitations

This project currently provides a **functional preview**, not a full certification product:

- **DOP-C02:** Official domain headings are recorded, but not all exam task statements have deep lessons/questions. Six short quiz questions and a **36-question repetitive Multi-Select demo bank** are present and require major quality work. This is **not exam-complete**.
- **AZ-104:** Partial registry entry to demonstrate switching; there is **no complete study pack**.
- **Learning modes:** Fast-Learn and Concept Guide need substantial lesson depth. Full Quiz is not an official-format simulator or scaled-score predictor.
- **Interactivity:** Some games have known timer, navigation, retry/scoring, and state persistence gaps; see [Roadmap](docs/ROADMAP.md).
- **Progress:** No cloud sync or import/export, and not all attempts/bookmarks are persisted.
- **Voice:** Browser speech synthesis reads short notes; it is not a conversational AI teacher.
- **Validation:** Structural validators and browser tests do not certify the correctness of every study question or service quota. Recheck source dates.
- **Accessibility and quality:** Additional keyboard/ARIA, mobile, cross-browser and security checks are needed.

The app is intentionally easy to run and improve. Contributions that **replace templated content with properly sourced originals and implement deeper learning interactions** are especially welcome.

## Contributing, security and license

- How to help: [CONTRIBUTING.md](CONTRIBUTING.md)
- Technical approach: [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Feature behaviors: [FEATURES.md](docs/FEATURES.md)
- Content authoring: [CONTENT_STANDARDS.md](docs/CONTENT_STANDARDS.md)
- Remaining work: [ROADMAP.md](docs/ROADMAP.md)
- Security reporting: [SECURITY.md](SECURITY.md)
- Community behavior: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- Software license: [MIT License](LICENSE)

**Before publishing under MIT**, confirm you have the rights to license the application code and any contributions. The MIT license covers this repository's original code and documentation, **not third-party websites, screenshots, recordings, exam guides, brand names, or proprietary question banks**. You can choose another license before making the repository public if that is more appropriate.

If this project helps you study, please open issues with reproducible bugs and official-source-backed corrections. Accuracy beats artificial question counts.
