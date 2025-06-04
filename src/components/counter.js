import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="text-center mt-12 bg-gray-200 p-8 rounded-xl shadow-md w-80 mx-auto">
      <h1 className="mb-5 text-2xl font-bold">Counter: {count}</h1>
      <button
        className="px-5 py-2 mr-2 mb-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className="px-5 py-2 mr-2 mb-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
      <button
        className="px-5 py-2 mb-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;