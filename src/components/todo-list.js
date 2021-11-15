import React from "react";
import TodoListItem from "./tod-list-item";
const TodoList = () => {
  //   const items = ["Learn React 111", "Build Awesome App"];
  return (
    <ul>
      <li>
        <TodoListItem />
      </li>
      <li>
        <TodoListItem />
      </li>
    </ul>
  );
};
export default TodoList;
