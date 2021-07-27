const { PersistedEntity } = require("./base");

class WorkflowEntity extends PersistedEntity {
  static get name() {
    return "Workflow";
  }

  static getEntityClass() {
    return WorkflowEntity;
  }

  constructor(workflow_obj) {
    super();
    this._workflow_obj = workflow_obj;
  }

  serialized() {
    return {
      id: this._id,
      created_at: this._created_at,
      name: this._workflow_obj.name,
      blueprint: this._workflow_obj.blueprint_spec,
      version: this._workflow_obj.version,
    };
  }

  deserialized(dbData) {
    if (Array.isArray(dbData)) {
      return dbData.map((data) => {
        return {
          workflow_id: data.id,
          created_at: data.created_at,
          name: data.name,
          version: data.version,
          blueprint: data.blueprint_spec,
        };
      });
    } else {
      return {
        workflow_id: dbData.id,
        created_at: dbData.created_at,
        name: dbData.name,
        version: dbData.version,
        blueprint: dbData.blueprint_spec,
      };
    }
  }

  async fetchById(workflowId) {
    const dbData = await this.constructor.getPersist().getById(workflowId);
    return this.deserialized(dbData);
  }
}

module.exports = {
  WorkflowEntity,
};
