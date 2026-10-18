# GitHub publication and release checklist

## Before the very first public push

- [ ] Confirm you have permission to publish and license the code. This archive includes an MIT license with a generic contributor copyright line. Review/change it if needed.
- [ ] Verify there are NO vendor-proprietary images, third-party reference screenshots/videos/keyframes, copied paid practice questions or unauthorized course material in the repository.
- [ ] Keep `references/screenshots/`, `references/video/`, `references/private/` LOCAL and ignored. Share only public text-based functional requirements (`docs/FEATURES.md`).
- [ ] Never commit `.env.local`, service accounts, API tokens, keys, OAuth secrets or personal study history. Use `.env.example` for placeholders.
- [ ] Validate actual app behavior; do not imply exam completeness while the demo bank contains templated questions.
- [ ] Inspect `.gitignore`, `git status --short`, and staged diff. `npm run repo:check` is a helper, not a complete secret scanner.
- [ ] Run `npm ci`, `npm run verify`, `npx playwright install chromium`, `npm run test:e2e` on your machine when available.

## Suggested first push

Create an **empty** GitHub repository. From the project directory:

```bash
git init
git branch -M main
git add README.md AGENTS.md .gitignore .env.example LICENSE SECURITY.md CONTRIBUTING.md CODE_OF_CONDUCT.md .github app content docs references/README.md scripts tests package.json package-lock.json playwright.config.ts next.config.ts next-env.d.ts tsconfig.json vitest.config.ts
git status --short
git diff --cached --name-only
# Verify there are no secrets/media/unwanted files before continuing
git commit -m "Initial CertCram Pro community preview"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

If the repository already exists or files were committed before, do not blindly initialize again. Investigate `git remote -v`, `git log --oneline -5`, and tracked sensitive files. Ignoring a file **does not erase it from old commits**.

## Recommended GitHub settings

- Add a truthful description and topics (`nextjs`, `typescript`, `certification`, `devops`, `study-tools`, `open-source`).
- Default branch `main`, enable protection/rulesets and require passing CI plus PR review when collaborating.
- Enable Dependabot alerts and security updates, code/secret scanning and push protection where available.
- Enable **private vulnerability reporting** under Security if eligible.
- Add issue/PR templates, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT and MIT LICENSE (included).
- Keep an honest README status notice; record breaking changes and exam version changes in release notes.
- For deployments, use a supported Next.js provider or self-host. GitHub Pages is not configured in this repo.

## If a secret was ever pushed

Treat it as compromised. **Revoke/rotate the secret immediately**, investigate exposure, then use GitHub's official history-rewrite guidance for removal. Merely deleting it in a new commit or adding `.gitignore` is not sufficient.

See [GitHub: removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

## Rights and attribution

This repository's MIT license is intended for its original application code and documentation only. **AWS, Microsoft, CNCF, and other certification names are trademarks of their owners.** Public URLs to official exam guides are references, not grants of rights to redistribute exam content. Do not copy the source reference website or its recorded media into this repository without permission.
