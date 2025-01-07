import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

/**
 * Renders a Navbar component
 *
 *
 *
 * @returns {JSX.Element} The JSX representation of the Navbar component
 */
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <span className="nav-Header">Simple To-Do List App</span>
      <ul className="nav-bar-List">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todolist">TodoList</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
