import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Projects() {
  let match = useRouteMatch();
  return (
    <div style={{ textAlign: "center" }}>
      <h1> My Projects</h1>
      <nav className="navbar navbar-expand-lg">
        <li className="nav-item active">
          <Link
            to={`${match.url}/chat-application`}
            title="Chat app"
            className="nav-link text-primary rounded"
          >
            Chat App
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`${match.url}/ecommerce-application`}
            className="nav-link text-primary rounded"
          >
            Ecommerce App
          </Link>
        </li>
      </nav>
    </div>
  );
}
