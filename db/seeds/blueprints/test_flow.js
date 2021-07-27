const lanes = [
  {
    id: "free",
    name: "free for all",
    rule: ["fn", ["&", "args"], true],
  },
];

module.exports = {
  id: "8ae7f149-0d86-46f5-8780-43610e8204f8",
  name: "flow",
  description: "basic flow node blueprint",
  version: 1,
  blueprint_spec: {
    requirements: ["core"],
    prepare: [],
    environment: {},
    lanes,
    nodes: [
      {
        id: "1",
        name: "Start basic flow node testing blueprint",
        type: "Start",
        lane_id: "free",
        next: "2",
        parameters: {
          input_schema: {},
        },
      },
      {
        id: "2",
        name: "any set to bag node",
        type: "systemTask",
        category: "setToBag",
        lane_id: "free",
        next: "3",
        parameters: {
          input: {
            anything: "something",
          },
        },
      },
      {
        id: "3",
        name: "any flow node",
        type: "flowNode",
        lane_id: "free",
        next: {
          true: "4",
          default: "2",
        },
        parameters: {
          input: {
            decision: "true",
          },
        },
      },
      {
        id: "4",
        name: "Finish basic flow node test blueprint",
        type: "Finish",
        lane_id: "free",
        next: null,
      },
    ],
  },
};
