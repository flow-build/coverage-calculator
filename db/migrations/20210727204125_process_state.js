exports.up = function (knex) {
  return knex.schema.createTable("process_state", (table) => {
    table.uuid("id").primary();
    table.uuid("process_id").notNullable();
    table.integer("step_number").notNullable();
    table.string("node_id", 255).notNullable();
    table.string("next_node_id");
    table.jsonb("bag").notNullable();
    table.jsonb("external_input");
    table.jsonb("result");
    table.text("error");
    table.string("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.jsonb("actor_data");
    table.uuid("engine_id");
    table.bigInteger("time_elapsed");
    table.index("process_id", "idx_process_state_process_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("process_state");
};
