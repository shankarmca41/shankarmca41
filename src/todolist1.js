import React, { Component } from "react";
import Todo from "./todo";
export class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      todos: [
        { title: "Books", status: false },
        { title: "school", status: false },
        { title: "teacher", status: true },
        { title: "pens", status: false },
        { title: "fee", status: true },
      ],
      fillterKey: "completed",
    };
  }
  deleteTodo = (ind) => {
    var temp = [...this.state.todos];
    temp.splice(ind, 1);
    this.setState({ todos: [...temp] });
  };
  undo = (ind) => {
    var temp = [...this.state.todos];
    temp[ind].status = false;
    this.setState({ todos: [...temp] });
  };
  done = (ind) => {
    var temp = [...this.state.todos];
    temp[ind].status = true;
    this.setState({ todos: [...temp] });
  };
  updateFilterKey = (k) => {
    this.setState({ fillterKey: k });
  };
  addTask = () => {
    var newtask = { title: this.state.task, status: false };
    this.setState({ todos: [...this.state.todos, newtask] });
  };

  render() {
    return (
      <div className="betterview">
        <h1>Todolist</h1>
        <input
          type="text"
          onChange={(e) => this.setState({ task: e.target.value })}
        ></input>
        <button onClick={this.addTask}>Add Task</button>
        <br />
        <input
          type="radio"
          name="filt"
          id=""
          checked={this.state.fillterKey === "All"}
          onChange={() => {
            this.updateFilterKey("All");
          }}
        />
        All
        <input
          type="radio"
          name="filt"
          id=""
          checked={this.state.fillterKey === "completed"}
          onChange={() => {
            this.updateFilterKey("completed");
          }}
        />
        completed
        <input
          type="radio"
          name="filt"
          id=""
          checked={this.state.fillterKey === "not completed"}
          onChange={() => {
            this.updateFilterKey("not completed");
          }}
        />
        not completed
        {this.state.todos.map((t, i) => {
          if (this.state.fillterKey === "completed") {
            return t.status ? (
              <Todo
                t={t}
                i={i}
                deleteTodo={this.deleteTodo}
                undo={this.undo}
                done={this.done}
              ></Todo>
            ) : (
              ""
            );
          }
          if (this.state.fillterKey === "not completed") {
            return !t.status ? (
              <Todo
                t={t}
                i={i}
                deleteTodo={this.deleteTodo}
                undo={this.undo}
                done={this.done}
              ></Todo>
            ) : (
              ""
            );
          }
          return (
            <Todo
              t={t}
              i={i}
              deleteTodo={this.deleteTodo}
              undo={this.undo}
              done={this.done}
            ></Todo>
          );
        })}
      </div>
    );
  }
}
export default Todolist;
