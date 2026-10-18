import { describe, expect, test } from "vitest";
import { packages } from "../content/packages";

describe("certification package invariants", () => {
  test("DOP roadmap duration is derived from its six sprint records", () => {
    const dop = packages["aws-dop-c02"];
    expect(dop.sprints).toHaveLength(6);
    expect(dop.sprints.reduce((total, sprint) => total + sprint.minutes, 0)).toBe(240);
  });

  test("DOP multi-select groups are independent and non-empty", () => {
    const dop = packages["aws-dop-c02"];
    const groups = new Set(dop.multi.map((question) => question.group));
    expect(groups).toEqual(new Set(["Exam 1", "Exam 2", "Exam 3", "Exam 4", "Exam 5", "Exam 6"]));
    expect(dop.multi).toHaveLength(36);
  });

  test("the stale SQS screenshot value is not in the installed package", () => {
    const dop = packages["aws-dop-c02"];
    const sqs = dop.numbers.find((fact) => fact.category === "SQS" && fact.title === "Maximum message size");
    expect(sqs?.value).toBe("1 MiB");
    expect(sqs?.sourceURL).toContain("SendMessage");
  });
});
