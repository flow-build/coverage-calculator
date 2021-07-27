const { WorkflowEntity } = require("../entities/workflow");
const { PersistorProvider } = require("../persist/provider");
const { listBlueprintConnections } = require("../utils/blueprint");

class Workflow {
  constructor(db) {
    this._db = db;
    PersistorProvider.getPersistor(db);
  }

  async getNodesAndConections(workflowId) {
    let workflow = await new WorkflowEntity().getById(workflowId);

    const connections = await listBlueprintConnections(workflow.blueprint);
    const nodes = await workflow.blueprint.nodes.map((node) => node.id);

    return { nodes, connections };
  }
}

module.exports = {
  Workflow,
};
