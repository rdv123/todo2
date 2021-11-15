import React from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";

const App = () => {
  const value = '<script>alert("")</script>';
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
      <TodoList />
    </div>
  );
};

//const el = <App/>

ReactDOM.render(<App />, document.getElementById("root"));
