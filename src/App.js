import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  state = {
    todos: [
      { id: 1, name: "eating", done: true },
      { id: 2, name: "sleeping", done: true },
      { id: 3, name: "working", done: true },
    ],
  };
  // addTodo = (todoObjg) => {
  //    const {todos}=this.state
  //    const newTodos = [todoObjg,...todos]
  //    this.setState({todos:newTodos})
  // }
  addTodo(todoObjg) {
    const { todos } = this.state;
    const newTodos = [todoObjg, ...todos];
    this.setState({ todos: newTodos });
  }
  changeTodo = (id, done) => {
    const { todos } = this.state;

    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      }
      return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  deleteSingleTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  handlecheckall = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      return { ...item, done };
    });
    this.setState({ todos: newTodos });
  };
  handleClearAll = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return item.done !== true;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={this.state.todos}
            changeTodo={this.changeTodo}
            deleteSingleTodo={this.deleteSingleTodo}
          ></List>
          <Footer
            todos={this.state.todos}
            handlecheckall={this.handlecheckall}
            handleClearAll={this.handleClearAll}
          ></Footer>
        </div>
      </div>
    );
  }
}
