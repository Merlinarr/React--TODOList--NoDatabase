import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./index.css";
export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (event.target.value.trim() === "") {
      alert("Please enter someting");
      return;
    }

    const addTodo = this.props.addTodo;
    const todoObjg = { id: nanoid(), name: event.target.value, done: false };
    addTodo(todoObjg);
    event.target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="press Enter for confirm"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
