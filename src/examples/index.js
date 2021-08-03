require("dotenv").config();
const Knex = require("knex");
const knexConfig = require("../../knexfile")["development"];
const { Coverage } = require("../facade/coverage");
const db = Knex(knexConfig);

const doit = async () => {
  const workflowId = "f81cf040-6d41-11eb-82af-1d1728424c5c";

  const coverage = new Coverage(db);
  const result = await coverage.calculateCoverage(workflowId, 50);

  console.log(result);
  console.log("uncovered Nodes: ", result.coverage.nodes.uncovered);
  console.log("uncovered Connections: ", result.coverage.connections.uncovered);

  process.exit(0);
};

doit();
