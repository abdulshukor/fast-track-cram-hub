import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("secondary tabs replace only the lower panel and expose real content", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Fast-Track Cram Hub" })).toBeVisible();
  await page.getByRole("button", { name: /Golden Triggers/ }).click();
  await expect(page.getByText("Golden Triggers").last()).toBeVisible();
  await expect(page.getByText("Super Teacher Voice Coach")).toBeVisible();
  await expect(page.getByText("Cram Master Roadmap")).toBeVisible();
  await expect(page.getByText("6 of 6 linked records")).toBeVisible();
});

test("roadmap has six persistent sprints with computed four-hour duration", async ({ page }) => {
  await expect(page.getByText("4h 0m Cram Master Roadmap")).toBeVisible();
  await expect(page.getByRole("checkbox", { name: /Sprint 6/ })).toBeVisible();
  await page.getByRole("checkbox", { name: /Sprint 1/ }).check();
  await expect(page.getByText("17% Complete · 40m / 240m")).toBeVisible();
  await page.reload();
  await expect(page.getByRole("checkbox", { name: /Sprint 1/ })).toBeChecked();
});

test("decision trees branch to an outcome and restart", async ({ page }) => {
  await page.getByRole("button", { name: /Decision Trees/ }).click();
  await expect(page.getByText("6 branching scenarios")).toBeVisible();
  await page.getByRole("button", { name: /2\. Protect a CI\/CD secret/ }).click();
  await page.getByRole("button", { name: "Runtime retrieval" }).click();
  await expect(page.getByText("Outcome: Secrets Manager with a scoped role.", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Restart tree" }).click();
  await expect(page.getByText("Selection ready.")).not.toBeVisible();
});

test("multi-select has six groups and exact-set grading", async ({ page }) => {
  await page.getByRole("button", { name: /Multi-Select Lab/ }).click();
  await expect(page.getByText("Showing 36 questions")).toBeVisible();
  for (const group of ["Exam 1", "Exam 2", "Exam 3", "Exam 4", "Exam 5", "Exam 6"]) await expect(page.getByRole("button", { name: group, exact: true })).toBeVisible();
  await page.getByRole("button", { name: "A. Use an explicit progressive delivery policy and scoped role" }).click();
  await page.getByRole("button", { name: /Record a source-linked outcome/ }).click();
  await page.getByRole("button", { name: "Submit answer" }).click();
  await expect(page.getByText("Correct selection.")).toBeVisible();
});

test("sequence exercise can be reset and graded", async ({ page }) => {
  await page.getByRole("button", { name: /Code & CLI Drills/ }).click();
  await page.getByRole("button", { name: "Check order" }).click();
  await expect(page.getByText("Not yet")).toBeVisible();
  await page.locator("#module").getByRole("button", { name: "Reset" }).click();
  await expect(page.getByText("Not yet")).not.toBeVisible();
});

test("real versus fake accepts keyboard shortcuts and advances", async ({ page }) => {
  await page.getByRole("button", { name: /Real vs Fake/ }).click();
  await expect(page.getByText(/Card 1 of \d+/)).toBeVisible();
  await page.keyboard.press("r");
  await expect(page.getByText("Correct.")).toBeVisible();
  await page.keyboard.press(" ");
  await expect(page.getByText(/Card 2 of \d+/)).toBeVisible();
});

test("trap challenge hides rationale until submit and supports retry", async ({ page }) => {
  await page.getByRole("button", { name: /Spot the Trap Lab/ }).click();
  await page.getByRole("checkbox", { name: "Learn mode" }).uncheck();
  await page.getByRole("button", { name: /A\. Call KMS Encrypt/ }).click();
  await expect(page.getByText("Direct KMS Encrypt is limited to small payloads.")).not.toBeVisible();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Direct KMS Encrypt is limited to small payloads.")).toBeVisible();
  await page.getByRole("button", { name: "Retry" }).click();
  await expect(page.getByText("Selection ready.")).not.toBeVisible();
});

test("quiz keeps feedback hidden until submit and filters numeric facts", async ({ page }) => {
  await page.getByRole("button", { name: "📝 Full Quiz" }).click();
  await page.getByRole("button", { name: /CodeDeploy alarm-based deployment/ }).click();
  await expect(page.getByText("Deployment alarms turn an observed risk")).not.toBeVisible();
  await page.getByRole("button", { name: "Submit answer" }).click();
  await expect(page.getByText("Deployment alarms turn an observed risk")).toBeVisible();
  await page.getByRole("button", { name: "🔢 Magic Numbers" }).click();
  await page.getByPlaceholder("Search limit or service...").fill("SQS");
  await expect(page.getByText("1 MiB", { exact: true })).toBeVisible();
  await expect(page.getByText("4 KB", { exact: true })).not.toBeVisible();
});

test("rhymes bookmark and speed timeout are stateful controls", async ({ page }) => {
  await page.getByRole("button", { name: /Teacher Rhymes/ }).click();
  await page.getByRole("button", { name: "☆ Review later" }).first().click();
  await expect(page.getByText(/1 bookmarked/)).toBeVisible();
  await page.getByRole("button", { name: "🎮 5-Sec Speed Game" }).click();
  await page.waitForTimeout(5_300);
  await expect(page.getByText(/TIMER UP/)).toBeVisible();
});
