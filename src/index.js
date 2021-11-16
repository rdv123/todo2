import React from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false },
    { label: "Make awesome app", important: true },
    { label: "Have a lunch", important: false },
  ];

  // const value = '<script>alert("")</script>';
  // const isLoggedIn = true;
  // const loginBox = <span>Log in please </span>;
  // const welcomeBox = <span>Welcome Back </span>;
  return (
    <div>
      {/* {value} */}
      {/* <span>{new Date().toString()}</span> */}
      {/* {isLoggedIn ? welcomeBox : loginBox} */}
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

//const el = <App/>

ReactDOM.render(<App />, document.getElementById("root"));
