import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./search-panel";
import TodoList from "./todo-list";
import AppHeader from "./app-header";
import ItemStatusFilter from "./item-status-filter";
import ItemAddForm from "./item-add-form";
import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make awesome app"),
      this.createTodoItem("Have a lunch"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

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

  addItem = (text) => {
    // generate id
    const newItem = this.createTodoItem(text);
    // add element in array
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };
  onToggleImportant = (id) => {
    console.log("Toggle important", id);
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      // 1. update objekt
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        done: !oldItem.done,
      };
      // 2. construct new array
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
