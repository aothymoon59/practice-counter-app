import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={increaseCount} className="btn increase">
        Increase
      </button>
      <button
        disabled={count <= 0}
        onClick={decreaseCount}
        className="btn decrease"
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
