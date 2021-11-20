import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./search-panel";
import TodoList from "./todo-list";
import AppHeader from "./app-header";
import ItemStatusFilter from "./item-status-filter";
import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make awesome app", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      console.log(todoData, "todoData");
      const idx = todoData.findIndex((el) => el.id === id);
      console.log("idx", idx);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      //   console.log(newArray);
      //const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      //   const newArr = todoData.filter((item) => item.id !== id);
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
