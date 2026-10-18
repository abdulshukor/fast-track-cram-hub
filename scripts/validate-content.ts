import { packages } from "../content/packages";

const failures: string[] = [];
for (const pkg of Object.values(packages)) {
  if (!pkg.id || !pkg.code || !pkg.version || !pkg.guideURL) failures.push(`${pkg.id}: missing manifest identity`);
  for (const objective of pkg.objectives) if (!objective.id || !objective.label || objective.weight <= 0) failures.push(`${pkg.id}: malformed objective`);
  for (const item of pkg.triggers) if (!item.id || !item.scenario || !item.answer || !item.trap || !item.objectiveId) failures.push(`${pkg.id}: malformed trigger`);
  for (const item of pkg.numbers) if (!item.sourceURL || !item.verifiedAt || !item.scope || !item.defaultVsLimit) failures.push(`${pkg.id}: malformed numeric fact ${item.id}`);
  for (const item of [...pkg.questions, ...pkg.multi]) if (!item.id || !item.prompt) failures.push(`${pkg.id}: malformed question`);
  for (const item of pkg.decisionTrees) if (!item.id || !item.title || !item.question || item.choices.length < 2 || !item.sourceURL) failures.push(`${pkg.id}: malformed decision tree ${item.id}`);
  for (const item of pkg.sequences) if (!item.id || !item.title || item.steps.length < 3) failures.push(`${pkg.id}: malformed sequence ${item.id}`);
  for (const item of pkg.multi) if (item.answerCount < 1 || item.answers.length !== item.answerCount || item.options.length !== item.rationales.length) failures.push(`${pkg.id}: malformed multi-select ${item.id}`);
}
const dop = packages["aws-dop-c02"];
if (dop.realFake.length < 20) failures.push("aws-dop-c02: Real/Fake quality gate requires 20 records");
if (dop.rhymes.length < 10) failures.push("aws-dop-c02: rhyme quality gate requires 10 records");
if (dop.questions.length < 6) failures.push("aws-dop-c02: Full Quiz quality gate requires 6 records");
if (dop.traps.length < 6) failures.push("aws-dop-c02: trap quality gate requires 6 records");
if (dop.decisionTrees.length < 6) failures.push("aws-dop-c02: decision-tree quality gate requires 6 records");
if (dop.sequences.length < 6) failures.push("aws-dop-c02: sequence quality gate requires 6 records");
if (new Set(dop.multi.map((item) => item.group)).size < 6 || dop.multi.length < 36) failures.push("aws-dop-c02: multi-select quality gate requires 6 groups and 36 records");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log(`Validated ${Object.keys(packages).length} package manifests; no malformed linked content found.`);
