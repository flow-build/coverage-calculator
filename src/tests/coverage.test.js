/* eslint-disable no-undef */
const { db } = require("./utils/db");
const { Coverage } = require("../facade/coverage");

afterAll(async () => {
  await db.destroy();
});

describe("Coverage facade tests", () => {
  test("coverage should work", async () => {
    const cover = new Coverage(db);
    const workflowId = "4e9ed734-7680-4a17-a05b-4c19ac920428";
    const response = await cover.calculateCoverage(workflowId);
    expect(response.coverage.nodes).toBeDefined();
    expect(response.coverage.nodes.value).toBe(100);
    expect(response.coverage.connections).toBeDefined();
    expect(response.coverage.connections.value).toBe(100);
  });
});
