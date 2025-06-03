import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button style={{ marginLeft: "10px" }} onClick={addTodo}>
          Add
        </button>
      </div>
      <ol style={{ textAlign: "left"}}>
        {todos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;