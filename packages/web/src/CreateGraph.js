import React, { useState, useContext } from "react";
import { AppContext } from "./AppState";

export default function CreateGraph() {
  // const inputRef = useRef(null);
  const { createGraph } = useContext(AppContext);

  const [graphName, setGraphName] = useState("");
  const [success, setSuccess] = useState(false);

  const updateCreateGraph = (e) => {
    setGraphName(e.target.value);
  };
  const onButtonClick = () => {
    try {
      if (
        window.confirm(`Do you want to create Graph: ${graphName}`) === true
      ) {
        createGraph(graphName);
        setSuccess(true);
        setGraphName("");
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (err) {
      alert(`failed to create graph: ${graphName}`);
    }
  };
  return (
    <div className="create-graph-container">
      <h2> Create New Graph</h2>
      <input
        type="text"
        value={graphName}
        onChange={updateCreateGraph}
        placeholder="Graph Name"
      />
      <button onClick={() => onButtonClick()} disabled={!graphName.trim()}>
        Create Graph
      </button>
      {success ? <p>Graph created successfully.</p> : null}
    </div>
  );
}
