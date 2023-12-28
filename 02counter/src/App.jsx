import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    console.log("value added", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  function reduceValue() {
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={reduceValue}>reduce value</button>
      <footer>
        <h3>Footer: {counter}</h3>
      </footer>
    </>
  );
}

export default App;
