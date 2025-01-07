import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoList.css";
import TodoCard from "../TodoCard/TodoCard.js";

/**
 * Renders a TodoList component that displays tasks.
 *
 * @param {Array} tasks - The array of tasks to be displayed on the card. Each task should be an object with at least 'title', 'description', and 'Completed status'.
 * @param {function} onToggleComplete - A callback function to toggle the completion status of a task. It should be called with the task ID or the task object.
 * @param {function} onDelete - A callback function to delete a task. It should be called with the task ID or the task object to remove it.
 *
 * @returns {JSX.Element} The JSX representation of a TodoList displaying task details.
 */

/**
 * useState hook to manage the state of a task.
 *
 * @type {Array}
 * @param {Object} task - An object that contains the task's title , description and completed status.
 * @param {function} setTasks - A function to update the tasks.
 *
 * @type {Array}
 * @param {Object} todo - An object that contains the todo's title , description and completed status.
 * @param {function} settodo - A function to update the todo from the api.
 */

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch to-do items on component mount
  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://retoolapi.dev/gFdtlP/data");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching the to-do items:", error);
    }
  };
  /**
   * useEffect hook to fetch user data when the component mounts.
   * This effect will run only once, similar to componentDidMount.
   *
   * @returns {void}
   */
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch all tasks from the API
  const fetchTodosList = () => {
    fetchTodos();
    tasks.push(...todos);
    setTasks(tasks);
  };
  // Function to add a new task
  const addTask = () => {
    if (title.trim() && description.trim()) {
      setTasks([
        ...tasks,
        {
          id: Math.floor(Math.random() * 100 + 1),
          title,
          completed: false,
          description,
        },
      ]);
      setTitle("");
      setDescription("");
    } else {
      alert("Both title and description are required!");
    }
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="todo-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="todo-textarea"
        ></textarea>
        <button onClick={addTask} className="add-task-button">
          Add Task
        </button>
        <button onClick={fetchTodosList} className="add-task-button">
          Fetch Tasks
        </button>
      </div>
      {/* Passing the list of tasks to TOdoCard compoent */}
      <TodoCard
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default TodoList;
