class KnexPersist {
  constructor(db, table) {
    this._db = db;
    this._table = table;
  }

  async get(obj_id) {
    return await this._db(this._table).where("id", obj_id).first();
  }

  async getAll() {
    return await this._db(this._table).select();
  }
}

class WorkflowKnexPersist extends KnexPersist {
  constructor(db) {
    super(db, "workflow");
  }

  async getCurrentByName(name) {
    return await this._db(this._table)
      .first()
      .where("name", name)
      .orderBy("version", "desc");
  }
}

class ProcessKnexPersist extends KnexPersist {
  constructor(db) {
    super(db, "process");
  }

  async getCountByWorkflowId(workflow_id) {
    return await this._db(this._table)
      .count("id")
      .where("workflow_id", workflow_id);
  }
}

class ProcessStateKnexPersist extends KnexPersist {
  constructor(db) {
    super(db, "process_state");
  }

  async getCountByWorkflowId(workflow_id) {
    return await this._db(this._table)
      .join("process", `${this._table}.process_id`, "process.id")
      .count("id")
      .where("process.workflow_id", workflow_id);
  }

  async getExecution(process_id) {
    return await this._db(this._table)
      .distinct("node_id", "next_node_id")
      .where("process_id", process_id);
  }
}

module.exports = {
  WorkflowKnexPersist,
  ProcessKnexPersist,
  ProcessStateKnexPersist,
};
