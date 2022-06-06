require("dotenv").config();
const Knex = require("knex");
const knexConfig = require("./knexfile")["development"];
const { Coverage } = require("./src/facade/coverage");
const steps = require("./tests/features/support/steps")
const report = require("./scripts/report")
const db = Knex(knexConfig);
const fs = require("fs");

if (!fs.existsSync("tests/features/support/coverageReports")) {
  fs.mkdirSync("tests/features/support/coverageReports");
}

class BlueprintCoverage {
  constructor() {
    this.coverage = new Coverage(db);
  }

  async analyze(workflowName, count, testsResult) {

    const workflow = await db('workflow')
      .where('name', workflowName)
      .orderBy('created_at', 'desc')
      .first();

    const result = await this.coverage.calculateCoverage(workflow.id, count);
    result.processes.testsResult = testsResult.map(obj => obj.status).reverse();
    const now = new Date();
    const reportFileName = (workflowName + now.getFullYear() + (now.getMonth() + 1) + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds());
    
    fs.writeFileSync(`tests/features/support/coverageReports/${reportFileName}.json`, JSON.stringify(result), err => {
      if (err) throw err;
    });

    setTimeout(function () {
      process.exit();
    }, 5000);


  }

}

module.exports = { 
  BlueprintCoverage,
  steps,
  report
};
