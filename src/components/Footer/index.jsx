import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  checkall = (event) => {
    this.props.handlecheckall(event.target.checked);
  };
  handleClearAll = () => {
    if (window.confirm("Are you sure")) {
      this.props.handleClearAll();
    }
  };

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0);
    }, 0);
    const CountAll = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === CountAll && CountAll !== 0 ? true : false}
            onChange={this.checkall}
          />
        </label>
        <span>
          <span>Finished {doneCount}</span> / All {CountAll}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAll}>
          Clear Finished Jobs
        </button>
      </div>
    );
  }
}
