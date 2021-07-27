/* eslint-disable no-undef */
const { db } = require("./utils/db");
const { Workflow } = require("../facade/workflow");

afterAll(async () => {
  await db.destroy();
});

describe("Workflow facade tests", () => {
  test("getNodesAndConnections should work using a basic blueprint", async () => {
    const workflow = new Workflow(db);
    const workflow_id = "4e9ed734-7680-4a17-a05b-4c19ac920428";
    const response = await workflow.getNodesAndConections(workflow_id);
    expect(response.nodes).toBeDefined();
    expect(response.nodes).toHaveLength(3);
    expect(response.connections).toBeDefined();
    expect(response.connections).toHaveLength(3);
  });
  test("getNodesAndConnections should work using a flow node blueprint", async () => {
    const workflow = new Workflow(db);
    const workflow_id = "8ae7f149-0d86-46f5-8780-43610e8204f8";
    const response = await workflow.getNodesAndConections(workflow_id);
    expect(response.nodes).toBeDefined();
    expect(response.nodes).toHaveLength(4);
    expect(response.connections).toBeDefined();
    expect(response.connections).toHaveLength(5);
  });
});
