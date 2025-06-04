import Counter from "./components/counter";
import User from "./components/user";
import Todo from "./components/todo";

function App() {
  return (
    <div className="flex justify-between">
      <Counter />
      <User />
      <Todo />
    </div>
  );
}

export default App;
