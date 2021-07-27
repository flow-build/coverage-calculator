const listBlueprintConnections = async (blueprint) =>
  blueprint.nodes.reduce((acc, node) => {
    let retval;
    if (node.next && typeof node.next === "object") {
      retval = Object.values(node.next).reduce((a, next) => {
        const i = `${node.id} -> ${next}`;
        return [...a, i];
      }, []);
    } else {
      retval = [`${node.id} -> ${node.next}`];
    }
    return acc.concat(retval);
  }, []);

module.exports = {
  listBlueprintConnections,
};
