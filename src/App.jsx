import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = () => {
    // Increment count by 1
    setCount(count + 1);
  };

  const incrementCountByTen = () => {
    // Increment count by 10
    setCount(count + 10);
    // Increment count2 by 1
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("Count2 changed, adding 10 to Count");
    setCount(count + 10);

    return () => {
      console.log("Effect cleanup or component unmount");
    };
  }, [count2]);

  return (
    <>
      <p>Counter : {count}</p>
      <p>Number of 10 Added: {count2}</p>
      <button onClick={incrementCount}>Add 1</button>
      <button onClick={incrementCountByTen}>Add 10</button>
    </>
  );
}

export default App;
