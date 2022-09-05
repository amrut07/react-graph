import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Layout() {
  return (
    <>
      <nav className="toolbar">
        <ul>
          <li className="graph-list">
            <Link to="/graph-list">Graph List</Link>
          </li>
          <li className="create-graph">
            <Link to="/create-graph">Create Graph</Link>
          </li>
        </ul>
        <ul>
          <li className="contact">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
