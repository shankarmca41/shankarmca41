import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Projects from "../Project";
import GithubUsers from "./GithubUsers";
import Proj from "./Proj";
import Topics from "./Topics";
import User1 from "./User1";

const routers = [
  {
    path: "/projects/:id",
    component: () => <Proj />,
  },
  {
    path: "/projects/",
    component: () => <Projects />,
  },
  {
    path: "/topics",
    component: () => <Topics />,
  },
  {
    path: "/github-users",
    component: () => <GithubUsers />,
  },
  {
    path: "/User1",
    component: () => <User1 />,
  },
];
export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            height: "100vh",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/projects" activeStyle={{ color: "marnoon" }}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/topics" activeStyleName="text-denger">
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink to="/github-users" activeStyleName="text-denger">
                Github Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/User1" activeStyleName="text-denger">
                User1
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routers.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
