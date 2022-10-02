import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin")
  );

  const login = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("loggedin", 1);
      setIsLoggedIn(1);
    } else {
      alert("login details wrong");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Area</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="Submit">Login</button>
        {isLoggedin !== null && <Redirect to="/dashboard" />}
      </form>
    </div>
  );
}
