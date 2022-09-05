import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppState";
import Layout from "./Layout";
import GraphList from "./GraphList";
import Contact from "./Contact";
import CreateGraph from "./CreateGraph";
import GraphView from "./GraphView";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/graph-list" element={<GraphList />}></Route>
            <Route path="/graph-view/:id" element={<GraphView />}></Route>
            <Route path="/create-graph" element={<CreateGraph />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="*"
              element={<h1 style={{ textAlign: "center" }}>Invalid Path</h1>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
