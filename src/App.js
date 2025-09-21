import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>To-Do List</h1>

        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`task-item ${todo.completed ? "completed" : ""}`}
            >
              <span onClick={() => toggleTask(index)}>{todo.text}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} Abhay's To-Do App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
