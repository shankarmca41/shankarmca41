import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav class="navbar">
      <li class="nav-link">
        <a href="/" class="nav-link">
          Refresh
        </a>
      </li>
      <li class="nav-link">
        <a href="/menu" class="nav-link">
          Sidebar
        </a>
      </li>
      <li class="nav-link">
        <NavLink
          to="/dashbord"
          class="nav-Navlink"
          activeStyle={{ color: "red" }}
        >
          Dashbord
        </NavLink>
      </li>
      <li class="nav-link">
        <a href="/projects" class="nav-link">
          My Projects
        </a>
      </li>
      <li class="nav-link">
        <a href="/topics" class="nav-link">
          My Topics
        </a>
      </li>
      <li class="nav-link">
        <NavLink to="/about" class="nav-Navlink" activeStyle={{ color: "red" }}>
          About
        </NavLink>
      </li>
      <li class="nav-link">
        <NavLink
          to="/contact"
          class="nav-Navlink"
          activeStyle={{ color: "red" }}
        >
          Contact Us
        </NavLink>
      </li>
      <li class="nav-link">
        <NavLink to="/login" class="nav-Navlink" activeStyle={{ color: "red" }}>
          Login
        </NavLink>
      </li>
      <li class="nav-link">
        <NavLink
          to="/logout"
          onClick={() => localStorage.clear()}
          class="nav-lNavink"
          activeStyle={{ color: "red" }}
        >
          Logout
        </NavLink>
      </li>
    </nav>
  );
}
