const lanes = [
  {
    id: "free",
    name: "free for all",
    rule: ["fn", ["&", "args"], true],
  },
];

module.exports = {
  id: "4e9ed734-7680-4a17-a05b-4c19ac920428",
  name: "basic",
  description: "basic test",
  version: 1,
  blueprint_spec: {
    requirements: ["core"],
    prepare: [],
    environment: {},
    lanes,
    nodes: [
      {
        id: "1",
        name: "Start basic testing blueprint",
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
        name: "Finish basic test blueprint",
        type: "Finish",
        lane_id: "free",
        next: null,
      },
    ],
  },
};
