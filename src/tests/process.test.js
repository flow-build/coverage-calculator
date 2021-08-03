/* eslint-disable no-undef */
const { db } = require("./utils/db");
const { Process } = require("../facade/process");

afterAll(async () => {
  await db.destroy();
});

describe("Process facade tests", () => {
  test("getCount should work", async () => {
    const ps = new Process(db);
    const workflowId = "4e9ed734-7680-4a17-a05b-4c19ac920428";
    const response = await ps.getCount(workflowId);
    expect(response).toBeDefined();
    expect(response).toBe(1);
  });
  test("getCountByStatus should work", async () => {
    const ps = new Process(db);
    const workflowId = "4e9ed734-7680-4a17-a05b-4c19ac920428";
    const response = await ps.getCountByStatus(workflowId);
    expect(response).toBeDefined();
    expect(response["finished"]).toBe(1);
  });
  test("getLatter should work", async () => {
    const ps = new Process(db);
    const workflowId = "4e9ed734-7680-4a17-a05b-4c19ac920428";
    const response = await ps.getLatter(workflowId);
    expect(response).toBeDefined();
    expect(response).toHaveLength(1);
  });
});
