import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./service/axios";
import { Graph } from "react-d3-graph";
import { Link } from "react-router-dom";

export default function GraphView() {
  const { id } = useParams();
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    getGraphData();
  }, []);
  const getGraphData = async () => {
    const { data } = await axios.get("/graph", {
      params: {
        id,
      },
    });
    setGraphData(data);
  };

  const graphConfig = {
    config: {
      collapsible: true,
      nodeHighlightBehavior: true,
      node: {
        color: "blue",
        size: 250,
        fontSize: 12,
        highlightStrokeColor: "blue",
        labelProperty: "label",
      },
      link: {
        highlightColor: "lightblue",
      },
      height: 450,
      width: 550,
    },
    fontSize: 12,
  };

  const onClickNode = (nodeId) => {
    console.log("Click on node: ", nodeId);
  };

  const onDoubleClickNode = (nodeId) => {
    console.log("DoubleClick on node: ", nodeId);
  };

  return (
    <>
      {graphData.length ? (
        <div className="graph-view">
          {graphData.map((graph, index) => (
            <div key={index}>
              <h1>Graph: {graph.name}</h1>
              {graph?.data?.nodes?.length ? (
                <Graph
                  id="ontology-graph"
                  data={graph.data}
                  config={graphConfig.config}
                  onClickNode={onClickNode}
                  onDoubleClickNode={onDoubleClickNode}
                />
              ) : (
                <h3> Nodes not available in Graph</h3>
              )}
            </div>
          ))}
          <button>
            <Link to="/graph-list">Back</Link>
          </button>
        </div>
      ) : null}
    </>
  );
}
