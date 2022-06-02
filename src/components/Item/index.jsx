import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (event) => {
      this.props.changeTodo(id, event.target.checked);
    };
  };
  handleDelete = (id) => {
    return (event) => {
      if (window.confirm("Are you sure?")) {
        this.props.deleteSingleTodo(id);
      }
    };
  };
  render() {
    const { todo } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "#fff" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.handleCheck(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          onClick={this.handleDelete(todo.id)}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
