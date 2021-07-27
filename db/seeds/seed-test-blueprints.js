const basic = require("./blueprints/test_basic");
const flow = require("./blueprints/test_flow");

exports.seed = function (knex) {
  return knex("workflow")
    .del()
    .then(function () {
      return knex("workflow").insert([
        {
          id: basic.id,
          created_at: new Date(),
          name: basic.name,
          description: basic.description,
          blueprint_spec: basic.blueprint_spec,
          version: basic.version,
        },
        {
          id: flow.id,
          created_at: new Date(),
          name: flow.name,
          description: flow.description,
          blueprint_spec: flow.blueprint_spec,
          version: flow.version,
        },
      ]);
    });
};
