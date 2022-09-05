import React, { createContext, useReducer } from "react";
import axios from "./service/axios";
import appReducer from "./AppReducer";

const initialState = {
  graphList: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  async function addGraph() {
    const { data } = await axios.get("/graph");
    dispatch({
      type: "ADD_GRAPH",
      payload: data,
    });
  }
  async function createGraph(graphName) {
    await axios.post("/graph", { name: graphName });
    await addGraph();
    // dispatch({
    //   type: "CREATE_GRAPH",
    //   payload: graph,
    // });
    return graphName;
  }

  async function deleteGraph(id) {
    await axios.delete("/graph", { data: { id: id } });
    await addGraph();
    // dispatch({
    //   type: "DELETE_GRAPH",
    //   payload: id,
    // });
  }

  return (
    <AppContext.Provider
      value={{
        graphList: state.graphList,
        createGraph,
        deleteGraph,
        addGraph,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
