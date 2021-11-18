import React, { Component } from "react";

import "./todo-list-item.css";

// const TodoListItem = ({ label, important = false }) => {
//   const style = {
//     color: important ? "steelblue" : "black",
//     fontWeight: important ? "bold" : "normal",
//   };

//   return (
//     <span
//       style={{ display: "flex", justifyContent: "space-between" }}
//       className="todo-list-item"
//     >
//       <span className="todo-list-item-label" style={style}>
//         {label}
//       </span>
//       <div>
//         <button type="button" className="btn btn-outline-success btn-sm ">
//           <i className="fa fa-exclamation" />
//         </button>
//         <button type="button" className="btn btn-outline-danger btn-sm ">
//           <i className="fa fa-trash-o" />
//         </button>
//       </div>
//     </span>
//   );
// };

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    });
  };

  onMarkImportant = () => {
    this.setState({
      important: true,
    });
  };

  render() {
    const { done, important } = this.state;
    const { label } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    // let classNames = "todo-list-item";
    // if (done) {
    //   classNames += "line-through";
    // }

    if (important) {
      classNames += " important";
    }

    return (
      <span
        style={{ display: "flex", justifyContent: "space-between" }}
        className={classNames}
      >
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <div>
          <button
            onClick={this.onMarkImportant}
            type="button"
            className="btn btn-outline-success btn-sm "
          >
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm ">
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </span>
    );
  }
}
