import React from "react";
import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {
    console.log("item", item);
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );

    //  {...item} тоже, что и label={item.label} important={item.important}
    // имена свойств компонента совпадают с именами свойств объекта
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};
export default TodoList;
