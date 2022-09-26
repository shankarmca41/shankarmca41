import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + this.props.step });
  };
  dec = () => {
    this.setState({ count: this.state.count - this.props.step });
  };
  render() {
    return (
      <div className="betterview">
        <h1>{this.props.gender} Students</h1>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
