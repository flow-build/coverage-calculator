exports.up = function (knex) {
  return knex.schema.createTable("process", (table) => {
    table.uuid("id").primary();
    table.uuid("workflow_id").notNullable();
    table.jsonb("blueprint_spec").notNullable();
    table.timestamp("created_at").notNullable();
    table.uuid("current_state_id");
    table.string("current_status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("process");
};
