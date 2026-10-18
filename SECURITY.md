# Security policy

## Supported branch

Security fixes target the latest `main` branch while this project is in early development. There is no long-term support commitment for old releases.

## Report a vulnerability privately

Do **not** post exploit details, tokens, private account information, or sensitive logs in public issues.

If the repository owner has enabled **GitHub private vulnerability reporting**, use **Security → Report a vulnerability** on the GitHub repository. Otherwise contact the repository maintainers through a private channel listed on the repository profile. If neither is available, open a public issue requesting a private contact method, **without security details**.

## Secrets and local study data

- The current app has no server-side user accounts, cloud connection or required API keys.
- Study progress is stored in your own browser's `localStorage`; it is **not encrypted**. Do not use shared-browser profiles for sensitive notes. Clearing site data removes it unless you maintain a separate backup.
- `.env*` and credentials are ignored by Git, except intentionally safe `.env.example` files. Never put credentials in `NEXT_PUBLIC_*`: those variables are sent to browsers.
- Review staged files and use GitHub secret scanning/push protection before publishing.
- Do not commit privately obtained practice exams, question banks, other people's screenshots or video.
- A third-party AI agent and optional plugins may process material you send them; review their privacy terms and permissions before connecting accounts.

## Dependency security

Use `npm ci`, review Dependabot pull requests and security advisories, and test before applying major upgrades. When publishing, enable GitHub's dependency graph, Dependabot alerts and secret scanning where available.
