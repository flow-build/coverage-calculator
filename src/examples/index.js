require("dotenv").config();
const Knex = require("knex");
const knexConfig = require("../../knexfile")["development"];
const { Coverage } = require("../facade/coverage");
const db = Knex(knexConfig);

const doit = async () => {
  const workflow = await db('workflow')
        .where('name', 'basic')
        .orderBy('created_at', 'desc')
        .first();

  const coverage = new Coverage(db);
  const result = await coverage.calculateCoverage(workflow.id, 50);

  console.log(result);
  console.log("uncovered Nodes: ", result.coverage.nodes.uncovered);
  console.log("uncovered Connections: ", result.coverage.connections.uncovered);

  process.exit(0);
};

doit();
