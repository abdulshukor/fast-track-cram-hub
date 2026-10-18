# macOS + VS Code quickstart (Apple Silicon and Intel)

This ZIP **already contains a Next.js app** (`app/`, `content/`, `package.json`). You don't need to scaffold a new project.

1. Install [Node.js](https://nodejs.org/en/download) LTS (20.9+), [VS Code](https://code.visualstudio.com/), and optionally Git.
2. Extract the ZIP, open VS Code → **File → Open Folder** → select the folder containing `package.json`.
3. Choose **Terminal → New Terminal** and run:

```bash
node --version
npm --version
npm ci
npm run dev
```

4. Open http://localhost:3000 (or the port printed in the terminal). Control+C stops the server.
5. To run tests:

```bash
npm run verify
npx playwright install chromium
npm run test:e2e
```

6. To improve functionality or add a new exam in VS Code, open Chat → Agent → **CertCram Builder** (if available) or default Agent; ask it to read `AGENTS.md` and paste an example prompt from the [README](../README.md#copy-and-paste-agent-prompts).

7. The `references/` folder may contain your locally supplied authorized screenshots or video, but original third-party reference media must **not** be committed to a public repository. Use `docs/FEATURES.md` as the public interaction guide.

For a GitHub release, read `docs/GITHUB_PUBLISHING.md` before running `git add`/`git push`.
