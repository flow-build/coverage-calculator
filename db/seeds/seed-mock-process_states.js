const { v1: uuid } = require("uuid");

exports.seed = function (knex) {
  return knex("process_state")
    .del()
    .then(function () {
      return knex("process_state").insert([
        {
          id: uuid(),
          process_id: "7b6bec16-2dd8-4211-992f-11b259d3a58d",
          step_number: 1,
          node_id: "1",
          next_node_id: "1",
          bag: {},
          external_input: {},
          result: {},
          error: "",
          created_at: new Date(),
          actor_data: {},
          engine_id: uuid(),
          time_elapsed: 1,
          status: "UNSTARTED",
        },
        {
          id: uuid(),
          process_id: "7b6bec16-2dd8-4211-992f-11b259d3a58d",
          step_number: 1,
          node_id: "1",
          next_node_id: "2",
          bag: {},
          external_input: {},
          result: {},
          error: "",
          created_at: new Date(),
          actor_data: {},
          engine_id: uuid(),
          time_elapsed: 1,
          status: "RUNNING",
        },
        {
          id: uuid(),
          process_id: "7b6bec16-2dd8-4211-992f-11b259d3a58d",
          step_number: 2,
          node_id: "2",
          next_node_id: "3",
          bag: {},
          external_input: {},
          result: {},
          error: "",
          created_at: new Date(),
          actor_data: {},
          engine_id: uuid(),
          time_elapsed: 1,
          status: "RUNNING",
        },
        {
          id: uuid(),
          process_id: "7b6bec16-2dd8-4211-992f-11b259d3a58d",
          step_number: 2,
          node_id: "3",
          next_node_id: null,
          bag: {},
          external_input: {},
          result: {},
          error: "",
          created_at: new Date(),
          actor_data: {},
          engine_id: uuid(),
          time_elapsed: 1,
          status: "FINISHED",
        },
      ]);
    });
};
