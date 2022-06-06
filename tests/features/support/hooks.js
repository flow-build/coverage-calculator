const { AfterAll, After } = require("@cucumber/cucumber");
const { BlueprintCoverage } = require("../../../index");
const coverage = new BlueprintCoverage();
let count = 0;
let workflowName;
let testsResult = [];

After( function (data) {
  workflowName = data.gherkinDocument.feature.name;
  testsResult.push(data.result);
  count += 1;
});

AfterAll( async function () {
  await coverage.analyze(workflowName, count, testsResult);
  return;
});