#!/usr/bin/env node
/** Guard against publishing common accidental artifacts and credentials.
 * This complements (does not replace) GitHub secret scanning and human review.
 */
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
const rootAbs = (rel) => path.join(root, rel);
const skipped = new Set([".git", "node_modules", ".next", "dist", "build", "out", "coverage", "test-results", "playwright-report", ".vercel", ".turbo"]);
const ignoredLocal = ["references/screenshots/", "references/video/", "references/workspace/", "references/private/", "references/keyframes/"];

function walk(dir, prefix = "") {
  const output = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${item.name}` : item.name;
    if (item.isDirectory()) {
      if (skipped.has(item.name) || ignoredLocal.some((p) => rel === p.slice(0, -1) || rel.startsWith(p))) continue;
      output.push(...walk(path.join(dir, item.name), rel));
    } else if (item.isFile()) output.push(rel);
  }
  return output;
}

const git = spawnSync("git", ["ls-files", "--cached", "-z"], { cwd: root, encoding: "utf8" });
const usesGit = git.status === 0 && git.stdout.trim().length > 0;
const files = usesGit ? git.stdout.split("\0").filter(Boolean) : walk(root);
const problems = [];
const shouldIgnore = (rel) => rel === ".env.example" || /^\.env\..*\.example$/.test(rel);
const forbidden = (rel) => {
  if (/^references\/(screenshots|video|workspace|private|keyframes)\//.test(rel)) return "third-party reference media";
  if (rel === "references/contact-sheet.jpg") return "third-party screenshot contact sheet";
  if (/(^|\/)\.env(\.|$)/.test(rel) && !shouldIgnore(rel)) return "environment secrets file";
  if (/(^|\/)(credentials\.json|service-account[^/]*\.json)$/.test(rel)) return "credential file";
  if (/\.(pem|pfx|p12|key)$/i.test(rel)) return "potential private key";
  if (/(^|\/)(node_modules|\.next|test-results|playwright-report)\//.test(rel)) return "generated/dependency artifact";
  if (/\.tsbuildinfo$/.test(rel)) return "TypeScript cache";
  return null;
};

for (const rel of files) {
  const reason = forbidden(rel);
  if (reason) problems.push(`${rel}: ${reason}`);
  // Heuristic only: avoid opening binary/media and very large files.
  if (!/\.(md|txt|json|js|cjs|mjs|ts|tsx|yml|yaml|env)$/i.test(rel)) continue;
  const filename = rootAbs(rel);
  if (!fs.existsSync(filename) || fs.statSync(filename).size > 1024 * 1024) continue;
  const body = fs.readFileSync(filename, "utf8");
  if (/AKIA[0-9A-Z]{16}\b/.test(body)) problems.push(`${rel}: possible AWS key ID`);
  if (/ghp_[A-Za-z0-9]{36}\b/.test(body)) problems.push(`${rel}: possible GitHub token`);
  if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(body)) problems.push(`${rel}: private key block`);
}

if (problems.length) {
  console.error(`Public repo check failed (${problems.length} issue(s)):\n${problems.join("\n")}`);
  process.exit(1);
}
console.log(`Public repo basic hygiene check passed for ${files.length} ${usesGit ? "tracked" : "project"} files.`);
console.log("This is NOT a complete secret/license scan. Review staged changes before pushing.");
