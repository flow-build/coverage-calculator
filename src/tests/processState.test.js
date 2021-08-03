/* eslint-disable no-undef */
const { db } = require("./utils/db");
const { ProcessState } = require("../facade/processState");

afterAll(async () => {
  await db.destroy();
});

describe("ProcessState facade tests", () => {
  test("getExecution should work", async () => {
    const ps = new ProcessState(db);
    const processId = ["7b6bec16-2dd8-4211-992f-11b259d3a58d"];
    const response = await ps.getExecution(processId);
    expect(response.nodes).toBeDefined();
    expect(response.nodes).toHaveLength(3);
    expect(response.connections).toBeDefined();
    expect(response.connections).toHaveLength(2);
  });
});
