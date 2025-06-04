import React, { useState } from "react";

function User() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="text-center mt-12 bg-gray-200 p-8 rounded-xl shadow-md w-80 mx-auto">
      <h1 className="mb-5 text-2xl font-bold">User Information</h1>
      <div className="flex justify-start flex-col gap-2">
        <input
          className="w-[250px] p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="w-[250px] p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <p className="flex justify-start mb-1 font-bold">Name: {name}</p>
      <p className="flex justify-start font-bold">Age: {age}</p>
    </div>
  );
}

export default User;