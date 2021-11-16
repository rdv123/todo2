import React from "react";
import TodoListItem from "./tod-list-item";
const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem {...item} />
      </li>
    );
    //  {...item} тоже, что и label={item.label} important={item.important}
    // имена свойств компонента совпадают с именами свойств объекта
  });

  return <ul>{elements}</ul>;
};
export default TodoList;
