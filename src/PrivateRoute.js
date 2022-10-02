import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
  const [isLoggedin, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin")
  );
  return (
    <div>
      {props.children}
      {isLoggedin === null && <Redirect to="/login" />}
    </div>
  );
}
