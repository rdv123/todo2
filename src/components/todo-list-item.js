import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      done,
      important,
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span
        style={{ display: "flex", justifyContent: "space-between" }}
        className={classNames}
      >
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button
            onClick={onToggleImportant}
            type="button"
            className="btn btn-outline-success btn-sm "
          >
            <i className="fa fa-exclamation" />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm "
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </span>
    );
  }
}
