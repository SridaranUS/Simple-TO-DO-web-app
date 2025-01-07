import React from "react";
import "./HomePageContent.css";

/**
 * Renders a Home page content
 *
 *
 *
 * @returns {JSX.Element} The JSX representation of the HomePageContent
 */
const HomePageContent = () => {
  return (
    <div className="home-content">
      <h1>Simple To-do Application</h1>
      <p>
        This is a simple to-do application.Here you can add a task and also had
        the feauture to complete and delete
      </p>
      <ul className="about-todoapp">
        <li>
          Add Tasks: Users can input a task title and optional description.
        </li>
        <li>
          Mark as Completed: Toggle tasks between "completed" and "incomplete."
        </li>
        <li>Delete Tasks: Remove tasks from the list.</li>
        <li>
          Responsive Design: Works well on both desktop and mobile devices.
        </li>
      </ul>
    </div>
  );
};

export default HomePageContent;
