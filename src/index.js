import React from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make awesome app", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};
//const el = <App/>

ReactDOM.render(<App />, document.getElementById("root"));
