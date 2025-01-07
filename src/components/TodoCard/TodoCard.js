import React from "react";
import "./TodoCard.css";

/* Renders a user To-do List card
 * @param {Object} task - The task object containing details
 * @param {string} task.title - Displays the task title
 * @param {string} task.description - Displays the task description
 * @param {boolean} task.description - Displays the task completion status
 * @param {function} onToggleComplete - A callback function to be executed when the button is clicked.
 * @param {function} onDelete - A callback function to be executed when the button is clicked.
 * @returns {JSX.Element} The JSX representation of the To-do List card
 */
const TodoCard = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="container">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <h3 className={`task-title ${task.completed ? "completed" : ""}`}>
              <b>Title :</b> {task.title}
            </h3>
            <p
              className={`task-description ${
                task.completed ? "completed" : ""
              }`}
            >
              <b>Description :</b> {task.description}
            </p>
            <div className="task-buttons">
              {/* Button to change the status of the task */}
              <button
                onClick={() => onToggleComplete(index)}
                className={`task-button complete-button ${
                  task.completed ? "completed" : ""
                }`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              {/* Button to delete the task */}
              <button
                onClick={() => onDelete(index)}
                className="task-button delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
