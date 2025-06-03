import Counter from "./components/counter";
import User from "./components/user";
import Todo from "./components/todo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <User />
      <Todo />
    </div>
  );
}

export default App;