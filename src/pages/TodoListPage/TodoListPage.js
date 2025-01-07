import React from "react";
import NavBar from "../../components/NavBar/NavBar.js";
import TodoList from "../../components/TodoList/TodoList.js";

/**
 * Renders a TOdo List page content
 *
 *
 *
 * @returns {JSX.Element} The JSX representation of the Navbar and todo list page content
 */
const TodoListPage = () => {
  return (
    <>
      <NavBar />
      <TodoList />
    </>
  );
};

export default TodoListPage;
