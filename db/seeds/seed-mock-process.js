const { v1: uuid } = require("uuid");

exports.seed = function (knex) {
  return knex("process")
    .del()
    .then(function () {
      return knex("process").insert([
        {
          workflow_id: "4e9ed734-7680-4a17-a05b-4c19ac920428",
          id: "7b6bec16-2dd8-4211-992f-11b259d3a58d",
          blueprint_spec: {},
          current_state_id: uuid(),
          current_status: "finished",
          created_at: new Date(),
        },
      ]);
    });
};
