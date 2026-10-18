# Certification content standards

## Nonnegotiable principles

**Do not copy leaked exam questions, paid course material, proprietary answer keys, or copyrighted reference-website content.** All learning exercises should be original. Cite provider documentation using a URL and a verification date.

## Before authoring a package

1. Resolve full certification name, issuing organization, exam code and blueprint version.
2. Check whether the exam is available, retiring, or replaced. If two versions overlap, ask the user's expected test date.
3. Read the official exam guide (not just a blog summary). Record every weighted domain and task statement.
4. Identify official technologies and links, and document the date checked.
5. Build an objective-by-objective coverage matrix. Flag uncovered items explicitly.
6. Design learning materials to match the certification's actual response format and difficulty.

## Question-level quality gate

Every scored question should have:

- Unique stable ID, exam version, domain ID and official objective/task statement ID.
- Original scenario with a clear, technically justified answer and necessary constraints.
- Plausible but objectively incorrect alternatives; explain **every option**, not only the correct answer.
- An authoritative source URL and verification date. Mark uncertain claims for review; do not put unverified questions into scored simulations.
- Vary correct-answer positions. **Do not create a bank with every answer always A+B.** Repeated options, paraphrase-clone prompts or a common generic answer set fail quality review.
- For AWS DOP-C02-style multiple-response simulation, the official guide specifies **two or more correct responses among at least five options**. The current 36-item four-option generated seed is a known defect to replace.
- A human or independent technical reviewer should verify complex tradeoffs and changing quotas.

## Numeric facts / cheatsheets

Distinguish a documented `default`, a `maximum`, an account-adjustable `quota`, and an editorial `heuristic`. Supply service/operation, scope, conditions and official source. Review values on exam blueprint or API changes. Never carry an old screenshot number into a new exam package without verification.

## Lesson-level depth

For each objective, produce: what, why, prerequisites, how, when to use/not use, a real implementation example, decision criteria, common misconceptions, recall question and source links. A short six-domain overview is not an adequate Fast-Learn course.

## Coverage and readiness

Compute coverage from actual objectives linked to complete lessons/practice, **not** simply from six domains or an item count. Completion is not mastery. Do not represent the current starter as a full course or an official exam simulator. Use `partial` or `unverified` states while significant content is missing.

## Validation

`npm run content:validate` currently verifies only basic **structure** and presence. It does not enforce all the quality gates above. Add semantic/duplicate detection tests and objective coverage checks before marking a package validated.

Useful official guides:

- [AWS DOP-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)
- [Microsoft AZ-104 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104)

These may change; recheck at implementation time.
