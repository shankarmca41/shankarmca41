import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        if (
          result.filter((user) => user.username === this.state.username)
            .length > 0
        ) {
          alert("username is match");
        } else {
          alert("unsuccess");
        }
      });
    // if (this.state.username === "admin" && this.state.password === "admin") {
    //   alert("login success");
    // } else {
    //   alert("Wrong Username or password");
    // }
  };
  onChangeUsername(username) {
    this.setState({ username: username });
  }
  onChangePassword(password) {
    this.setState({ password: password });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.login}>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.onChangeUsername(e.target.value)}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.onChangePassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default Login;
