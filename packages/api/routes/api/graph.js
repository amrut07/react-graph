const express = require("express");
const router = express.Router();
const GraphService = require("../../services/graph");

function getRandomArbitrary(min = 32, max = 126) {
  return String.fromCharCode(Math.random() * (max - min) + min) || "";
}

// fetching the complete graph list or graph with specific id
router.get("/", async function (req, res, next) {
  try {
    const { id } = req.query;
    const data = await GraphService.graphData(id);
    res.send(data);
  } catch (err) {
    // sending custom err msg and internal server for now
    // we could check specific errors if required.
    const errMsg = "failed to get graph data";
    return res.status(500).send(errMsg);
  }
});

// deleting the graph with provided graph-id and returning all other records.
router.delete("/", async function (req, res, next) {
  const { id } = req.body;
  try {
    const data = await GraphService.deleteGraphById(id);
    return res.send(data);
  } catch (err) {
    const errMsg = `Failed to delete Graph for id - ${id}`;
    return res.status(500).send(errMsg);
  }
});

// creating the record in graph
router.post("/", async function (req, res, next) {
  const { name } = req.body;
  try {
    const graph = {
      name,
      id: `${getRandomArbitrary()}${name
        .trim()
        .toLowerCase()}${getRandomArbitrary()}`,
      data: {
        nodes: [],
        edges: [],
      },
    };

    const data = await GraphService.createGraph(graph);
    return res.send(data);
  } catch (err) {
    const errMsg = `Failed to create Graph for name - ${name}`;
    return res.status(500).send(errMsg);
  }
});

module.exports = router;
