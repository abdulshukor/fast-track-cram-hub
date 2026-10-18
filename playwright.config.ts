import { defineConfig, devices } from "@playwright/test";

// Use Playwright's managed Chromium instead of a hardcoded macOS Chrome path.
// Works on macOS, Windows, Linux, and GitHub Actions after installing browsers.
export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  timeout: 20_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  use: { baseURL: "http://127.0.0.1:3000", headless: true, ...devices["Desktop Chrome"] },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 90_000,
  },
});
