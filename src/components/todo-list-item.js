import React from "react";

import "./todo-list-item.css";

// const TodoListItem = ({ label, important = false }) => {
//   const style = {
//     color: important ? "tomato" : "black",
//   };
//   return (
//     <span className="list-group-item" style={style}>
//       {label}
//     </span>
//   );
// };
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span
      style={{ display: "flex", justifyContent: "space-between" }}
      className="todo-list-item"
    >
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <div>
        <button type="button" className="btn btn-outline-success btn-sm ">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm ">
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
