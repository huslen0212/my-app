import React, { useState } from "react";
import "./user.css"; 
function User() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="container">
      <h1>User Information</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={e => setAge(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default User;
