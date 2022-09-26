import React, { Component } from "react";

export class Todo extends Component {
  render() {
    var {
      t: { title, status },
      i,
      undo,
      done,
      deleteTodo,
    } = this.props;
    return (
      <div className="betterview">
        <li className={status ? "bg-Success" : "bg-unsuccess"}>
          {title}---
          {status ? "completed" : "not completed"}
          <button
            onClick={() => {
              deleteTodo(i);
            }}
          >
            Delete
          </button>
          {status ? (
            <button
              onClick={() => {
                undo(i);
              }}
            >
              Undo
            </button>
          ) : (
            <button
              onClick={() => {
                done(i);
              }}
            >
              done
            </button>
          )}
        </li>
      </div>
    );
  }
}
export default Todo;
