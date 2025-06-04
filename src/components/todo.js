import React, { useState } from "react";

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
    <div className="text-center mt-12 bg-gray-200 p-8 rounded-xl shadow-md w-80 mx-auto">
      <h1 className="mb-5 text-2xl font-bold">Todo List</h1>
      <div className="flex items-center justify-center gap-2">
        <input
          className="w-[200px] p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button className="px-5 py-2 mr-2  text-white bg-blue-600 rounded-md hover:bg-blue-800 transition"onClick={addTodo}>
          Add
        </button>
      </div>
        <ol className="list-decimal ml-3 mt-2 flex flex-col items-start">
          {todos.map((task, index) => (
            <li key={index} className="">{task}</li>
          ))}
        </ol>
    </div>
  );
}

export default Todo;