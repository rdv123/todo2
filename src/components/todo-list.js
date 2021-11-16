import React from "react";
import TodoListItem from "./tod-list-item";
const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    console.log("item", item);
    return (
      <li key={item.id}>
        <TodoListItem {...item} />
      </li>
    );

    //  {...item} тоже, что и label={item.label} important={item.important}
    // имена свойств компонента совпадают с именами свойств объекта
  });

  return <ul>{elements}</ul>;
};
export default TodoList;
