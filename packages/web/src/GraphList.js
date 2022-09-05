import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppState";
import { Link } from "react-router-dom";

export default function GraphList() {
  const { addGraph, graphList } = useContext(AppContext);

  const [graphData, setGraphData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getData = async () => {
      await addGraph();
    };
    getData();
  }, []);

  useEffect(() => {
    setGraphData(graphList);
    setFilterData(graphList);
  }, [graphList]);

  const filterGraphList = (value) => {
    setFilter(value);
    setFilterData(value != null ? sortGraphList(graphData, value) : graphData);
  };

  const sortGraphList = (data, filter) => {
    // Graph with same text will be on top
    // Graph with same node will be second priority
    // rest of the list
    const sortGraphMap = new Map([
      [0, []],
      [1, []],
      [2, []],
    ]);
    const tempFilter = filter.toLowerCase();
    data.forEach((graph) => {
      if (graph.name.toLowerCase() === tempFilter) {
        sortGraphMap.get(0).push(graph);
      } else if (
        graph?.data?.nodes.find(
          (node) => node.label.toLowerCase() === tempFilter
        )
      ) {
        sortGraphMap.get(1).push(graph);
      } else {
        sortGraphMap.get(2).push(graph);
      }
    });
    return [
      ...(sortGraphMap.get(0) || []),
      ...(sortGraphMap.get(1) || []),
      ...(sortGraphMap.get(2) || []),
    ];
  };

  return (
    <div className="graph-list-container">
      <h1>Graph List</h1>
      <input
        type="text"
        placeholder="Filter Graphs..."
        value={filter}
        onChange={(e) => filterGraphList(e.target.value)}
      />
      {filterData.length && <Graphs data={filterData} />}
    </div>
  );
}

function Graphs({ data }) {
  console.log(data);
  return (
    <div className="graph-container">
      <ul>
        {data.map((item) => (
          <Graph key={item.id} text={item.name} graphId={item.id}></Graph>
        ))}
      </ul>
    </div>
  );
}

function Graph({ text, graphId }) {
  const { deleteGraph } = useContext(AppContext);
  const deleteGraphById = async () => {
    try {
      if (window.confirm(`Do you want to delete Graph: ${text}`) === true) {
        await deleteGraph(graphId);
      }
    } catch (err) {
      console.log(err);
      alert(`Error while deleting graph`);
    }
  };
  return (
    <li>
      <h2>
        <Link to={`/graph-view/${graphId}`}>{text}</Link>
      </h2>
      <button
        title="Remove Graph"
        className="delete-button"
        onClick={deleteGraphById}
      >
        Delete
      </button>
    </li>
  );
}
