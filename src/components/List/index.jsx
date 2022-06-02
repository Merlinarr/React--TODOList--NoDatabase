import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, changeTodo, deleteSingleTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              todo={item}
              changeTodo={changeTodo}
              deleteSingleTodo={deleteSingleTodo}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
