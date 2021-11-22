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

  addItem = (text) => {
    // generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };
    // add element in array
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
    // console.log("Added", text);
  };
  onToggleImportant = (id) => {
    console.log("Toggle important", id);
  };
  onToggleDone = (id) => {
    console.log("Toggle done", id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
